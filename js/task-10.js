/* Напиши функцію add для складення довільної кількості аргументів (чисел).
- Операція ...(rest)
*/

/* const add = function (...args) {
    console.log(args);

    let total = 0;

    for (const arg of args) {
        total += arg;
    }

    return total;
 };

console.log(add(1, 2, 3));
console.log(add(1, 2, 4, 5, 6));
*/

/* Напиши функцію filterNumbers(array [, number1, ...]), яка:
- першим аргументом приймає масив чисел,
- після першого аргумента може бути довільна кількість аргументів, що будуть числами,
- функція має повернути новий масив, де будуть ті аргумненти, 
починаючи зі второго, для яких є аналог в оригінальному масиві.
*/

const filterNumbers = function (array, ...args) {
    console.log('array: ', array);
    console.log('args: ', args);
    const uniqueElements = [];

    for (const element of array) {
        if (args.includes(element)) {
            uniqueElements.push(element);

            console.log(`${element} є всюди!`)

        }
    }

    return uniqueElements;
};

console.log(filterNumbers([1, 2, 3, 4, 5], 10, 15, 2, 3, 8)); // [2, 3]
console.log(filterNumbers([10, 15, 25, 30], 23, 30, 18, 15)); // [30, 15]
console.log(filterNumbers([100, 200, 300, 400, 500], 7, 12, 200, 64)); // [200]
