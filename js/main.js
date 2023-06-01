const headerContentBanner = document.querySelector(".header__content-banner")
const headerContentTitle = document.querySelector(".header__content-title")
const headerContentName = document.querySelector(".header__content-name")

document.addEventListener("keydown", (e) => {
    if (e.key == "z" || e.key == "я") {
        headerContentBanner.classList.toggle("active")
        headerContentTitle.classList.toggle("active")
        headerContentName.classList.toggle("active")
    }
})