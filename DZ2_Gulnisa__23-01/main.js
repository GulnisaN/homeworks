// const block = document.querySelector('.block')
//
// let positionX = 0
// let positionY = 0
// let positionZ = 0
// let positionF = 0
//
// const blockMove = () => {
//     if (positionX <= 355 && positionY <= 400) {
//         positionX += 2
//         block.style.left = `${positionX}px`
//         setTimeout(blockMove, 300)
//         positionY += 2
//         block.style.top = `${positionY}px`
//         setTimeout(blockMove, 300)
//     } else if (positionZ <= 355) {
//         positionZ += 2
//         block.style.right = `${positionZ}px`
//         setTimeout(blockMove, 300)
//     } else if (positionF <= 355 && positionY <= 400) {
//         positionF += 2
//         block.style.bottom = `${positionF}px`
//         setTimeout(blockMove, 300)
//         positionY += 2
//         block.style.top = `${positionY}px`
//     }
// }
// blockMove()



// let timer = 0
// const time = document.querySelector('#time')
//
//
// const timePlus = setInterval(() => {
//     if (timer >= 0) {
//         const minut = Math.floor(timer / 60)
//         let seconds = timer % 60
//         seconds = seconds < 10 ? '0' + seconds: seconds
//         time.innerHTML = `${minut}:${seconds}`
//         timer++
//     }
// }, 1000)
// setTimeout(() => clearInterval(timePlus), 61000)
