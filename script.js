const themeBtn=document.getElementById('themeBtn');
const saved=localStorage.getItem('cloudTheme');
if(saved==='dark'){document.body.classList.add('dark');if(themeBtn)themeBtn.textContent='☀️';}
if(themeBtn){themeBtn.addEventListener('click',()=>{document.body.classList.toggle('dark');const dark=document.body.classList.contains('dark');localStorage.setItem('cloudTheme',dark?'dark':'light');themeBtn.textContent=dark?'☀️':'🌙';});}
