const creditsEl=document.getElementById('credits');
const generate=document.getElementById('generate');
const status=document.getElementById('status');
generate.addEventListener('click',()=>{
  const prompt=document.getElementById('prompt').value.trim();
  if(!prompt){status.textContent='Please enter a video prompt.';return}
  let c=Number(creditsEl.textContent);
  if(c<10){status.textContent='Not enough credits.';return}
  creditsEl.textContent=c-10;
  status.textContent='Generation request queued…';
  generate.disabled=true;
  setTimeout(()=>{status.textContent='Demo complete — connect your authorized video API backend to generate the real video.';generate.disabled=false},1400);
});
document.getElementById('adminOpen').onclick=()=>document.getElementById('adminModal').classList.add('show');
document.getElementById('adminClose').onclick=()=>document.getElementById('adminModal').classList.remove('show');
document.querySelectorAll('.choices button').forEach(btn=>{
  btn.onclick=()=>{btn.parentElement.querySelectorAll('button').forEach(x=>x.classList.remove('selected'));btn.classList.add('selected')}
});
