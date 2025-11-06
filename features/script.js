// Add interactivity to the card sprites
let cards = Array.from(document.getElementsByClassName("card"))

cards.forEach((card) => {
    card.setAttribute("tabindex", '0')

    function unflip(){
        card.classList.toggle("flip", false)
        card.classList.toggle("unflip", true)
    }

    function flip() {
        card.classList.toggle("unflip", false)
        card.classList.toggle("flip", true)
    }

    card.onmouseover = flip;
    card.onmouseleave = unflip;
    card.onfocus = flip;
    card.onblur = unflip;
})