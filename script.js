// Back to top button — show after scrolling 400px
const totop = document.getElementById('totop');

window.addEventListener('scroll', () => {
  totop.classList.toggle('visible', window.scrollY > 400);
});
