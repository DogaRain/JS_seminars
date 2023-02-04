/* Задание 1 */

let num1 = prompt()
let num2 = prompt()

console.log(num1 <= 1)
console.log(num2 >= 3)

/* Задание 2 */

let test = true;

(test === true) ? console.log('+++') : console.log('---');

/* Задание 3 */

let day = prompt('Число от 1 до 31')

if (day <= 10) {

    console.log('Первая декада')
    
} else {
    (day <= 20) ? console.log('Вторая декада') : console.log('Третья декада')
}