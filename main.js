const yes = document.querySelector("#yes");
let no = document.querySelector('#No');
let No = document.querySelector('.No');
let h2 = document.querySelector('h2')
let arr = ['Last Chance..','Surely Not!','Plz Plz','Are you sure','Think again, please.']
let currentIndex = 0;
yes.addEventListener('click',()=>{
    window.location.href = 'Yes.html'
})


document.addEventListener('DOMContentLoaded',()=>{
  no.addEventListener('click', function() {
    window.location.href = 'No.html'
    
  });
})
  No.addEventListener('click', function() {
   
    h2.innerHTML=arr[currentIndex];
    currentIndex = (currentIndex + 1) % arr.length;
    
  });

 
 
