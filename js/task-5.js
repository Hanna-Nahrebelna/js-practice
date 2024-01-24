// приклад, що показати, що функція не завжди має щось повертати
// Задача: напиши функцію logItems(items) для перебирання та логування масиву.

const logItems = function (items) {
    for (item of items) {
        console.log(item);
    }
}



logItems(['Mango', 'Kiwi', 'Poly', 'Ajax']);
logItems([1, 2, 3, 4, 5]);
logItems(['клавіатура', 'навушники', 'часи']);