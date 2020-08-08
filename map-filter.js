const numbers = [3, 4, 5, 6, 7, 8];

const result = numbers.map(function(element){
    return element * element;
})

const result2 = numbers.map(element=> element * element)
console.log(result);
console.log(result2);

const bigger = numbers.filter(element => element > 5);
console.log(bigger);

const isThere = numbers.find(element => element > 5);
console.log(isThere);