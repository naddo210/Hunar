import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import SEO from '../../components/SEO';
import { Lock, Mail, KeyRound, Loader2, AlertCircle, CheckCircle2, ArrowLeft } from 'lucide-react';

export default function AdminLogin() {
  const { login, resetPassword, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const [mode, setMode] = useState('login'); // 'login' | 'forgot'
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'error' | 'success'
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/admin/dashboard', { replace: true });
    }
  }, [isAuthenticated, navigate]);

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setErrorMessage('Please enter both email and password.');
      return;
    }

    setStatus('loading');
    setErrorMessage('');
    setSuccessMessage('');

    try {
      await login(email, password);
      navigate('/admin/dashboard', { replace: true });
    } catch (err) {
      setStatus('error');
      setErrorMessage(err.message || 'Authentication failed. Please verify credentials.');
    }
  };

  const handleForgotSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setErrorMessage('Please enter your email and new password.');
      return;
    }

    if (password.length < 6) {
      setErrorMessage('New password must be at least 6 characters long.');
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match. Please re-enter.');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      const res = await resetPassword(email, password);
      setStatus('success');
      setSuccessMessage(res.message || 'Password successfully reset! You can now sign in.');
      setMode('login');
      // keep email and password pre-filled for immediate convenient sign in
    } catch (err) {
      setStatus('error');
      setErrorMessage(err.message || 'Failed to reset password. Please check your email address.');
    }
  };

  return (
    <>
      <SEO
        title={mode === 'forgot' ? 'Reset Studio Password — HUNAR Creative Studio' : 'Admin Portal Sign-In — HUNAR Creative Studio'}
        description="Restricted administrative access for HUNAR Creative Studio directors."
      />

      <section className="min-h-[80vh] flex items-center justify-center py-20 px-4 bg-cream">
        <div className="w-full max-w-md bg-white border border-beige/70 rounded-lg p-8 sm:p-10 shadow-card">
          
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex p-3 rounded-full bg-olive/10 border border-olive/30 text-olive mb-3">
              {mode === 'forgot' ? <KeyRound className="w-6 h-6" /> : <Lock className="w-6 h-6" />}
            </div>
            <h1 className="font-serif text-3xl text-emerald font-medium">
              {mode === 'forgot' ? 'Reset Password' : 'Studio CRM Login'}
            </h1>
            <p className="mt-1 text-xs text-charcoal/60 uppercase tracking-widest font-sans">
              {mode === 'forgot' ? 'Director Account Recovery' : 'Authorized Personnel Only'}
            </p>
          </div>

          {/* Success Banner */}
          {successMessage && (
            <div className="mb-6 p-3.5 rounded bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5 text-emerald-600" />
              <p>{successMessage}</p>
            </div>
          )}

          {/* Error Banner */}
          {errorMessage && (
            <div className="mb-6 p-3.5 rounded bg-red-50 border border-red-200 text-red-700 text-xs flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5 text-red-500" />
              <p>{errorMessage}</p>
            </div>
          )}

          {/* Login Form */}
          {mode === 'login' ? (
            <form onSubmit={handleLoginSubmit} className="space-y-5">
              <div>
                <label htmlFor="email" className="block text-xs uppercase tracking-wider text-charcoal font-medium mb-1.5">
                  Admin Email Address
                </label>
                <div className="relative">
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="Enter studio admin email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-9 pr-3.5 py-2.5 text-sm bg-cream/30 border border-beige/70 text-charcoal rounded focus:border-emerald focus:bg-white focus:outline-none"
                  />
                  <Mail className="w-4 h-4 text-charcoal/40 absolute left-3 top-3" />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label htmlFor="password" className="block text-xs uppercase tracking-wider text-charcoal font-medium">
                    Password
                  </label>
                  <button
                    type="button"
                    onClick={() => {
                      setMode('forgot');
                      setErrorMessage('');
                      setSuccessMessage('');
                      setPassword('');
                      setConfirmPassword('');
                    }}
                    className="text-[11px] text-olive hover:text-emerald hover:underline font-medium"
                  >
                    Forgot password?
                  </button>
                </div>
                <div className="relative">
                  <input
                    id="password"
                    type="password"
                    required
                    placeholder="••••••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-9 pr-3.5 py-2.5 text-sm bg-cream/30 border border-beige/70 text-charcoal rounded focus:border-emerald focus:bg-white focus:outline-none"
                  />
                  <KeyRound className="w-4 h-4 text-charcoal/40 absolute left-3 top-3" />
                </div>
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full mt-4 flex items-center justify-center gap-2 py-3 bg-emerald hover:bg-emerald-dark text-cream text-xs uppercase tracking-widest font-semibold rounded transition shadow-sm hover:shadow-emerald disabled:opacity-60"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-beige" />
                    <span>Authenticating...</span>
                  </>
                ) : (
                  <span>Sign In to CRM</span>
                )}
              </button>
            </form>
          ) : (
            /* Forgot / Reset Password Form */
            <form onSubmit={handleForgotSubmit} className="space-y-4">
              <div>
                <label htmlFor="reset-email" className="block text-xs uppercase tracking-wider text-charcoal font-medium mb-1.5">
                  Admin Email Address
                </label>
                <div className="relative">
                  <input
                    id="reset-email"
                    type="email"
                    required
                    placeholder="Enter studio admin email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-9 pr-3.5 py-2.5 text-sm bg-cream/30 border border-beige/70 text-charcoal rounded focus:border-emerald focus:bg-white focus:outline-none"
                  />
                  <Mail className="w-4 h-4 text-charcoal/40 absolute left-3 top-3" />
                </div>
              </div>

              <div>
                <label htmlFor="new-password" className="block text-xs uppercase tracking-wider text-charcoal font-medium mb-1.5">
                  New Password (min 6 chars)
                </label>
                <div className="relative">
                  <input
                    id="new-password"
                    type="password"
                    required
                    minLength={6}
                    placeholder="••••••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-9 pr-3.5 py-2.5 text-sm bg-cream/30 border border-beige/70 text-charcoal rounded focus:border-emerald focus:bg-white focus:outline-none"
                  />
                  <KeyRound className="w-4 h-4 text-charcoal/40 absolute left-3 top-3" />
                </div>
              </div>

              <div>
                <label htmlFor="confirm-password" className="block text-xs uppercase tracking-wider text-charcoal font-medium mb-1.5">
                  Confirm New Password
                </label>
                <div className="relative">
                  <input
                    id="confirm-password"
                    type="password"
                    required
                    minLength={6}
                    placeholder="••••••••••••"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full pl-9 pr-3.5 py-2.5 text-sm bg-cream/30 border border-beige/70 text-charcoal rounded focus:border-emerald focus:bg-white focus:outline-none"
                  />
                  <Lock className="w-4 h-4 text-charcoal/40 absolute left-3 top-3" />
                </div>
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full mt-4 flex items-center justify-center gap-2 py-3 bg-emerald hover:bg-emerald-dark text-cream text-xs uppercase tracking-widest font-semibold rounded transition shadow-sm hover:shadow-emerald disabled:opacity-60"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-beige" />
                    <span>Updating Password...</span>
                  </>
                ) : (
                  <span>Reset & Save Password</span>
                )}
              </button>

              <div className="pt-2 text-center">
                <button
                  type="button"
                  onClick={() => {
                    setMode('login');
                    setErrorMessage('');
                  }}
                  className="inline-flex items-center gap-1.5 text-xs text-charcoal/70 hover:text-emerald transition"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back to Sign In</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </section>
    </>
  );
}


