/*
* - Функція зворотнього виклику (callback / колбек-функції)
* - Функція може приймати інші функції як параметри
* - Функція, що передається іншій функції як аргумент назівається
    "функцією зворотнього (відкладеного) виклику" (callback-функція)
* - Функція, що приймає іншу функцію за параметр
    або повертає функцію як результат своєї роботи, 
    називається "функцією вищого порядку" 
*/

const fnA = function (message, callback) {
    console.log(message);

    console.log(callback);
    callback(100);
 }

const fnB = function (number) {
    console.log('Цей лог при виклику fnB', number);
}

fnA('qweqwe', fnB);



/*
* функція doMath(a, b, callback)
*/

const doMath = function (a, b, callback) {
    const result = callback(a, b);

    console.log(result);
}

const add = function (x, y) {
    return x + y;
};

const sub = function (x, y) {
    return x - y;
};

doMath(2, 3, add);
doMath(10, 8, sub);

/*
//Відкладений виклик: реєстрація події

// таким чином ми реалізуємо звичайну кнопку, що прописана в html,
// отримуємо на неї посилання в js
const buttonRef = document.querySelector('.js-button');

// створюємо функцію, яка буде реалізовувати потрібну нам дію
const handleBtnClick = function () {
    console.log('Клік по кнопці');
};

// Далі реєструємо/вішаємо слухача події, де в якості аргументів:
// - першим передаємо дію, що треба слухати,
//     у випадку кнопки -0 це буде клік (зазначаємо строку 'click');
// - другим - як колбек функцію, що ми написали вище, вона пояснює,
// що має відбуватися при кліку на кнопку.
// Це потрібно, щоб можна було реалізувати дію,
// що буде відбуватися при кліку на цю кнопку.

// buttonRef.addEventListener('click', handleBtnClick);

// Резюме: - це є єдиним способом,
//як можна зареєструвати виконання певної дії у відповідь на певну дію.
// Завдяки колбеку ми кажемо: ти виклнаєш дію тоді, коли відбудеться клік.

// const buttonRef = document.querySelector(' .js-button');
*/


/*
* Відкладений виклик: геолокація
*/

// Дві функції створюємо відповідно до документації для геолокації,
// де зазнчено, що слід вказали два варіанти:
// що виводимо, коли користувач дозволяє зчитати його геолокацію,
// що виводимо, коли відбулася помилка,
// тобто користувач не дав зчитати геолокацію або щось пішло не так.
// При цьому функція нічого не повертає. Вона просто викликається, коли відбувається подія.

/*
const onGetPositijnSuccess = function (position) {
    console.log(position);    
}

const onGetPositionError = function (error) {
    console.log(error);
}

window.navigator.getCurrentPosition(
    onGetPositijnSuccess,
    onGetPositionError
);

*/

/*
// Відкладений виклик: інтервали


const callback = function () {
    console.log('Через 2 секунди всередині колбека в таймауті');
}

console.log('У коді перед таймаутом');

// це дозволяє встановити час, коли буде викликана функція
// першим аргументом передаємо функцію, другим - мілісекунди 
setTimeout(callback, 2000)

console.log('У коді після таймаута');
*/

// Приклад розписуємо десь з 30 хвилини Модуля 4, заняття 7
// https://www.youtube.com/watch?v=hWaC9JcMa_s

/*
* Функція для фільтрації масиву - суть у тому, 
* що ця функція філтрує масив за певною умовою 
* та повертає новий масив із потрібним результатом (відфільтрованим).

* Наприклад, потрібно відфільрувати два масиви чифр нижче, 
* щоб в одному випадку отримати частину масиву, більшу 3,
* а в другому - частину масиву від 1 до 4.
* Як це зробити? Створити функцію, яка буде виконувати кілька умов,
* ми не можемо. 
*/

const filter = function (array, test) {
    const filteredArray = [];

    for (const el of array) {
        console.log(el);
        const passed = test(el);

        if (passed) {
            filteredArray.push(el);
}

    }

    return filteredArray;
};

/*
Але можемо передати в функцію іншу функцію,
* яка буде перевіряти дані за певними умовами.
* Логіка такої перевірки:
* 1) треба передати функцію,
* 2) функція отримує елемент масиву,
* 3) якщо елемент масиву задовільняє певну умову, то функція верне true,
*    якщо елемент масиву НЕ задовільняє певну умову, то функція верне false.
*/

const callback1 = function (value) { 
    return value >= 3;
};

const r1 = filter([1, 2, 3, 4, 5], callback1);
console.log(r1);

const callback2 = function (value) {
    return value <= 4;
}
const r2 = filter([1, 2, 3, 4, 5, 6, 7, 8], callback2);

// цей запис є аналогічним попередньому
/* const r2 = filter([1, 2, 3, 4, 5, 6, 7, 8], function (value) {
    return value <= 4;
});
*/
console.log(r2);


// Тепер використаємо те, що написали вище, 
// щоб, наприклад, повернути всі фрукти, кількість яких понад 150. 

const fruits = [
{ name: 'apples', quantity: 200, isFresh: true },
{ name: 'grapes', quantity: 150, isFresh: false },
{ name: 'bananas', quantity: 100, isFresh: true },    
];

const getFruitsWithQuantity = function (fruit) {
    return fruit.quantity >= 120;
}

const r3 = filter(fruits, getFruitsWithQuantity);
console.log(r3);

