const tabsParent = document.querySelector('.tabheader__items')
const tabs = document.querySelectorAll('.tabheader__item')
const tabsContent = document.querySelectorAll('.tabcontent')
// const tabsContentInner = document.querySelectorAll('.tabsc')

const hideTabContent = () => {
    tabsContent.forEach((item) => {
        item.style.display = 'none'
    })
    tabs.forEach((item) => {
        item.classList.remove('tabheader__item_active')
    })
}

const showTabContent = (i= 0) => {
    tabsContent[i].style.display = 'block'
    tabs[i].classList.add('tabheader__item_active')
}
hideTabContent()
showTabContent()



tabsParent.addEventListener('click', (e) => {
    const target = e.target
    if (target.classList.contains('tabheader__item')) {
        // console.log(target)
        tabs.forEach((item, i) => {
            if (target === item) {
                hideTabContent()
                showTabContent(i)
            }

        })
    }
})

let autoslider = 0

const slider = () => {
    if (autoslider === 4) autoslider = 0
    hideTabContent()
    showTabContent(autoslider)
    autoslider++
}
let autoSli = setInterval(slider, 1000)

tabsParent.addEventListener('click', (event) => {
    setTimeout(() => {
        autoSli = setInterval( slider, 1000)
    }, 5000)
    if (event.target.classList.contains('tabheader__item')) {
        const target = event.target
        tabs.forEach((item, i) => {
            if (target === item){
                hideTabContent()
                showTabContent(i)
                autoslider = i
            }
        })
    }
})


const openModalBtn = document.querySelector('.btn_white')
const modal = document.querySelector('.modal')
const modalCloseBtn = document.querySelector('.modal__close')
const footerOpen = document.querySelector('.footer')

const openModal = () => {
    modal.classList.add('show')
    modal.classList.remove('hide')
    document.body.style.overflow = 'hidden'
}

openModalBtn.addEventListener('click', openModal)

const closeModal = () => {
    modal.classList.add('hide')
    modal.classList.remove('show')
    document.body.style.overflow = ''

}

modalCloseBtn.addEventListener('click', closeModal)

modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModal()
    }
})

footerOpen.addEventListener('mouseover', openModal)






