const totals = [1, 2, 3, 4];

// funcion for.
let suma = 0;
for (let index = 0; index < totals.length; index++) {
    const element = totals[index];
    suma = suma + element;
}

console.log('esta e sla suma', suma);

// funcion declarada con reduce
const rta = totals.reduce((suma, element) => suma + element, 0);
console.log('rta', rta);




