const burger = document.querySelector(".burger-menu")
const nav = document.querySelector("nav");
const body = document.querySelector("body");
const links = document.querySelectorAll("a.nav-links");

function navSlide() {
    nav.classList.toggle("nav-active");
    body.classList.toggle("body-fixed");
    burger.classList.toggle("select");

    for (let i=0; i<links.length; i++) {
        links[i].addEventListener("click", () => {
            nav.classList.remove("nav-active");
            body.classList.remove("body-fixed");
            burger.classList.remove("select");
        })
    }
        
}

burger.onclick = function() {
    navSlide();
}
