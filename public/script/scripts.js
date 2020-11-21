const modaloverlay  = document.querySelector(".modal-overlay")
const cards = document.querySelectorAll(".card")

for (let card of cards) {
    card.addEventListener("click", function() {
        const imagemId = card.getAttribute("id")
        const text = card.querySelector(".card__content").innerText
        const title = card.querySelector(".card__info").innerText
        modaloverlay.classList.add("active")
        modaloverlay.querySelector("img").src = `/public/image/${imagemId}`
        modaloverlay.querySelector(".text").innerText = text
        modaloverlay.querySelector(".title").innerText = title
    })
}

document.querySelector(".close-modal").addEventListener("click", function() {
    modaloverlay.classList.remove("active")
})