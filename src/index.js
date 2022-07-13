
const menuToggle=document.querySelector(".toggle")
const sidebar=document.querySelector(".sidebar")
const navigatorAElement=document.querySelectorAll(".navigator")

menuToggle.addEventListener("click",toggleMenu)
function toggleMenu(){
    menuToggle.classList.toggle("active")
    sidebar.classList.toggle("active")
}

navigatorAElement.forEach(item => {
    item.addEventListener("click",toggleMenu)    
});