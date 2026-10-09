(function(){
const button=document.querySelector('.menu-toggle');
const nav=document.querySelector('.header-links');
if(button && nav){
 button.addEventListener('click',()=>{const open=nav.classList.toggle('is-open');button.setAttribute('aria-expanded',String(open));button.textContent=open?'✕':'☰';});
 nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{nav.classList.remove('is-open');button.setAttribute('aria-expanded','false');button.textContent='☰';}));
 document.addEventListener('keydown',(event)=>{if(event.key==='Escape'){nav.classList.remove('is-open');button.setAttribute('aria-expanded','false');button.textContent='☰';}});
}
})();