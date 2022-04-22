const egg = document.getElementById('egg');  

egg.addEventListener('click', (e) => {
    e.preventDefault();
    crackEgg();
})
function crackEgg() {
    document.getElementById('egg').classList.add("bouncing");
    document.getElementById('Crack').classList.remove("hide");
}