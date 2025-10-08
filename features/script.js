// Add interactivity to the card sprites
let cards = Array.from(document.getElementsByClassName("card"))

cards.forEach((card) => {
    card.onmouseover = function() {
        card.classList.toggle("unflip", false)
        card.classList.toggle("flip", true)
    };

    card.onmouseleave = function() {
        card.classList.toggle("flip", false)
        card.classList.toggle("unflip", true)
    }
})