let numbers = [1, 4, 7, 10, 15, 15, 1];
const uniqueNumbers = numbers.filter((x, i, a) => a.indexOf(x) == i)
console.log(uniqueNumbers) //выводит элементы без повотрений