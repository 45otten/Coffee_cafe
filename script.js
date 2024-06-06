
var links = document.querySelectorAll('ul a');
if(links)
document.addEventListener("DOMContentLoaded", function() {
    for (var i = 0; i < links.length; i++) {
        links[i].addEventListener('click', smoothScroll);
    }
    
    function smoothScroll(e) {
        e.preventDefault()
        var targetId = this.getAttribute('href')
        var targetElement = document.querySelector(targetId)
        var offsetTop = targetElement.offsetTop
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        })
    }
})

const navBar = document.querySelector(".navBar")
if(navBar)
document.addEventListener("scroll", function() {       
    const menuSection = document.getElementById("menuPg")
    const menuSectionTop = menuSection.offsetTop;
    const menuSectionHeight = menuSection.offsetHeight
    if (window.scrollY >= menuSectionTop){
        navBar.classList.add("black-bg")
    } 
    else{
        navBar.classList.remove("black-bg")
    } 
})

document.addEventListener("DOMContentLoaded", function() {
    const navToggleOn = document.querySelector(".toggleNavOn");
    const navToggleOff = document.querySelector(".toggleNavOff");
    const navBar = document.querySelector(".navBar");

    if (navToggleOn) {
        navToggleOn.addEventListener("click", function() {
            navBar.classList.add("navActive");
        });
    }

    if (navToggleOff) {
        navToggleOff.addEventListener("click", function() {
            navBar.classList.remove("navActive");
        });
    }
});

