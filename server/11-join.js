const elements = ['Fire', 'Air', 'Water'];

let rtaFinal = '';
const separator = '--';
for (let index= 0; index < elements.length; index++) {
    const element = elements[index];
    rtaFinal = rtaFinal + element + separator;
}

console.log('for', rtaFinal);

const rta2 = elements.join('--')
console.log('join', rta2);

const title = 'curso de manipulacion de array';

const titleFinal = title.split(' ').join('-').toLowerCase()
console.log(titleFinal);