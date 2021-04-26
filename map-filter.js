const numbers = [3,4,5,6,7,8];
// const output =[];
// console.log(output)

// for(let i=0; i<numbers.length; i++){
//     const element = numbers[i];
//     const result = element*element;
//     output.push(result)
// }

// function square (element){
//     return element*element
// }

// const square = element => element*element;
// const square = x => x*x;


// const result = numbers.map(function(element){
//     return element *element
// })

const result = numbers.map(x =>x*x);

const isBigger = numbers.filter( x => x <3);

const findNumber = numbers.find(x => x>3)



console.log(findNumber)