/*
Напиши функцію changeCase(string), що заміняє регістр
кожного символа в рядку на протилежний.
Наприклад, якщо рідок JavaScript, то на виході має бути рядок jAVAsCRIPT.
*/




// console.log('inverttedString: ', inverttedString);

const changeCase = function (string) {
    const letters = string.split('');
    let invertedString = '';

    for (const letter of letters) {
        const isInLowerCase = letter === letter.toLowerCase();

        invertedString += isInLowerCase
            ? letter.toUpperCase()
            : letter.toLocaleLowerCase(); 
    }

    return invertedString;    
    
}

console.log(changeCase('qweRTY')); // QWErty
console.log(changeCase('mAnGo')); // MaNgO
console.log(changeCase('AjAx')); // aJaX
