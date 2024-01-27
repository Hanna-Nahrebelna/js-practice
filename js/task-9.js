/* Напиши функцію slugify(string), що отримує рядок та повертає URL-slug.
Рядок складається тільки з літер і пробілів.
*/

/* const title = 'Top 10 benefits of React framework';

const normalizedTitle = title.toLowerCase();
const words = normalizedTitle.split(' ');
const slug = words.join('-');

const slug1 = title.toLowerCase().split(' ').join('-');

console.log(slug1);
*/

const slugify = function (string) {
    // const normalizedString = string.toLowerCase();
    // const words = normalizedString.split(' ');
    // const slug = words.join('-');

    // return slug;

    // А можно зробити коротше та простіше:

    return string.toLowerCase().split(' ').join('-');

}

console.log(slugify('Top 10 benefits of React framework'));
console.log(slugify('Azure Static Web Apps are Awesome'));
console.log(slugify('Technical writing tips for non-native English speakers'));
