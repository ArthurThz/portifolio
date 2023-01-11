// Change Projects functionality
const projects = document.querySelectorAll('.item')
const selectProject = document.querySelectorAll('.select-item')
const active = 'active'

function removeActiveClass() {
    projects.forEach((item) => {
        item.classList.remove(active)
    })

    selectProject.forEach((item) => {
        item.classList.remove(active)
    })
}

selectProject.forEach((item, index) => {
    item.addEventListener('click', () => {
        removeActiveClass()
        projects[index].classList.add(active)
        item.classList.add(active)
    })
})


// Arrows Funcionality

const leftArrow = document.querySelector('.arrow.left')
const rightArrow = document.querySelector('.arrow.right')

const options = document.querySelector('.options')

const optionsDimension = options.getBoundingClientRect()
const optionsWidth = optionsDimension.width

leftArrow.addEventListener('click', () => {
    options.scrollLeft -= optionsWidth
})

rightArrow.addEventListener('click', () => {
    options.scrollLeft += optionsWidth

})


// sidebar menu funcionality

const sidebar = document.querySelector('.sidebar-menu')
const nav = document.querySelector('nav')
const navRight = document.querySelector('.nav-right')
const sidebarItem = document.querySelectorAll('.sidebar-item')

sidebarItem.forEach((item) => {
    item.addEventListener('click', () => {
        nav.classList.toggle('active')
        navRight.classList.toggle('active')
    })
})

sidebar.addEventListener('click', () => {
    nav.classList.toggle('active')
    navRight.classList.toggle('active')
})
