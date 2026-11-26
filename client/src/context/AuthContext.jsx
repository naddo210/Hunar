import React, { createContext, useContext, useState, useEffect } from 'react';
import { apiUrl, parseApiResponse } from '../utils/api';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check active session on initial load
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const storedToken = localStorage.getItem('hunar_admin_token');
        const headers = storedToken ? { Authorization: `Bearer ${storedToken}` } : {};

        const res = await fetch(apiUrl('/api/auth/me'), {
          credentials: 'include',
          headers,
        });

        if (res.ok) {
          const data = await parseApiResponse(res);
          if (data.success && data.user) {
            setUser(data.user);
          }
        } else if (res.status === 401) {
          localStorage.removeItem('hunar_admin_token');
        }
      } catch (err) {
        console.warn('Auth check skipped or failed:', err.message);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  const login = async (email, password) => {
    const res = await fetch(apiUrl('/api/auth/login'), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ email, password }),
    });

    const data = await parseApiResponse(res);
    if (!res.ok) {
      throw new Error(data.message || 'Login failed.');
    }

    if (data.token) {
      localStorage.setItem('hunar_admin_token', data.token);
    }
    setUser(data.user);
    return data;
  };

  const logout = async () => {
    try {
      const storedToken = localStorage.getItem('hunar_admin_token');
      const headers = storedToken ? { Authorization: `Bearer ${storedToken}` } : {};

      await fetch(apiUrl('/api/auth/logout'), {
        method: 'POST',
        headers,
        credentials: 'include',
      });
    } catch (e) {
      console.warn('Logout network error:', e);
    } finally {
      localStorage.removeItem('hunar_admin_token');
      setUser(null);
    }
  };

  const changePassword = async (currentPassword, newPassword) => {
    const storedToken = localStorage.getItem('hunar_admin_token');
    const headers = {
      'Content-Type': 'application/json',
      ...(storedToken && { Authorization: `Bearer ${storedToken}` }),
    };

    const res = await fetch(apiUrl('/api/auth/change-password'), {
      method: 'POST',
      headers,
      credentials: 'include',
      body: JSON.stringify({ currentPassword, newPassword }),
    });

    const data = await parseApiResponse(res);
    if (!res.ok) {
      throw new Error(data.message || 'Failed to update password.');
    }
    return data;
  };

  const resetPassword = async (email, newPassword) => {
    const res = await fetch(apiUrl('/api/auth/reset-password'), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ email, newPassword }),
    });

    const data = await parseApiResponse(res);
    if (!res.ok) {
      throw new Error(data.message || 'Failed to reset password.');
    }
    return data;
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        isAuthenticated: Boolean(user),
        login,
        logout,
        changePassword,
        resetPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
