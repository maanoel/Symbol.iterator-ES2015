const numbers = [100, 200, 300, 400];

let iterator = numbers[Symbol.iterator]();

console.log(iterator.next().value);
