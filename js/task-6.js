/* 
Раніше ми вже вирішували цю задачу, 
але тепер зробимо це за допомогою функції.

Напиши функцію findLogin(allLogins, login) пошуку логіна.
- Якщо логіна немає, вивести повідомлення 'Користувач [логін] не знайдений.'
- Якщо знайшли логін, вивести повідомлення 'Користувач [логін] знайдений.'
*/


const logins = ['m4ngoDoge', 'kiwidad3st', 'poly1scute', 'aj4xth3m4n'];


/* const message = logins.includes(loginToFind)
    ? `Користувач ${loginToFind} знайдений.`
    : `Користувач ${loginToFind} не знайдений.`;
    
console.log(message);
*/

/* const findLogin = function (allLogins, loginToFind) {
    for (const login of allLogins) {
        if (login === loginToFind) {
            return = `Користувач ${loginToFind} знайдений.`;

        }
    }
    return `Користувач ${loginToFind} не знайдений.`;

} */


const findLogin = function (allLogins, loginToFind) {
    return allLogins.includes(loginToFind)
        ? `Користувач ${loginToFind} знайдений.`
        : `Користувач ${loginToFind} не знайдений.`;
}


console.log(findLogin (logins, 'avocod3r'));
console.log(findLogin (logins, 'kiwidad3st'));
console.log(findLogin (logins, 'jam4l'));
console.log(findLogin (logins, 'poly1scute'));