// Simple mobile nav toggle
const nav = document.getElementById('mainNav');
const toggle = document.getElementById('navToggle');
if(toggle){
  toggle.addEventListener('click', ()=>{
    const shown = nav.style.display === 'flex';
    nav.style.display = shown ? 'none' : 'flex';
    nav.style.flexDirection = 'column';
  });
}
