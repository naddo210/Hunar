const jwt = require('jsonwebtoken');
const validator = require('validator');
const AdminUser = require('../models/AdminUser');

const JWT_SECRET = process.env.JWT_SECRET || 'hunar_studio_jwt_secure_secret_key_2026_dev';

/**
 * Admin Login
 */
const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Please provide both email and password.',
      });
    }

    const cleanEmail = email.trim().toLowerCase();
    const user = await AdminUser.findOne({ email: cleanEmail }).select('+passwordHash');

    if (!user || !user.isActive) {
      return res.status(401).json({
        success: false,
        message: 'Invalid credentials or account inactive.',
      });
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: 'Invalid credentials or account inactive.',
      });
    }

    // Update last login
    user.lastLogin = new Date();
    await user.save();

    // Sign JWT
    const token = jwt.sign(
      { id: user._id, email: user.email, role: user.role, fullName: user.fullName },
      JWT_SECRET,
      { expiresIn: '7d' }
    );

    // Set secure cookie
    const isProduction = process.env.NODE_ENV === 'production';
    res.cookie('hunar_admin_token', token, {
      httpOnly: true,
      secure: isProduction,
      sameSite: isProduction ? 'strict' : 'lax',
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    return res.status(200).json({
      success: true,
      token,
      user: {
        id: user._id,
        fullName: user.fullName,
        email: user.email,
        role: user.role,
        lastLogin: user.lastLogin,
      },
      message: 'Successfully authenticated.',
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Admin Logout
 */
const logout = async (req, res) => {
  res.clearCookie('hunar_admin_token', {
    httpOnly: true,
    sameSite: process.env.NODE_ENV === 'production' ? 'strict' : 'lax',
  });
  return res.status(200).json({
    success: true,
    message: 'Logged out successfully.',
  });
};

/**
 * Current Authenticated User Session
 */
const getMe = async (req, res) => {
  return res.status(200).json({
    success: true,
    user: req.adminUser,
  });
};

module.exports = { login, logout, getMe };
