const orders = [
    {
        customerName: 'Nicolas',
        total: 60,
        delivered: true,
    },
    {
        customerName: 'Zulema',
        total: 120,
        delivered: true,
    },
    {
        customerName: 'Santiago',
        total: 180,
        delivered: true,
    },
    {
        customerName: 'Valentina',
        total: 240,
        delivered: true,
    },
]

console.log('original', orders);
const rta = orders.map(item => item.total);
console.log('rta', rta);

const rta2 = orders.map(item => {
    item.tax = .19;
    return item;
})

console.log('rta2', rta2);
console.log('original', orders);
const rta3 = orders.map((item) => {
    return {
        ...item,
        tax: .19
    };
});
console.log('rta3', rta3);
console.log('original', orders);


// const array = [
//     {
//         name: "Product 1",
//         price: 1000,
//         stock: 10
//     },
//     {
//         name: "Product 2",
//         price: 2000,
//         stock: 20
//     }
// ]

// export function addNewAttr(array) {
//     let newArray = []
//     for (let index = 0; index < array.length; index++){
//     let product = array[index];
//     product.taxes = product.price * 0.19;
//     newArray.push(product);
//     }
//     return newArray;
// }

// const resultado = addNewAttr(array);


