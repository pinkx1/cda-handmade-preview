function updateViewportWidth(){document.documentElement.style.setProperty('--viewport-width',Math.min(document.documentElement.clientWidth,document.body.clientWidth)+'px');}
updateViewportWidth();
window.addEventListener('resize',updateViewportWidth,{passive:true});
const viewportObserver=new ResizeObserver(updateViewportWidth);
viewportObserver.observe(document.documentElement);
viewportObserver.observe(document.body);
const reducedMotion=window.matchMedia('(prefers-reduced-motion: reduce)');
reducedMotion.addEventListener('change',event=>{if(event.matches)document.querySelectorAll('.hero-cat.wiggle').forEach(cat=>cat.classList.remove('wiggle'));});
document.querySelectorAll('.hero-cat').forEach(cat=>{
  function nudge(){if(reducedMotion.matches||cat.classList.contains('wiggle'))return;cat.classList.add('wiggle');}
  cat.addEventListener('pointerenter',event=>{if(event.pointerType==='mouse')nudge();});
  cat.addEventListener('click',nudge);
  cat.addEventListener('animationend',()=>cat.classList.remove('wiggle'));
});
