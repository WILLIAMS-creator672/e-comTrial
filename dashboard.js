window.addEventListener('DOMContentLoaded', () => {
    let userName = document.getElementById('userName')
    let hamburgerUsername = document.getElementById('hamburgerUsername')
    let savedData = localStorage.getItem('formData')

    if (savedData) {
        let parsedData = JSON.parse(savedData)
        // let firstName = parsedData.firstName
        // let capitalizeFirstLetter = firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase()

        userName.innerHTML = `<i class="fa-regular fa-user text-amber-500"></i>${parsedData.firstName}`
   hamburgerUsername.innerHTML = `<i class="fa-regular fa-user text-amber-500"></i>${parsedData.fullName}`
    }
})

let cart = document.getElementById('cart')
cart.addEventListener('mouseenter', () => {
    cart.classList.add('animate');
});

cart.addEventListener('mouseleave', () => {
    cart.classList.remove('animate');
});


let navDropDownButton = document.getElementById('navDropDownButton')
let navDropDownIcon = navDropDownButton.querySelector('i')
let navDropDown = document.getElementById('navDropDown')

navDropDownButton.addEventListener('click', () => {
    navDropDown.classList.toggle('scale-0')
    navDropDownIcon.classList.toggle('-rotate-180')
})

let userIcon = document.getElementById('userIcon')
let userContainer = document.getElementById('userContainer')

userIcon.addEventListener('click', (event) => {
    event.preventDefault()
    userContainer.classList.toggle('top-5')
    
})

//MOBILE HAMBURGER MENU TRIGGER

let menuTriggerButton = document.getElementById("menuTrigger")
let hamburgerMenu = document.getElementById("hamburgerMenu")

let menuTriggerIcon = menuTriggerButton.querySelector('i')



menuTriggerButton.addEventListener('click', () => {
  hamburgerMenu.classList.toggle('scale-0')
  
 // menuTriggerIcon.classList.toggle('fa-solid fa-xmark')
  
 // menuTriggerIcon.classList.toggle('fa-solid fa-bars-staggered')
  

})

// SEARCH

let searchButton = document.getElementById('searchButton')
let searchContainer = document.getElementById('searchContainer')
let searchInput = document.getElementById('searchInput')
let closeSearch = document.getElementById('closeSearch')
let clearSearch = document.getElementById('clearSearch')

searchButton.addEventListener('click', () => {

searchContainer.classList.remove('-translate-y-[50px]')
setTimeout(() => {
    searchInput.focus();
  }, 100)
})

closeSearch.addEventListener('click', () => {
  searchContainer.classList.add('-translate-y-[50px]')
})

clearSearch.addEventListener('click', () => {
  searchInput.value = ' '
  searchInput.focus()
})