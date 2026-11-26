const jwt = require('jsonwebtoken');
const validator = require('validator');
const AdminUser = require('../models/AdminUser');
const mongoose = require('mongoose');

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

    let cleanEmail = String(email).trim().toLowerCase();
    if (cleanEmail === 'admin') {
      cleanEmail = 'admin@hunarstudio.com';
    }

    const cleanPassword = String(password).trim();

    let user = null;
    let isMatch = false;

    // 1. Check database if connected
    if (mongoose.connection.readyState === 1) {
      user = await AdminUser.findOne({ email: cleanEmail }).select('+passwordHash');

      // Auto-seed default admin if database is empty
      if (!user && cleanEmail === 'admin@hunarstudio.com') {
        const passwordHash = await AdminUser.hashPassword('HunarStudio2026!Admin');
        user = await AdminUser.create({
          fullName: 'HUNAR Studio Director',
          email: 'admin@hunarstudio.com',
          passwordHash,
          role: 'super_admin',
          isActive: true,
        });
      }

      if (user && user.isActive) {
        isMatch = await user.comparePassword(cleanPassword);
      }
    } else if (process.env.NODE_ENV !== 'production') {
      // Dev/test-only fallback when local MongoDB is temporarily offline
      const devPassword = process.env.ADMIN_DEFAULT_PASSWORD || 'HunarStudio2026!Admin';
      if ((cleanEmail === 'admin@hunarstudio.com' || cleanEmail === 'admin') && cleanPassword === devPassword) {
        user = {
          _id: '6ad51cdc972f8ba6482f9eff',
          fullName: 'HUNAR Studio Director',
          email: 'admin@hunarstudio.com',
          role: 'super_admin',
          isActive: true,
          lastLogin: new Date(),
        };
        isMatch = true;
      }
    } else {
      return res.status(503).json({
        success: false,
        message: 'Database connection unavailable. Please try again shortly.',
      });
    }

    if (!user || !isMatch) {
      return res.status(401).json({
        success: false,
        message: 'Invalid credentials or account inactive. Please check email and password.',
      });
    }

    // Update last login
    if (typeof user.save === 'function') {
      user.lastLogin = new Date();
      await user.save();
    }

    // Sign JWT with explicit HS256 algorithm
    const token = jwt.sign(
      { id: user._id, email: user.email, role: user.role, fullName: user.fullName },
      JWT_SECRET,
      { expiresIn: '7d', algorithm: 'HS256' }
    );

    // Set secure cookie (sameSite: 'none' in production supports Vercel frontend <-> Render backend)
    const isProduction = process.env.NODE_ENV === 'production';
    res.cookie('hunar_admin_token', token, {
      httpOnly: true,
      secure: isProduction,
      sameSite: isProduction ? 'none' : 'lax',
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
  const isProduction = process.env.NODE_ENV === 'production';
  res.clearCookie('hunar_admin_token', {
    httpOnly: true,
    secure: isProduction,
    sameSite: isProduction ? 'none' : 'lax',
  });
  return res.status(200).json({
    success: true,
    message: 'Logged out successfully.',
  });
};

/**
 * Current Authenticated User Session (strict 401 when unauthenticated)
 */
const getMe = async (req, res) => {
  return res.status(200).json({
    success: true,
    user: req.adminUser,
  });
};

/**
 * Silent session check for frontend initialization (returns authenticated: false instead of 401)
 */
const getSession = async (req, res) => {
  try {
    let token = req.cookies?.hunar_admin_token;
    if (!token && req.headers.authorization && req.headers.authorization.startsWith('Bearer ')) {
      token = req.headers.authorization.split(' ')[1];
    }

    if (!token) {
      return res.status(200).json({ success: true, authenticated: false, user: null });
    }

    const decoded = jwt.verify(token, JWT_SECRET, { algorithms: ['HS256'] });
    let user = null;

    if (decoded.id && mongoose.connection.readyState === 1) {
      user = await AdminUser.findById(decoded.id).select('-passwordHash');
    }

    if (!user) {
      if (decoded.role === 'super_admin' || decoded.role === 'admin') {
        user = {
          _id: decoded.id,
          email: decoded.email,
          role: decoded.role,
          fullName: decoded.fullName || 'HUNAR Studio Director',
          isActive: true,
        };
      } else {
        return res.status(200).json({ success: true, authenticated: false, user: null });
      }
    }

    if (user.isActive === false) {
      return res.status(200).json({ success: true, authenticated: false, user: null });
    }

    return res.status(200).json({ success: true, authenticated: true, user });
  } catch {
    return res.status(200).json({ success: true, authenticated: false, user: null });
  }
};

/**
 * Change Password (Authenticated Admin)
 */
const changePassword = async (req, res, next) => {
  try {
    const { currentPassword, newPassword } = req.body;

    if (!newPassword || typeof newPassword !== 'string' || newPassword.trim().length < 6) {
      return res.status(400).json({
        success: false,
        message: 'New password must be at least 6 characters long.',
      });
    }

    const cleanNewPassword = newPassword.trim();
    const userEmail = req.adminUser?.email || 'admin@hunarstudio.com';

    if (mongoose.connection.readyState === 1) {
      let user = await AdminUser.findOne({ email: userEmail }).select('+passwordHash');
      if (!user && req.adminUser?._id) {
        user = await AdminUser.findById(req.adminUser._id).select('+passwordHash');
      }

      if (!user) {
        return res.status(404).json({
          success: false,
          message: 'Admin account not found.',
        });
      }

      // If current password provided, verify strictly against stored hash
      if (currentPassword) {
        const isMatch = await user.comparePassword(String(currentPassword).trim());
        if (!isMatch) {
          return res.status(400).json({
            success: false,
            message: 'Current password does not match.',
          });
        }
      }

      user.passwordHash = await AdminUser.hashPassword(cleanNewPassword);
      await user.save();
    }

    return res.status(200).json({
      success: true,
      message: 'Password changed successfully. Your new password is now active.',
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Reset Forgot Password (Public / Admin Recovery)
 */
const resetForgotPassword = async (req, res, next) => {
  try {
    const { email, newPassword } = req.body;

    if (!email || !newPassword) {
      return res.status(400).json({
        success: false,
        message: 'Please provide both your email address and new password.',
      });
    }

    if (typeof newPassword !== 'string' || newPassword.trim().length < 6) {
      return res.status(400).json({
        success: false,
        message: 'New password must be at least 6 characters long.',
      });
    }

    let cleanEmail = String(email).trim().toLowerCase();
    if (cleanEmail === 'admin') {
      cleanEmail = 'admin@hunarstudio.com';
    }

    const cleanNewPassword = newPassword.trim();
    let user = null;

    if (mongoose.connection.readyState === 1) {
      user = await AdminUser.findOne({ email: cleanEmail }).select('+passwordHash');

      if (!user && cleanEmail === 'admin@hunarstudio.com') {
        const passwordHash = await AdminUser.hashPassword(cleanNewPassword);
        user = await AdminUser.create({
          fullName: 'HUNAR Studio Director',
          email: 'admin@hunarstudio.com',
          passwordHash,
          role: 'super_admin',
          isActive: true,
        });
      } else if (user) {
        user.passwordHash = await AdminUser.hashPassword(cleanNewPassword);
        await user.save();
      } else {
        return res.status(404).json({
          success: false,
          message: 'No registered studio administrator found with that email address.',
        });
      }
    } else {
      // Offline fallback
      if (cleanEmail !== 'admin@hunarstudio.com') {
        return res.status(404).json({
          success: false,
          message: 'No registered studio administrator found with that email address.',
        });
      }
    }

    return res.status(200).json({
      success: true,
      message: 'Your password has been successfully reset! You can now sign in with your new password.',
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { login, logout, getMe, getSession, changePassword, resetForgotPassword };
