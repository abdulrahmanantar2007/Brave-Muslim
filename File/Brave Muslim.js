// @name         Brave Muslim
// @description  يساعدك بغض البصر ويحميك من الظهور المفاجيء للإباحيات خلال التصفح.
// @version      1.0
// @match        *://*/*

const s = document.createElement('style');
s.textContent = `
    img { filter: blur(20px) !important; transition: filter .3s !important; }
    img:hover, *:has(> img):hover > img { filter: blur(0) !important; }
`;
document.documentElement.appendChild(s);