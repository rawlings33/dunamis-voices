// script.js - nav active, play toggle, billing toggle
document.addEventListener('DOMContentLoaded', function(){
  // Bottom nav active based on filename
  try{
    const links = document.querySelectorAll('.bottom-nav a');
    const file = location.pathname.split('/').pop() || 'index.html';
    links.forEach(a=> a.classList.remove('active'));
    let target = 'index.html';
    if(file === '' || file === 'index.html') target='index.html';
    else if(file === 'library.html') target='library.html';
    else if(file === 'player.html') target='player.html';
    else if(file === 'subscription.html') target='subscription.html';
    const activeLink = Array.from(links).find(a => a.getAttribute('href') === target);
    if(activeLink) activeLink.classList.add('active');

    // make nav links navigate normally (no extra handlers required)
  }catch(e){console.warn(e)}

  // Play toggle (swap play/pause svg)
  const playBtn = document.getElementById('playBtn');
  if(playBtn){
    playBtn.addEventListener('click', ()=>{
      const img = playBtn.querySelector('img');
      const playSrc = 'assets/icons/play-circle.svg';
      const pauseSrc = 'assets/icons/pause-circle.svg';
      img.src = img.src.endsWith('play-circle.svg') ? pauseSrc : playSrc;
    });
  }

  // Billing toggle (if present)
  const billing = document.getElementById('billingToggle');
  if(billing){
    const prices = document.querySelectorAll('.plan-price');
    function updatePrices(annual){
      prices.forEach(p=>{
        const m = p.getAttribute('data-month');
        const y = p.getAttribute('data-year');
        p.textContent = annual ? (y||m) : (m||y);
      });
    }
    billing.addEventListener('change', (e)=> updatePrices(e.target.checked));
    updatePrices(billing.checked);
  }
});
