const reducedMotion=window.matchMedia('(prefers-reduced-motion: reduce)');
document.querySelectorAll('.hero-cat').forEach(cat=>{
  function nudge(){if(!reducedMotion.matches&&!cat.classList.contains('wiggle'))cat.classList.add('wiggle');}
  cat.addEventListener('pointerenter',event=>{if(event.pointerType==='mouse')nudge();});
  cat.addEventListener('click',nudge);
  cat.addEventListener('animationend',()=>cat.classList.remove('wiggle'));
});
reducedMotion.addEventListener('change',event=>{if(event.matches)document.querySelectorAll('.hero-cat').forEach(cat=>cat.classList.remove('wiggle'));});
