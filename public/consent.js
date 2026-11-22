/*
 * Analytics only with consent (ekomloven § 3-15; GDPR art. 6(1)(a) and 7).
 *
 * Nothing is loaded from Google and no cookie is set until the visitor accepts. The choice is
 * kept in localStorage (arfed_consent = granted | denied) and can be changed at any time with
 * window.arfedConsent.reset(). The GA4 id comes from the data-ga-id attribute of this script tag.
 * Same behaviour as consent.js on arfedai.no.
 */
(function () {
  'use strict';
  var tag = document.querySelector('script[data-ga-id]');
  var GA_ID = tag ? tag.getAttribute('data-ga-id') : '';
  var KEY = 'arfed_consent';
  var loaded = false;

  function read(key) {
    try {
      return window.localStorage.getItem(key);
    } catch (e) {
      return null;
    }
  }
  function write(key, value) {
    try {
      if (value === null) window.localStorage.removeItem(key);
      else window.localStorage.setItem(key, value);
    } catch (e) {
      /* private mode: the choice lasts for this page only */
    }
  }

  function loadAnalytics() {
    if (loaded || !GA_ID) return;
    loaded = true;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () {
      window.dataLayer.push(arguments);
    };
    window.gtag('js', new Date());
    window.gtag('config', GA_ID, { cookie_flags: 'SameSite=Lax;Secure', anonymize_ip: true });
    var script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
    document.head.appendChild(script);
  }

  function button(label, primary, onClick) {
    var b = document.createElement('button');
    b.type = 'button';
    b.textContent = label;
    b.style.cssText =
      'font:600 14px Inter,system-ui,sans-serif;padding:8px 16px;border-radius:8px;cursor:pointer;border:1px solid #0F172A;' +
      (primary ? 'background:#0F172A;color:#fff;' : 'background:#fff;color:#0F172A;');
    b.addEventListener('click', onClick);
    return b;
  }

  function ask() {
    if (document.getElementById('arfed-consent')) return;
    var norwegian = (document.documentElement.lang || 'no').slice(0, 2) !== 'en';
    var bar = document.createElement('div');
    bar.id = 'arfed-consent';
    bar.setAttribute('role', 'dialog');
    bar.setAttribute('aria-live', 'polite');
    bar.setAttribute('aria-label', norwegian ? 'Informasjonskapsler' : 'Cookies');
    bar.style.cssText =
      'position:fixed;left:16px;right:16px;bottom:16px;z-index:2147483000;max-width:720px;margin:0 auto;padding:16px;' +
      'background:#fff;color:#0F172A;border:1px solid #CBD5E1;border-radius:12px;box-shadow:0 10px 30px rgba(0,0,0,.15);' +
      'font:400 14px/1.5 Inter,system-ui,sans-serif;display:flex;flex-wrap:wrap;gap:12px;align-items:center';
    var text = document.createElement('p');
    text.style.cssText = 'margin:0;flex:1 1 320px';
    text.textContent = norwegian
      ? 'Vi vil gjerne bruke Google Analytics for å se hvordan nettstedet brukes. Det setter informasjonskapsler og sender IP-adressen din til Google. Ingenting lastes før du godtar.'
      : 'We would like to use Google Analytics to see how the site is used. It sets cookies and sends your IP address to Google. Nothing is loaded until you accept.';
    function choose(value) {
      write(KEY, value);
      bar.remove();
      if (value === 'granted') loadAnalytics();
    }
    bar.appendChild(text);
    bar.appendChild(button(norwegian ? 'Avslå' : 'Decline', false, function () { choose('denied'); }));
    bar.appendChild(button(norwegian ? 'Godta' : 'Accept', true, function () { choose('granted'); }));
    document.body.appendChild(bar);
  }

  window.arfedConsent = {
    reset: function () {
      write(KEY, null);
      ask();
    },
  };

  function start() {
    var choice = read(KEY);
    if (choice === 'granted') loadAnalytics();
    else if (choice !== 'denied') ask();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else start();
})();
