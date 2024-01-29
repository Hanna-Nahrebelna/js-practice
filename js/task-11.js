// Колекція (масив об'єктів) - з цим будемо працювати найчастіше.

const friends = [
    { name: 'Mango', online: false },
    { name: 'Kiwi', online: true },
    { name: 'Poly', online: true },
    { name: 'Ajax', online: false },
];

console.table(friends);

/*
for (const friend of friends) {
    console.log(friend);
    // console.log(friend.name);
    // console.log(friend.online);


    friend.newprop = 555;
}
*/

console.table(friends);

// Задача 1. Шукаємо друга за ім'ям
const findFriendByName = function (allFriends, friendName) {
    for (const friend of allFriends) {
        console.log(friend);
        console.log(friend.name);

        if (friend.name === friendName) {
            return 'ЗНАЙШЛИ!!!';
        }
    }

    return 'НЕ ЗНАЙШЛИ :(';
};

console.log(findFriendByName(friends, 'Poly'));
console.log(findFriendByName(friends, 'Chelsy'));

// Задача 2. Отримуємо імена всіх друзів
const getAllNames = function (allFriends) {
    const names = [];

    for (const friend of allFriends) {
        console.log(friend.name);

        names.push(friend.name);
    }

    return names;

};

console.log(getAllNames(friends));




// Задача 3. Отримуємо імена друзів, які тільки онлайн

const getOnlineFriends = function (allFriends) {
    const onlineFrieds = [];

    for (const friend of allFriends) {
        console.log(friend);
        console.log(friend.online);

        if (friend.online) {
            onlineFrieds.push(friend);
        }
    }

    return onlineFrieds;
 };

console.log(getOnlineFriends(friends));



const getOfflineFriends = function (allFriends) {
    const OfflineFriends = [];

    for (const friend of allFriends) {
        // console.log(friend.online);

        if (!friend.online) {
            OfflineFriends.push(friend);
        }        
    }

    return OfflineFriends;

};

console.log(getOfflineFriends(friends));

/*
// Задача 4. Створити 2 масиви онлайн та офлайн.
// Якщо тру - в перший, якщо ні - в другий.

const getFriendsByOnlineStatus = function (allFriends) {
    const friendsByStats = {
    online: [],
    offline: [],
    }

    for (const friend of allFriends) {
        console.log(friend);

        if (friend.online) {
            friendsByStats.online.push(friend);
        } else {
            friendsByStats.offline.push(friend);
        }
    }

    return friendsByStats;

}

*/

// Спрощено "Задача 4" буде виглядати так:

const getFriendsByOnlineStatus = function (allFriends) {
    const friendsByStats = {
    online: [],
    offline: [],
    }

    for (const friend of allFriends) {
        console.log(friend);

        if (friend.online) {
            friendsByStats.online.push(friend);
            continue;
        }
        friendsByStats.offline.push(friend);
        
    }

    return friendsByStats;

}

console.log(getFriendsByOnlineStatus(friends));

// Як дізнатися кількість властивостей у цьому об'єкті?

const x = {
    a: 1,
    b: 2,
    c: 50,
    d: 100,
}

console.log(Object.keys(x).length);


