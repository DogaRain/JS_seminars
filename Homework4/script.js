/* Задание 1 */

console.log(0+" - это ноль")
for (let index = Number(1); index < 11; index++) {
    if (index % 2 === 0) {
        console.log(`${index} - Чётное`)
        
    } else {
        console.log(`${index} - Не чётное`)  
    }   
}

/* Задание 2 ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/

const arr = [1,2,3,4,5,6,7];

arr.splice(4, 5);

/* Задание 3 ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/

const arr = []

for (let index = 0; index < 5; index++) {
    arr.push(Math.round(Math.random()*10))
    
}
console.log(arr)

let sum = 0
for (let index = 0; index < arr.length; index++) {
    sum = sum + arr[index]
}
console.log(`сумма элементов массива - ${sum}`)


for (let index = 0, min = arr[index]; index < arr.length; index++) {
    if(min > arr[index]) {
        min = arr[index]
    }
    if(index === arr.length-1){
        console.log(`${min} - минимальное число в массиве`)
    }

}

for (let index = 0, min = arr[index]; index < arr.length; index++) {
    if(3 === arr[index]) {
        console.log(`в массиве есть число 3`)
        break
    }
    if(index === arr.length-1){
        console.log(`числа 3 нет в массиве`)
    }

}
