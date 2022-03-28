const navBar = document.querySelector(".fixed-top");
const blueCont = document.querySelector(".blue-con");


function navbar() {
    let blueContTop = blueCont.clientHeight

    if (window.pageYOffset > blueContTop) {
        navBar.classList.add("active");
    } else {
        navBar.classList.remove("active");
    }
};

window.addEventListener("scroll", navbar)