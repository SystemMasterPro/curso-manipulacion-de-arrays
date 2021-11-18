// ejemplo 1
const words = ["spray", "limit", "elite", "exuberant"];
const rta = words.filter(item => item.length >= 6);
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
const rta2 = orders.filter(item => item.delivered && item.total >= 100);
console.log(rta2);

// ejemplo 3
const search = (query) => {
    return orders.filter(item => {
        return item.customerName.includes(query);
    })
}
console.log(search('Valentina'));