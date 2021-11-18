// DEVUELVE VERDADERO O FALSO
// DEVUELVE VERDADERO SI TODOS CUMPLEN LA CONDICION PARA EL FALSO PASA LO MISMO
// ejemplo 1
const numbers = [1, 52, 4, 98, 6, 54, 6, 6, 65, 54];
const rta = numbers.every(item => item >= 1);
console.log(rta);

// ejemplo 2
const team = [
    {
        name: "Nicolas",
        age: 12,
    },
    {
        name: "Andrea",
        age: 8,
    },
    {
        name: "Zulema",
        age: 2,
    },
    {
        name: "Santiago",
        age: 18,
    },
];
const teamYes = team.every(item => item.age <= 15);
console.log(teamYes);