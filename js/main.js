// Small, dependency-free enhancement: reveal sections as they enter the viewport.
const observer = new IntersectionObserver(entries => entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('in-view'); }), {threshold:.08});
document.querySelectorAll('.section,.project-card,.trajectory article').forEach(el => observer.observe(el));
