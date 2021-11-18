// ejemplo 1 
const elements = [1, 2, 3, 4];
const otherElements = [5, 6, 7, 8];
const newArray = elements.concat(otherElements);
console.log(newArray);

// ejemplo 2 
const rta2 = [...elements, ...otherElements];
console.log(rta2);