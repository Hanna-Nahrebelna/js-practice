/*
Розпилення об'єктів.
Object.assign({}, a, b)

const a = { x: 1, y: 2 };
const b = { x: 0, z: 3 };
const d = { m: 45, s: 'Mango' }
const n = { r: '250 metriv', p: 8}

const c = {
    y: 20,
    z: 50,
    ...a,    
    ...b,
    ...d,
    m: 'Poly',
    s: 45,
    ...n,
    
}

console.log(c);
*/


/* Працюємо з колекцією товарів у кошику:
* - getItems() - змінна для звернення до передіку елеменів у змінній
* - add(productName) - додаємо продуктив масив
* - remove(productName) - перебираємо масив і шукаємо потрібний елемент
* - clear() - очищення кошика, тобто має записувати в items [] порожній масив
* - countTotalPrice()
* - increaseQuantity(productName)
* - decreaseQuantity(productName)

* { name: '🍎', price: 50 }
* { name: '🍇', price: 70 }
* { name: '🍋', price: 60 }
* { name: '🍓', price: 110 }
*/


const cart = {
    items: [],
    getItems() {
        return this.items;
    },
    // Нову константу нижче з розпиленням зробити, щоб можна було вивести 
    // кількість товарів. Далі масив з товарами треба перебрати.
    
    add(product) {
        console.table(this.items);
        for (const item of this.items) {
            if (item.name === product.name) {
                console.log('Такий продукт уже є', product.name);

                // Якщо такий продук уже є, то ми робимо +1,
                // тобто коли людина додає однакові товари до кошика,
                // то збільшується їх кількість 
                // і не відбувається дублювання одного й того ж товару. 
                // Отримали перевірку на унікальність.
                // Далі виходимо з функції за рахунок return, 
                // бо нам не треба, щоб код виконувався далі.
                item.quantity += 1;
                return;
            }
        }

        const newProduct = {
            ...product,
            quantity: 1,
        };

        this.items.push(newProduct);
    },
    remove(productName) { 
        // for...of не підхоить, бо потрібен ітератор, який
        // дозволить визначити потріьний об'єкт за індексом 
        // (нам це треба, щоб видалити потріний елемент з кошика)
        
        // тут деструктуризували this, 
        // де лежить посилання на весь об'єкт items: []
        
        const { items } = this;
        
        // тут деструктуризували items[i], до цього це було 
        // i < this.items.length
        for (let i = 0; i < items.length; i += 1) {

            // тут деструктуризували items[i], до цього це було 
            // const item = this.items[i]
            const { name } = items[i];

            // до деструктуризації тут було productName === items.name
            if (productName === name) {
                console.log('Знайшли такий продукт ', productName);
                console.log('індекс: ', i);

                // до деструктуризації тут було this.items.splice(i, 1)
                // тут ми видаляємо потрібний елемент, 
                //але першочерговий масив елементів при цьому не змінюється
                items.splice(i, 1);
            }

            // Отже, занадто бігіто повторів, тому ми деструктуризуємо.
        }
    },
    clear() { 
        this.items = [];
    },
    countTotalPrice() {
        // дереструктуризували this.items        
        const { items } = this;
        let total = 0;

        // деструктуризували item.price 
        for (const { price, quantity } of items) {
            total += price * quantity;
        }

        return total;
    },
    increaseQuantity(productName) { },
    decreaseQuantity(productName) { },
};


console.log(cart.getItems());

cart.add({ name: '🍎', price: 50 });
cart.add({ name: '🍇', price: 60 });
cart.add({ name: '🍋', price: 60 });
cart.add({ name: '🍋', price: 60 });
cart.add({ name: '🍓', price: 110 });
cart.add({ name: '🍓', price: 110 });
cart.add({ name: '🍓', price: 110 });

console.table(cart.getItems());

console.log('Total: ', cart.countTotalPrice());

cart.remove('🍋');
console.table(cart.getItems());

cart.clear();
console.log(cart.getItems());

// cart.increaseQuantity('🍎');
// console.table(cart.getItems());

// cart.decreaseQuantity('🍋');
// cart.decreaseQuantity('🍋');
// console.table(cart.getItems());








