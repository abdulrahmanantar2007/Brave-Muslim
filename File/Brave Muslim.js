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

const s = document.createElement('style');
s.textContent = `
    img { filter: blur(20px) !important; transition: filter .3s !important; }
    img:hover, *:has(> img):hover > img { filter: blur(0) !important; }
`;
document.documentElement.appendChild(s);