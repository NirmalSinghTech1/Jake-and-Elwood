const showNav = document.querySelector('.hamburger')
const closeNav = document.querySelector('.close-nav')
const navbar = document.querySelector('.nav')

showNav.addEventListener('click', () => {
    navbar.classList.add('show-nav')
    console.log('abhi')
})

closeNav.addEventListener('click', ()=> {
    navbar.classList.remove('show-nav')
})