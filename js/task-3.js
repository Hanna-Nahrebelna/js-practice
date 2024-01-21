/* Напиши скрипт пошуку логіна.
- Якщо логіна немає, вивести повідомлення 'Користувач [логін] не знайдений.'
- Якщо знайшли логін, вивести повідомлення 'Користувач [логін] знайдений.'

- Спочатку через for
- Потім через for...of
- Логіка break
*/

const logins = ['m4ngoDoge', 'kiwidad3st', 'poly1scute', 'aj4xth3m4n'];
const loginToFind = 'poly1scute';
// let message = `Користувач ${loginToFind} не знайдений.`;


/* for (let i = 0; i < logins.length; i += 1) {
    const login = logins[i];
    
    console.log('Login: ', login);
    console.log(`${login} === ${loginToFind}: `, login === loginToFind);

    if (login === loginToFind) {
        message = `Користувач ${loginToFind} знайдений.`
        break;
    }    
    
}
console.log(message);
*/

/* 
// тепер те саме робимо через for...of, бо значення в масиві нам змінювати не потрібно.
for (const login of logins) {
    console.log('Login: ', login);
    console.log(`${login} === ${loginToFind}: `, login === loginToFind);

    if (login === loginToFind) {
        message = `Користувач ${loginToFind} знайдений.`
        break;
    }    
}
console.log(message);
*/

// тепер те саме, тільки з використанням методу includes() - використовуємо тоді, коли треба просто перевірити, є в масиві потрібні дані чи ні.
// цей сметод повертає true або false, він є декларативним, а  includes() називається абстракцією, під капотом він приховує перебір масиву та перевірку на входження потрібного елементу
// на місце свого виклику він повертає "так" чи "ні"

const message = logins.includes(loginToFind)
    ? `Користувач ${loginToFind} знайдений.`
    : `Користувач ${loginToFind} не знайдений.`;
    
console.log(message);


