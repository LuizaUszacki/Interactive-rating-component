const BUTTONS = document.querySelectorAll('.btn-rating')
const SUBMIT = document.querySelector('.btn-submit')
const SECTIONS = document.querySelectorAll('section')
const RATE = document.getElementById('rate')

BUTTONS.forEach(button => {
    button.addEventListener('click', () => {
        removeActive()
        button.classList.add('active')
    })
})

SUBMIT.addEventListener('click', () => {

    try {
        let index = hasActive(BUTTONS)
        if (index === -1) throw new Error('Empty rate')
        SECTIONS[0].style.display = 'none'
        SECTIONS[1].style.display = 'flex'
        RATE.textContent = index + 1
    }
    catch(e) {
        console.log(e.message)
    }
})


// ##### FUNCTIONS #################################################

function removeActive() {
    BUTTONS.forEach(button => {
        button.classList.remove('active')
    })    
}

function hasActive(arr) {
    let activeIndex = -1
    arr.forEach((el, index) => {
        if (el.classList.contains('active')) {
            activeIndex = index
        }
    })
    return activeIndex
}