import React, { useState } from 'react';
import { useAttribution } from '../context/AttributionContext';
import { ShieldCheck, Settings, X, Check } from 'lucide-react';

export default function CookieConsent() {
  const { cookieConsent, updateConsent } = useAttribution();
  const [showPreferences, setShowPreferences] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  if (cookieConsent.answered) return null;

  const handleAcceptAll = () => {
    updateConsent({
      essential: true,
      analytics: true,
      marketing: true,
    });
  };

  const handleRejectAll = () => {
    updateConsent({
      essential: true,
      analytics: false,
      marketing: false,
    });
  };

  const handleSaveCustom = () => {
    updateConsent({
      essential: true,
      analytics,
      marketing,
    });
    setShowPreferences(false);
  };

  return (
    <aside
      aria-label="Cookie and Privacy Consent"
      className="fixed bottom-0 inset-x-0 z-50 p-4 sm:p-6 bg-cream/95 backdrop-blur-md border-t border-beige/70 shadow-card transition-all duration-300"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-start gap-3">
          <div className="mt-1 p-2 rounded-full bg-olive/10 text-olive flex-shrink-0">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-serif text-lg text-emerald font-medium">Privacy & Curation Preferences</h4>
            <p className="text-sm text-charcoal/80 max-w-2xl mt-0.5 leading-relaxed">
              We use essential cookies to maintain studio security and integrity. With your permission, we also use analytical and attribution cookies to understand how collectors and clients discover our creative works.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2.5 w-full md:w-auto justify-end">
          <button
            onClick={() => setShowPreferences(!showPreferences)}
            className="text-xs uppercase tracking-wider font-semibold text-charcoal hover:text-emerald px-3 py-2 border border-beige/70 hover:border-emerald rounded transition"
          >
            Preferences
          </button>
          <button
            onClick={handleRejectAll}
            className="text-xs uppercase tracking-wider font-semibold text-charcoal hover:text-emerald px-4 py-2 border border-beige/70 hover:border-emerald rounded transition"
          >
            Essential Only
          </button>
          <button
            onClick={handleAcceptAll}
            className="text-xs uppercase tracking-wider font-semibold text-cream bg-emerald hover:bg-emerald-dark px-5 py-2 rounded transition shadow-sm hover:shadow-emerald"
          >
            Accept All
          </button>
        </div>
      </div>

      {/* Preferences Drawer / Modal */}
      {showPreferences && (
        <div className="mt-4 pt-4 border-t border-beige/60 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-charcoal/80">
            <div className="p-3 bg-white border border-beige/70 rounded shadow-subtle">
              <div className="flex items-center justify-between mb-1">
                <span className="font-semibold text-emerald">Essential Cookies</span>
                <span className="text-[10px] uppercase font-bold text-olive">Always Active</span>
              </div>
              <p>Required for secure form submissions, anti-spam verification, and session state.</p>
            </div>

            <div className="p-3 bg-white border border-beige/70 rounded flex flex-col justify-between shadow-subtle">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="font-semibold text-emerald">Analytics & Traffic</span>
                  <input
                    type="checkbox"
                    checked={analytics}
                    onChange={(e) => setAnalytics(e.target.checked)}
                    className="accent-emerald cursor-pointer w-4 h-4"
                  />
                </div>
                <p>Helps us measure studio visitor interactions and improve website responsiveness.</p>
              </div>
            </div>

            <div className="p-3 bg-white border border-beige/70 rounded flex flex-col justify-between shadow-subtle">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="font-semibold text-emerald">Marketing & Attribution</span>
                  <input
                    type="checkbox"
                    checked={marketing}
                    onChange={(e) => setMarketing(e.target.checked)}
                    className="accent-emerald cursor-pointer w-4 h-4"
                  />
                </div>
                <p>Preserves campaign attribution and referral sources across project inquiries.</p>
              </div>
            </div>
          </div>

          <div className="mt-3 flex justify-end">
            <button
              onClick={handleSaveCustom}
              className="text-xs uppercase tracking-wider font-semibold text-cream bg-emerald hover:bg-emerald-dark px-4 py-2 rounded transition shadow-sm"
            >
              Save Custom Preferences
            </button>
          </div>
        </div>
      )}
    </aside>
  );
}
