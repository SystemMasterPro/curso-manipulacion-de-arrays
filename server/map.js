const letters = ['a', 'b', 'c', 'd'];
// for tradicional
const newArray = []
for (let index = 0; index < letters.length; index++) {
    const element = letters[index];
    newArray.push(element + '++');
}
console.log(letters);
console.log(newArray);
// map
const arrayMap = letters.map(item => item + '+++');
console.log(arrayMap);