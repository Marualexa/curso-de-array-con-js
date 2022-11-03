const numbers = [1,30,39,10,13];

let rta = true;
for (let index = 0; index < numbers.length; index++){
    const element = numbers[index];
    if (element >= 40) {
        rta = false;
    }
}
console.log('for', rta);

const rta2 = numbers.every(item => item <= 40);
console.log('rta2', rta2);

const team = [
    {
      name: "Nicolas",
      age: 12,
    },
    {
      name: "Andrea",
      age: 18,
    },
    {
      name: "Zulema",
      age: 2,
    },
    {
      name: "Santiago",
      age: 14,
    },
  ];

const edad = team.every(item => item.age <= 15);
console.log('edad', edad)

//Ejercicio
function checkArray(array) {
    if (array.length <= 0) {
        return false;
    }
    const resultado = array.every(item => item % 2 === 0);
    return resultado
}

console.log(checkArray([2, 4, 6, 8, 10]));
console.log(checkArray([1, 3, 5, 7, 10, 11]));
console.log(checkArray([1, 3, 5]));
console.log(checkArray([]));