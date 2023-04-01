const header = document.getElementById('header')
const backToTop = document.getElementById('back-to-top')
let oldScrollTop = 0


document.addEventListener("scroll", () => {
    let scrollTop = window.scrollY
    if (scrollTop > oldScrollTop) {
        header.classList.add("hide-header")
    }
    else  {
        header.classList.remove("hide-header")
    }

    oldScrollTop = scrollTop

    if (scrollTop > 500) {
        backToTop.classList.add("backToTopAnim")
    }

    else {
        backToTop.classList.remove("backToTopAnim")
    }
})

backToTop.addEventListener("click", () => {
    document.documentElement.scrollTop = 0
})