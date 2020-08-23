var showUL=document.querySelector('ul');
var shareBtn=document.querySelector('.share-img');

shareBtn.addEventListener('click',display);
showUL.style.display='none';

function display(){
if (showUL.style.display==='none'){
    showUL.style.display='flex';
} else{
    showUL.style.display='none';
}  
}


