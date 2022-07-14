const clickSignIn = document.querySelector('.js-sign-in')
const modal = document.querySelector('.modal')
const modalClose = document.querySelector('.modal')
const modalContainer = document.querySelector('.js-modal-container')

function showSignIn() {
    modal.classList.add('open') //thêm class open vào modal
}

function hideSignIn() {
    modal.classList.remove('open') //gỡ class open của modal
}

clickSignIn.addEventListener('click', showSignIn) //nghe hành vi click vào js-sign-in

modalClose.addEventListener('click', hideSignIn)

modalContainer.addEventListener('click', function(event) {
    event.stopPropagation()
})


const clickSearch = document.querySelector('.js-search')
const modalSearch = document.querySelector('.modal-search')
const modalCloseSearch = document.querySelector('.modal-search')
const modalMainSearch = document.querySelector('.js-main-modal-search')

function showSearch() {
    modalSearch.classList.add('open') //thêm class open vào modal
}

function hideSearch() {
    modalSearch.classList.remove('open') //gỡ class open của modal
}

clickSearch.addEventListener('click', showSearch) //nghe hành vi click vào js-sign-in

modalCloseSearch.addEventListener('click', hideSearch)

modalMainSearch.addEventListener('click', function(event) {
    event.stopPropagation()
})

const clickMenus = document.querySelectorAll('.js-menu')
const menu = document.querySelector('.js-nav-tablet')
// const overlay = document.querySelector('.nav-overlay')
const menuClose = document.querySelector('.js-nav-tablet')
const menuContainer = document.querySelector('.js-nav-tablet-container')

function showMenu() {
    menu.classList.add('open') //thêm class open vào menu
    // overlay.classList.add('open')
}

function hideMenu() {
    menu.classList.remove('open') //gỡ class open của menu
    // overlay.classList.remove('open') 
}

for(const clickMenu of clickMenus) {
    clickMenu.addEventListener('click', showMenu) //nghe hành vi click vào js-menu

}

menuClose.addEventListener('click', hideMenu)

menuContainer.addEventListener('click', function(event) {
    event.stopPropagation()
})
