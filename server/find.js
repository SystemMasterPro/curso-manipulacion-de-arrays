// NO DEVUELVE UN ARRAY DEVUELVE EL VALOR COMO TAL
// SI NO LO ENCUENTRA ES UNDIFINED
// ejemplo 1 
const numbers = [1, 556, 1, 5, 6, 45, 5];
const rta = numbers.find(item => item === 45);
console.log(rta);

// ejemplo 2 
const products = [
    {
        name: "Pizza",
        price: 12,
        id: '🍕'
    },
    {
        name: "Burger",
        price: 23,
        id: '🍔'
    },
    {
        name: "Hot dog",
        price: 34,
        id: '🌭'
    },
    {
        name: "Hot cakes",
        price: 355,
        id: '🥞'
    },
];
const rta1 = products.find(item => item.id === '🥞');
console.log(rta1);
// NO DEVUELVE TODO EL ELEMENTO SOLO LA POSICION
const rta2 = products.findIndex(item => item.id === '🥞');
console.log(rta2);