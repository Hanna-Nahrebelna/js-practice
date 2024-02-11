/* Замикання
* Функція результатом своєї роботиможе повертати іншу функцію.
* Функція, яку повертаємо, під час виклику буде мати доступ
* до всіх локальних змінних (області видимості)
* батьківської функції (тієї, з якої її повернули).
* Це і називається замиканням.
*/

const fnA = function (parametr) {
    const innerVariable = 'Значення внутрішньої змінноїфункції fnA';

    const innerFunction = function () {
        console.log('Це виклик innerFunction');
    }

    return innerFunction;
};

const fnB = fnA();

console.log(fnB);

// Поварьонок

/*
const makeDish = function (sheffName, dish) {
    console.log(`${sheffName} готує ${dish}`);
};

makeDish('Mango', 'пиріжок');
makeDish('Mango', 'омлет');
makeDish('Mango', 'чай');
// тут відбувається повтор імені повара, що не дуже добре
makeDish('Poly', 'котлети');
makeDish('Poly', 'супчик');
makeDish('Poly', 'кава');
// тому використовуючи замикання, ми можемо зробити так, щоб уникнути повтору імені
*/
// оголошуємо функцію "зроби шефа"

const makeSheff = function (name) {
    const makeDish = function (dish) {
        console.log(`${name} готує ${dish}`);
    }

    return makeDish;
};

const mango = makeSheff('Mango');
mango('котлети');
mango('пиржок');

const poly = makeSheff('Poly');
poly('чай');
poly('омлет');

// 1:22 - приклад округлення

const floatingPoint = 3.456789;
const someInt = Math.round(floatingPoint); // 3
const withDecimals = Number(floatingPoint.toFixed(2)); // 3.46


/*
// Задача - треба зробити так, щоб взяти довільне число та повернути його
// з печною кількістю знаків після коми (кожен раз різна кількість).

// Використовуємо 2 параметри: number - число, places - скільки буде після коми.

const rounder = function (number, places) { 
    return Number(number.toFixed(places));
};

// Цей запис Number(namber.toFixed(places)) буквально означає таке:
// беру потрібне число, залишаю потрібну кількість чисел після коми,
// отримую рядок і за рахунок Number() приводжу цей запис до числа.

console.log(rounder(3.4567, 2));
console.log(rounder(3.4567, 3));
console.log(rounder(5.1234, 2));
console.log(rounder(5.1234, 3));

*/

// Це можна спростити завдяки замиканню.
// Функція вищого порядку буде відповідати за кількість знаків після коми,
// а внутрішня функція буде приймати саме число, робити з нього правильне (отримаємо рядок)
// та перетворювати рядок на число, яке повертатиме нам.

const rounder = function (places) {
    return function (number) {
        return Number(number.toFixed(places));
    }
}

const rounder2 = rounder(2);
const rounder3 = rounder(3);
// завдяки функції, що ми написали вище,
// у цих змінних ми передаємо тільки rounder
// і в дужках places, тобто потрібну кількість чисел після коми.

// тепер можемо переписати console.log ось так:

console.log(rounder2(3.4567));
console.log(rounder3(3.4567));
console.log(rounder2(5.1234));
console.log(rounder3(5.1234));

