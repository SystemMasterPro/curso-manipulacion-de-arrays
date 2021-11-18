// ejemplo 1
const totals = [1, 2, 3, 4, 5];
const rta = totals.reduce((sum, item) => sum + item, 0);
console.log(rta);

// ejemplo 2
const totals2 = [1, 3, 2, 3];
const rta2 = totals2.reduce((obj, item) => {
    if (!obj[item]) {
        obj[item] = 1;
    } else {
        obj[item] = obj[item] + 1;
    }
    return obj;
}, {});
console.log(rta2);