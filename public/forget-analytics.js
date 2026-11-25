/*
 * arfedait.no removed Google Analytics on 25.11.2026. Visitors who accepted it earlier may still hold
 * its first-party cookies (_ga, _ga_*) and the stored choice. This removes them; nothing is sent
 * anywhere. It can be deleted once those cookies have expired (GA sets them for up to two years).
 */
(function () {
  try { window.localStorage.removeItem('arfed_consent'); } catch (e) { /* storage blocked */ }
  var names = document.cookie.split(';').map(function (c) { return c.split('=')[0].trim(); })
    .filter(function (n) { return n === '_ga' || n.indexOf('_ga_') === 0 || n === '_gid'; });
  var host = window.location.hostname;
  var domains = ['', host, '.' + host, 'arfedait.no', '.arfedait.no'];
  names.forEach(function (n) {
    domains.forEach(function (d) {
      document.cookie = n + '=; Max-Age=0; path=/' + (d ? '; domain=' + d : '') + '; SameSite=Lax; Secure';
    });
  });
})();
