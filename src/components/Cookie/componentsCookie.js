import React from 'react';
import CookieConsent from 'react-cookie-consent';

export default function ComponentsCookie() {
  return (
    <CookieConsent
      acceptOnScroll={false}
      expires={150}
      buttonText="I accept"
      cookieName="AnalyticCookiePermission"
      location="bottom"
      style={{ background: '#363636', fontSize: '13px' }}
      containerClasses="googleFontsMontserrat fontSizeTag"
      buttonClasses="googleFontsPoppins "
      buttonStyle={{
        background: '#ff6666',
        color: '#000',
      }}
    >
      <p>
        EtienneJuz file and use cookies and similar technologies on this website
        for statistical and analytical purposes, to provide an improved and more
        user-friendly user experience
      </p>
    </CookieConsent>
  );
}
