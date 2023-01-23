
const leftArrowMobile = document.querySelector('.arrow-left-mobile');
const rightArrowMobile = document.querySelector('.arrow-right-mobile');
const selectedItemMobile = document.querySelectorAll('.select-item-mobile');
// Project Arrows Function

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


// About-me function

const aboutArrowLeft = document.querySelector('.left-about');
const aboutArrowRight = document.querySelector('.right-about');
const aboutCards = document.querySelectorAll('.item-about');


aboutArrowRight.addEventListener('click', () => {
    let i = 0;
    aboutCards.forEach((item, index) => {
        if (item.classList.contains(active)) {
            item.classList.remove(active)
            i = index + 1

            if (index == aboutCards.length - 1) {
                i = 0;
            }
        }
    })
    aboutCards[i].classList.add(active)
})

aboutArrowLeft.addEventListener('click', () => {
    let i = 0;

    aboutCards.forEach((item, index) => {
        if (item.classList.contains(active)) {
            item.classList.remove(active)
            i = index - 1

            if (index == 0) {
                i = aboutCards.length - 1
            }
        }
    })
    aboutCards[i].classList.add(active)
})



