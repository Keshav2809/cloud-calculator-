const search=document.getElementById('searchBox'), filter=document.getElementById('filter');
function updateTable(){const q=(search.value||'').toLowerCase(), cat=filter.value;
document.querySelectorAll('#comparisonTable tbody tr').forEach(row=>{const text=row.innerText.toLowerCase();const okText=text.includes(q);const okCat=cat==='all'||row.dataset.cat===cat;row.style.display=okText&&okCat?'':'none';});}
if(search)search.addEventListener('input',updateTable);if(filter)filter.addEventListener('change',updateTable);
