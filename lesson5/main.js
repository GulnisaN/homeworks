const som = document.querySelector('#som')
const usd = document.querySelector('#usd')
const tr = document.querySelector('#tr')

// som.addEventListener("input", (e) => {
//     console.log(e.target.value)
//     const request = new XMLHttpRequest()
//     request.open("GET", "data.json")
//     request.setRequestHeader("Content-Type", "application/json")
//     request.send()
//     request.addEventListener("load", () => {
//         const data = JSON.parse(request.response)
//         console.log(data)
//         usd.value = (e.target.value / data.usd).toFixed(2)
//     })
// })

// const convert = (elem, target, isTrue) => {
//     elem.addEventListener("input", () => {
//         const request = new XMLHttpRequest()
//         request.open("GET", "data.json")
//         request.setRequestHeader("Content-Type", "application/json")
//         request.send()
//         request.addEventListener("load", () => {
//             const data = JSON.parse(request.response)
//             if (isTrue) {
//                 target.value = (elem.value / data.usd).toFixed(2)
//             } else {
//                 target.value = (elem.value * data.usd).toFixed(2)
//             }
//             elem.value === "" && (target.value = "")
//         })
//     })
// }
//
// convert(som, usd, 42)
// convert(usd, som, 0)

// const converter = (elem, target, target2) => {
//     elem.addEventListener("input", () => {
//         const request = new XMLHttpRequest()
//         request.open("GET", "data.json")
//         request.setRequestHeader("Content-Type", "application/json")
//         request.send()
//         request.addEventListener("load", () => {
//             const data = JSON.parse(request.response)
//             if (elem === som) {
//                 target.value = (elem.value / data.usd).toFixed(2)
//                 target2.value = (elem.value / data.tr).toFixed(2)
//                 // target2.value = (elem.value * data.usd).toFixed(2)
//
//             } else if (elem === usd) {
//                 target.value = (elem.value * data.tr).toFixed(2)
//                 target2.value = (elem.value * data.som).toFixed(2)
//                 // elem.value = (target.value * data.usd)
//
//             } else if (elem === tr) {
//                 target.value = (elem.value / data.usd).toFixed(2)
//                 target2.value = (elem.value * data.som).toFixed(2)
//             }
//             elem.value === "" && (target.value = "") && (target2.value = "")
//         })
//     })
// }
//
// converter(som, usd, tr)
// converter(usd, tr, som)
// converter(tr, som, usd)


const converter = (elem, target, target2) => {
    elem.addEventListener("input", () => {
        fetch("data.json")
            .then(response => response.json())
            .then(data => {
                if (elem === som) {
                    target.value = (elem.value / data.usd).toFixed(2)
                    target2.value = (elem.value / data.tr).toFixed(2)

                } else if (elem === usd) {
                    target.value = ((elem.value * data.usd) / data.tr).toFixed(2)
                    target2.value = (elem.value * data.usd).toFixed(2)

                } else if (elem === tr) {
                    target2.value = ((elem.value * data.tr)/ data.usd).toFixed(2)
                    target.value = (elem.value * data.tr).toFixed(2)
                }
                elem.value === "" && (target.value = "") && (target2.value = "")
            })
            .catch(() => console.error("error"))
            .finally(() => console.warn("finally"))

    })
}

converter(som, usd, tr)
converter(usd, tr, som)
converter(tr, som, usd)



