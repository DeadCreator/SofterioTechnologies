const header = document.getElementById('header')
const backToTop = document.getElementById('back-to-top')
const menuButton = document.querySelector('.open-menu')
const headerNav = document.querySelector('.header-nav')
let opened
let oldScrollTop = 0

menuButton.addEventListener("click", () => {
    if (headerNav.classList.contains('opened')) {
        headerNav.classList.remove('opened')
        menuButton.classList.remove('changeIcon')
        opened = false
    }

    else {
        headerNav.classList.add('opened')
        menuButton.classList.add('changeIcon')
        backToTop.classList.remove("backToTopAnim")
        opened = true
    }

})

headerNav.addEventListener("click", () => {
    if (opened) {
        headerNav.classList.remove('opened')
        menuButton.classList.remove('changeIcon')
        opened = false
    }

    else {
        headerNav.classList.add('opened')
        menuButton.classList.add('changeIcon')
        backToTop.classList.remove("backToTopAnim")
        opened = true
    }
})

document.addEventListener("scroll", () => {
    let scrollTop = window.scrollY
    if (scrollTop > oldScrollTop && !opened) {
        header.classList.add("hide-header")
    }
    else  {
        header.classList.remove("hide-header")
    }

    oldScrollTop = scrollTop

    if (scrollTop > 500 && !opened) {
        backToTop.classList.add("backToTopAnim")
    }

    else {
        backToTop.classList.remove("backToTopAnim")
    }
})

backToTop.addEventListener("click", () => {
    document.documentElement.scrollTop = 0
})