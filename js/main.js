const headerContentBanner = document.querySelector(".header__content-banner")
const headerContentTitle = document.querySelector(".header__content-title")
const headerContentName = document.querySelector(".header__content-name")
const respectVideo = document.querySelector(".respect__video")

document.addEventListener("keydown", (e) => {
    if (e.key == "z" || e.key == "я") {
        headerContentBanner.classList.toggle("active")
        headerContentTitle.classList.toggle("active")
        headerContentName.classList.toggle("active")
    } else if (e.key == "k" || e.key == "л") {
        respectVideo.classList.toggle("active")
    }
})

const mentalityVideo = document.querySelector(".mentality__video")

function some(entries) {
    if (entries[0].isIntersecting) {
        entries[0].target.play()
    }
}

let elem = new IntersectionObserver(some)
elem.observe(mentalityVideo);