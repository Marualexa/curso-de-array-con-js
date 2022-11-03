//metodo flat
const matriz = [
    [1, 2, 3],
    [4, 5, 6, [1, 2]],
    [7, 8, 9]
];

const newArray = []
for (let i = 0; i < matriz.length; i++) {
    const array = matriz[i];
    for (let j = 0; j < array.length; j++) {
        const element = matriz[i][j];
        newArray.push(element);
    }
}
console.log('for', newArray);

const rta = matriz.flat(3)
console.log('flat', rta);

//metodo flatMap

const users = [
    { userId: 1, username: 'tom', attributes: ['Nice', 'Cute'] },
    { userId: 2, username: 'Mike', attributes: ['Lovely'] },
    { userId: 3, username: 'Nico', attributes: ['Nice', 'Cool'] },
];

const rta1 = users.map(user => user.attributes).flat();
console.log('map y flat', rta1);


const flatmap = users.flatMap(user => user.attributes);
console.log('flatMap', flatmap);


//reto

const calendars = {
    primaryCalendar: [
        {
            startDate: new Date(2021, 1, 1, 15),
            endDate: new Date(2021, 1, 1, 15, 30),
            title: "Cita 1",
        },
        {
            startDate: new Date(2021, 1, 1, 17),
            endDate: new Date(2021, 1, 1, 18),
            title: "Cita 2",
        },
    ],
    secondaryCalendar: [
        {
            startDate: new Date(2021, 1, 1, 12),
            endDate: new Date(2021, 1, 1, 12, 30),
            title: "Cita 2",
        },
        {
            startDate: new Date(2021, 1, 1, 9),
            endDate: new Date(2021, 1, 1, 10),
            title: "Cita 4",
        },
    ],
};

// const rtaReto = Object.values(calendars).flat().map(item => item.startDate);
// console.log(rtaReto);

const rtaReto = Object.values(calendars).flat(item => {
    return item.map(date => date.startDate);
});

console.log(rtaReto);


