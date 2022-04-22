const egg = document.getElementById('egg');  

egg.addEventListener('click', (e) => {
    e.preventDefault();
    crackEgg();
})
function crackEgg() {
    document.getElementById('Crack').classList.remove("hide");
}
