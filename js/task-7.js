/*
Напиши функцію findSmallesNumber(numbers) для пишуку найменшого числа 
в масиві, за умови, що числа унікальні (не повторюються).
*/



const findSmallesNumber = function (numbers) {
    let smallestNumber = numbers[0];

    for (const number of numbers) {
    if (number < smallestNumber) {
        smallestNumber = number;
    }
    }
    
    return smallestNumber;

}

console.log(findSmallesNumber([3, 8, 12, -2, 15])); // -2
console.log(findSmallesNumber([100, 54, 8, 12, 47])); // 8
console.log(findSmallesNumber([7, 21, 84, 15, 4])); // 4