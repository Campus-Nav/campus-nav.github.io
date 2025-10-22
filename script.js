function init() {
    // Initializes the page by adding global code (the navigation bar and the footer)
    let navbar_container = document.getElementById("navbar");
    let footer_container = document.getElementById("footer");
    if(navbar_container) {
        fetch("/navigation.html").then((resp) => resp.text()).then((htmltext) => {
            navbar_container.innerHTML = htmltext;
        })
    }

    if(footer_container) {
        fetch("/footer.html").then((resp) => resp.text()).then((htmltext) => {
            footer_container.innerHTML = htmltext;
        })
    }
}

document.body.onload = function(){
    init();
};

function toggleMenu() {
    let menubar = document.querySelector(".menu-content");
    menubar.classList.toggle("visible");
}