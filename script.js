const egg = document.getElementById('egg');  

egg.addEventListener('click', (e) => {
    e.preventDefault();
    bounceEgg();
})
function bounceEgg() {
    document.getElementById('egg').classList.add("bounce");
    document.getElementById('Text').classList.add("hide");
    crackEggOne();
    crackEggTwo();
    crackEggThree();
    crackEggFour();
    crackEggFive();
}

function crackEggOne() {
   const crack = function() {  
   document.getElementById('CrackOne').classList.remove("hide"); 
}
 
setTimeout(crack, 1000); 
}

function crackEggTwo() {
    const crack = function() {  
    document.getElementById('CrackTwo').classList.remove("hide"); 
 }
  
 setTimeout(crack, 2000); 
 }

 function crackEggThree() {
    const crack = function() {  
    document.getElementById('CrackThree').classList.remove("hide"); 
 }
  
 setTimeout(crack, 3000); 
 }

 function crackEggFour() {
    const crack = function() {  
    document.getElementById('CrackFour').classList.remove("hide"); 
 }
  
 setTimeout(crack, 4000); 
 }

 function crackEggFive() {
    const crack = function() {  
    document.getElementById('CrackFive').classList.remove("hide"); 
 }
  
 setTimeout(crack, 5000); 
 }
