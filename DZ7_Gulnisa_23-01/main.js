// Задание 1

// class Cars {
//     constructor(options) {
//         this.model = options.model
//         this.color = options.color
//         this.wheels = options.wheels
//         this.prise = options.prise
//         this.year = options.year
//     }
//     start() {
//         console.log('Машина заведена')
//     }
// }
// class Toyota extends Cars {
//     constructor(options) {
//         super(options);
//     }
// }
//
// const toyota = new Toyota({
//     model: 'Prius',
//     color: 'silver',
//     wheels: 4,
//     prise: '17000$',
//     year: 2015
// })
//
// class Hyundai extends Cars {
//     constructor(options) {
//         super(options);
//         this.volume = options.volume
//     }
// }
// const hyundai = new Hyundai({
//     model: 'Sonata',
//     color: 'black',
//     wheels: 4,
//     prise: '10500$',
//     year: 2010,
//     volume: '2.0'
// })
//
// class Kia extends Cars {
//     constructor(options) {
//         super(options);
//         this.box = options.box
//     }
// }
// const kia = new Kia({
//     model: 'Optima',
//     color: 'white',
//     wheels: 4,
//     prise: '17900$',
//     year: 2020,
//     volume: '2.0',
//     box: 'автомат'
// })
// toyota.start()
// hyundai.start()
// kia.start()


// Задание 2

class Light {
    constructor(selector) {
        this.$element = document.getElementById(selector)
    }
}

class Circle extends Light {
    constructor(options) {
        super(options.selector);
        this.$element.style.background = options.color
        this.$element.textContent = options.text
        this.$element.style.fontSize = options.fontSize + 'px'
    }
}
let color = prompt('Введите цвет: красный, желтый, зеленый').toLowerCase().trim()
if (color === 'красный') {
    const red = new Circle({
        selector: 'red',
        color: 'red',
        text:'STOP',
        fontSize: 35
    })
} else if (color === 'желтый') {
    const yellow = new Circle({
        selector: 'yellow',
        color: 'yellow',
        text:'WAIT',
        fontSize: 35
    })
} else if (color === 'зеленый') {
    const green = new Circle({
        selector: 'green',
        color: 'green',
        text:'GO',
        fontSize: 35
    })
} else {
    alert('Введите только цвет светафора!(красный, желтый, зеленый)')
}
