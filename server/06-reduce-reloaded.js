// const item = [1,3,2,3];

// const rta = item.reduce((obj, item) => {
//     if(!obj[item]) {
//         obj[item] = 1;
//     } else {
//     obj[item] = obj[item] + 1
//     }
//     return obj;
// }, {});

// console.log(rta)

const date = [
    {
        name: 'Nicolas',
        level: 'low',
    },
    {
        name: 'Andrea',
        level: 'medium',
    },
    {
        name: 'Zulema',
        level: 'hight',
    },
    {
        name: 'Santiago',
        level: 'low',
    },
    {
        name: 'Valentina',
        level: 'medium',
    },
];

// const mariana = {
//     edad: 23,
//     direccion: 'ejido'
// }

// console.log(mariana['edad'])
// console.log(mariana['direccion'])
// console.log(mariana['peso'])

const rta1 = date
    .map(item => item.level)
    .reduce((obj, item) => {
        console.log('este es obj', obj)
        console.log('este es item', item)
        console.log('validacion', obj[item])
        if (!obj[item]) {
            obj[item] = 1;
        }
        else {
            obj[item] = obj[item] + 1
        }


        return obj;
    }, {});


console.log(rta1)


const lista = [2, 7, 9, 7, 1, 10, 8, 3, 3, 1]
    .map(item => item)
    .reduce((obj, item) => {
        if (item <= 5) {
            obj['1-5'] = obj['1-5'] + 1;
        } else if (item <= 8) {
            obj['6-8'] = obj['6-8'] + 1;
        } else {
            obj['9-10'] = obj['9-10'] + 1;
        }

        return obj;
    }, {
        '1-5': 0,
        '6-8': 0,
        '9-10': 0
    });

console.log(lista)