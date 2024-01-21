// Напиши скрипт, що порахує суму всіх парних чисел

const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 11, 14];

/// 1. Створити змінну total.
let total = 0;

/* // 2. Пребрати масив.
for (let i = 0; i < numbers.length; i += 1) {
    const number = numbers[i]
    console.log(number);

// 3. На кожній ітерації перевірити елемент на парність.
    if (number % 2 === 0) {
        console.log('Парне число!');
// 4. Якщо число парне, додаємо до total.
        total += number;
    }
}
console.log('Total ', total); */



// Вирішення через метод for...of - простіше запис, менше коду

/* for (number of numbers) {
    console.log(number);

    if (number % 2 === 0) {
        console.log('Парне число!');

        total += number;
    }
} */

// А ось так можна застосувати логіку від зворотнього, що буде матиматично більш правильно.

for (number of numbers) {
    console.log(number);

    if (number % 2 !== 0) {
        console.log('Цю ітерацію треба пропустити!', number);
        continue;
    }

    console.log('${number} - парне!!!');
    total += number;
}

console.log('Total ', total);



