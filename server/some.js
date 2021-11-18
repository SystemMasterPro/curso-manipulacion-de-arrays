// DEVUELVE VERDADERO O FALSO
// VERDADERO SI AL MENOS UNO CUMPLE LA CONDICION DE IGUAL FORMA FALSO
// ejemplo 1
const numbers = [1, 2, 3, 4, 5, 6];
const rta = numbers.some(item => item % 2 === 0);
console.log(rta);

// ejemplo 2 
const orders = [
    {
        customerName: "Nicolas",
        total: 60,
        delivered: true,
    },
    {
        customerName: "Zulema",
        total: 120,
        delivered: false,
    },
    {
        customerName: "Santiago",
        total: 180,
        delivered: true,
    },
    {
        customerName: "Valentina",
        total: 240,
        delivered: true,
    },
];
const rta2 = orders.some(item => item.delivered);
console.log(rta2);

//  ejemplo 3
const dates = [
    {
        startDate: new Date(2021, 1, 1, 10),
        endDate: new Date(2021, 1, 1, 11),
        title: "Cita de trabajo",
    },
    {
        startDate: new Date(2021, 1, 1, 15),
        endDate: new Date(2021, 1, 1, 15, 30),
        title: "Cita con mi jefe",
    },
    {
        startDate: new Date(2021, 1, 1, 20),
        endDate: new Date(2021, 1, 1, 21),
        title: "Cena",
    },
];
const newAppointment = {
    startDate: new Date (2021,1,1,8),
    endDate: new Date (2021,1,1,9,30),
};

const areIntervalsOverlapping = require('date-fns/areIntervalsOverlapping')

const isOverlap = (newDate) =>{
    return dates.some(date => {
        return areIntervalsOverlapping(
            {start:date.startDate, end:date.endDate},
            {start:newDate.startDate,end:newDate.endDate}
        )
    })
}
console.log(isOverlap(newAppointment));

const array = ['a', 'bb', 'ccc']; 
const rta5 = array.map(item => item.length);
console.log(rta5);