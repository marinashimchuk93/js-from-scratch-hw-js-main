/*
Попробуйте написать свою версию метода `map`. Ваша задача — создать функцию `map`, которая принимает два параметра:

- `array` (массив, над которым выполняется операция),
- `callback` (функция, которая вызывается для каждого элемента массива).

Функция `callback` должна иметь возможность принимать следующие параметры:

- `element` (текущий элемент массива),
- `index` (индекс текущего элемента),

Ваша функция `map` должна возвращать новый массив, где каждый элемент является результатом 
вызова функции `callback` на каждом элементе исходного массива.
*/

/*
Пример использования вашей функции:

const numbers = [1, 2, 3, 4, 5]

const doubledNumbers = map(numbers, (element, index) => {
  return element * 2
})

console.log(doubledNumbers) // Должен вывести: [2, 4, 6, 8, 10]
*/


 

// Используя цикл for:
// function map(array, callback) {
//   newArray = [];

//   for (let i = 0; i < array.length; i++) {
//     const changeArray = callback(array[i], i);
//     newArray.push(changeArray);
//   }
//   return newArray;
// }

// const arrNumbers = [1, 3, 5, 7, 9];
// const mapArr = map(arrNumbers, (el) => el * el);
// console.log(mapArr);




// Используя встроенный метод map()
function map(array, callback) {
  return array.map((element, index) => callback(element, index));
}
const arrNumbers = [1, 3, 5, 7, 9];
const mapArr = map(arrNumbers, (el) => el * el);
console.log(mapArr);
