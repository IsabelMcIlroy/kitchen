const egg = document.getElementById('egg');  

egg.addEventListener('click', (e) => {
    e.preventDefault();
    bounceEgg();
})
function bounceEgg() {
    document.getElementById('egg').classList.add("bounce");
    crackEgg();
}

function crackEgg() {
   const crack = function() {  
   document.getElementById('Crack').classList.remove("hide"); 
}
 
setTimeout(crack, 1000); 
}

