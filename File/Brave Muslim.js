// ==UserScript==
// @name         Brave Muslim
// @namespace    abdulrahmanantar2007@proton.me
// @version      1.0
// @description  يساعدك بغض البصر ويحميك من الظهور المفاجيء للإباحيات خلال التصفح.
// @author       Abdulrahman Antar
// @match        *://*/*
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function () {
  'use strict';

  // ===== القاعدتين الأولانيين (#$# = حقن CSS) =====
  const css = `
    img, video { filter: blur(20px); }
    img:hover, *:hover > img { filter: none; transition: filter .3s; }
  `;
  const style = document.createElement('style');
  style.textContent = css;
  (document.head || document.documentElement).appendChild(style);

  ['play', 'pause', 'ended'].map(t =>
    addEventListener(t, e =>
      e.target.localName == 'video' &&
      (e.target.style.filter = t == 'play' ? 'none' : ''),
      true)
  );
})();