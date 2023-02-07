// var arr = [10, 20, 30, 40, 50, 100, 200, 300, 500, 700, 800, 1000]
// var i = 0
// for (i; i <= arr.length; i++){
//     var num = String(arr[i]);
//     var char = num[0];
//     if (char == 1 || char == 2 || char == 3 || char == 5) {
//         console.log(num)
//     }
// }
// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
//
// for (var i = arr.length - 1; i >= 0; i-- ) {
//     console.log(arr[i])
// }


// var colors = prompt('Выбери цвет: (Красный, Желтый, Зеленый)').toLocaleLowerCase( ).trim()
// switch (colors) {
//     case 'Красный':
//         alert('Стоп!')
//         break
//     case 'Желтый':
//         alert('Жди!')
//         break
//     case 'Зеленый':
//         alert('Иди!')
//         break
//     default:
//         alert('Выбирай цвета!')
//         break
// }

var obj = {
    красный:'Стоп!',
    желтый:'Жди!',
    зеленый:'Иди!'
}
for (var key in obj) {
    console.log(`Ключ объекта: ${key}, значение: ${obj[key]}`)
}

