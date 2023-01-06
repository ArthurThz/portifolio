// Arrows Funcionality Mobile
const leftArrowMobile = document.querySelector('.arrow-left-mobile')
const rightArrowMobile = document.querySelector('.arrow-right-mobile')

const selectedItemMobile = document.querySelectorAll('.select-item-mobile')

rightArrowMobile.addEventListener('click', () => {
    let i = 0;
    selectedItemMobile.forEach((item, index) => {
        if (item.classList.contains('active')) {
            selectedItemMobile[index].classList.remove('active')
            projects[index].classList.remove('active')
            i = index + 1
            if (index == selectedItemMobile.length - 1) {
                i = 0
            }
        }
    })
    selectedItemMobile[i].classList.add('active')
    projects[i].classList.add('active')
})

leftArrowMobile.addEventListener('click', () => {
    let i = 0;
    selectedItemMobile.forEach((item, index) => {
        if (item.classList.contains('active')) {
            selectedItemMobile[index].classList.remove('active')
            projects[index].classList.remove('active')
            i = index - 1
            if (index == 0) {
                i = selectedItemMobile.length - 1
            }
        }
    })
    selectedItemMobile[i].classList.add('active')
    projects[i].classList.add('active')
})




