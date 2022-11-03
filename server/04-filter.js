// const words = ['spray', 'escoba', 'toalla', 'piso'];

// const newArray = [];
// for (let index = 0; index < words.length; index++) {
//     const item = words[index];
//     if (item.length >= 6) {
//         newArray.push(item);
//     }
// }
// console.log('newArray', newArray);
// console.log('original', words);
// const rta = words.filter(item => item.length >= 6)


// const filterByLength = ['amor', 'sol', 'piedra', 'día'];
 
// const newArray = [];
// for (let index = 0; index < filterByLength.length; index++) {
//     const item = filterByLength[index];
//     if (item.length >= 4) {
//         newArray.push(item);
//     }
// }

// console.log('newArray', newArray);
// console.log('original', filterByLength);


function filterByLength(array) {
    return array.filter(word => word.length >= 4);
}

console.log(filterByLength(['amor', 'sol', 'piedra', 'día']));

