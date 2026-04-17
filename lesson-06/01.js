/*
Напишите свою версию метода `filter`.
Ваша задача — создать функцию `filter`, которая принимает два параметра:

- `array` (массив, над которым выполняется операция),
- `callback` (функция, которая вызывается для каждого элемента массива).

Функция `callback` должна принимать два параметра:

- `element` (текущий элемент массива)
- `index` (индекс текущего элемента)

Функция `filter` должна возвращать новый массив, содержащий только те элементы `array`, для которых `callback` возвращает `true`.
*/

/* Пример использования:
const numbers = [1, 2, 3, 4, 5]

const oddNumbers = filter(numbers, (element, index) => {
  return element % 2 !== 0
});

console.log(oddNumbers) // Должен вывести: [1, 3, 5]
*/


// Использую цикл for:
// function filterNumbers(array, callback) {
//   const newArray = [];
//   for (let i = 0; i < array.length; i++) {
//     if (callback(array[i], i)) {
//       newArray.push(array[i]);
//     }
//   }
//   return newArray;
// }

// const arrNumb = [2, 4, 6, 27, 44, 69, 46];
// const filter = filterNumbers(arrNumb, (elem) => elem > 10);
// console.log(filter);



// Используя встроенный метод массива filter():
function filter(array, callback) {
  return array.filter((element, index) => callback(element, index));
}

const arrNumbers = [12, 26, 37, 4, 5];
const greaterThanTen = filter(arrNumbers, (el) => el > 10);

console.log(greaterThanTen);
