const btn=document.getElementById('calcBtn');
function calculate(){let value=parseFloat(document.getElementById('storageInput').value)||0;const unit=document.getElementById('unit').value;if(unit==='TB')value*=1024;
const providers=[['Google Drive',15],['OneDrive',5],['Dropbox',2]];const box=document.getElementById('calcResults');
box.innerHTML=providers.map(([name,free])=>{const extra=Math.max(0,value-free);const fits=value<=free;return `<div class="result"><h3>${name}</h3><div class="big">${free} GB free</div><p>${fits?'Your requirement fits within the free allocation.':`You need ${extra.toFixed(1)} GB more than the free allocation.`}</p></div>`}).join('');}
if(btn){btn.addEventListener('click',calculate);calculate();}
