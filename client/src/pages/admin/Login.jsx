import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import SEO from '../../components/SEO';
import { Lock, Mail, KeyRound, Loader2, AlertCircle } from 'lucide-react';

export default function AdminLogin() {
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/admin/dashboard', { replace: true });
    }
  }, [isAuthenticated, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setErrorMessage('Please enter both email and password.');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      await login(email, password);
      navigate('/admin/dashboard', { replace: true });
    } catch (err) {
      setStatus('error');
      setErrorMessage(err.message || 'Authentication failed. Please verify credentials.');
    }
  };

  return (
    <>
      <SEO
        title="Admin Portal Sign-In — HUNAR Creative Studio"
        description="Restricted administrative access for HUNAR Creative Studio directors."
      />

      <section className="min-h-[80vh] flex items-center justify-center py-20 px-4 bg-cream">
        <div className="w-full max-w-md bg-white border border-beige/70 rounded-lg p-8 sm:p-10 shadow-card">
          <div className="text-center mb-8">
            <div className="inline-flex p-3 rounded-full bg-olive/10 border border-olive/30 text-olive mb-3">
              <Lock className="w-6 h-6" />
            </div>
            <h1 className="font-serif text-3xl text-emerald font-medium">Studio CRM Login</h1>
            <p className="mt-1 text-xs text-charcoal/60 uppercase tracking-widest font-sans">
              Authorized Personnel Only
            </p>
          </div>

          {errorMessage && (
            <div className="mb-6 p-3.5 rounded bg-red-50 border border-red-200 text-red-700 text-xs flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5 text-red-500" />
              <p>{errorMessage}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="email" className="block text-xs uppercase tracking-wider text-charcoal font-medium mb-1.5">
                Admin Email Address
              </label>
              <div className="relative">
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="admin@hunarstudio.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-9 pr-3.5 py-2.5 text-sm bg-cream/30 border border-beige/70 text-charcoal rounded focus:border-emerald focus:bg-white focus:outline-none"
                />
                <Mail className="w-4 h-4 text-charcoal/40 absolute left-3 top-3" />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-xs uppercase tracking-wider text-charcoal font-medium mb-1.5">
                Password
              </label>
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

          <div className="mt-8 pt-6 border-t border-beige/40 text-center">
            <p className="text-[11px] text-charcoal/60">
              Default Seed: <code className="bg-cream border border-beige/60 px-1 py-0.5 rounded font-mono text-emerald">admin@hunarstudio.com</code>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

