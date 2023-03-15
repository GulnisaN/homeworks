// const input = document.querySelector('input')
//
// const emailRegExp = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu
//
// function onInput() {
//     if (isEmailValid(input.value)) {
//         input.style.borderColor = 'green'
//     } else input.style.borderColor = 'red'
// }
//
// input.addEventListener('keydown', onInput)
//
// function isEmailValid(value) {
//     return emailRegExp.test(value)
// }



const passwordInput = document.querySelector('#passwordInput')
const passwordResult = document.querySelector('#passwordResult')
const iconClick = document.querySelector('#iconClick')

// const passRegExp = /^\w{8,}[!@#\$%\^&\*]/g
const passRegExp = /^\w{8,20}(?=.*\d)/mg

iconClick.addEventListener('click', () => {
    if (passRegExp.test(passwordInput.value)) {
        passwordInput.innerHTML = '*'
        passwordInput.style.borderColor = 'green'
    } else {
        passwordInput.style.borderColor = 'red'
    }
})


// задание 2 рекурсия
// let position = 0
//
// function recurs() {
//     position += 5
//     if (position > 350) return
//         document.querySelector('.block').style.left = position + 'px'
//         animation()
//
// }
// function animation() {
//     setTimeout(recurs, 100)
// }
// animation()
