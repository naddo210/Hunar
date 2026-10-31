import React, { createContext, useContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { initAttributionTracker, getStoredAttribution } from '../utils/attribution';

const AttributionContext = createContext(null);

export const AttributionProvider = ({ children }) => {
  const location = useLocation();
  const [attribution, setAttribution] = useState(null);
  const [cookieConsent, setCookieConsent] = useState(() => {
    try {
      const saved = localStorage.getItem('_hunar_consent');
      if (saved) return JSON.parse(saved);
    } catch {
      // fallback
    }
    return {
      answered: false,
      essential: true,
      analytics: false,
      marketing: false,
    };
  });

  // Re-run tracking when URL path or query params change
  useEffect(() => {
    const current = initAttributionTracker();
    setAttribution(current);
  }, [location.pathname, location.search]);

  const updateConsent = (preferences) => {
    const newConsent = {
      ...cookieConsent,
      ...preferences,
      answered: true,
      timestamp: new Date().toISOString(),
    };
    setCookieConsent(newConsent);
    try {
      localStorage.setItem('_hunar_consent', JSON.stringify(newConsent));
    } catch (e) {
      console.warn('Unable to persist consent:', e);
    }
  };

  const getAttributionPayload = () => {
    const data = getStoredAttribution();
    return {
      visitor: data?.visitor || { type: 'new', device: 'desktop' },
      firstTouch: data?.firstTouch || {},
      lastTouch: data?.lastTouch || {},
      consent: {
        consentToContact: true,
        cookiePreferences: {
          essential: cookieConsent.essential,
          analytics: cookieConsent.analytics,
          marketing: cookieConsent.marketing,
        },
      },
    };
  };

  return (
    <AttributionContext.Provider
      value={{
        attribution,
        cookieConsent,
        updateConsent,
        getAttributionPayload,
      }}
    >
      {children}
    </AttributionContext.Provider>
  );
};

export const useAttribution = () => {
  const context = useContext(AttributionContext);
  if (!context) {
    throw new Error('useAttribution must be used within an AttributionProvider');
  }
  return context;
};
