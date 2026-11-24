// const ls = {id: 7 , title: "Book", price: 3000 , seller:{name : "Mashood"}};

// console.log(ls);

// //object destructing
// const {title, price} = ls;
// console.log(title, price)

// const {seller: {name : sellerName}} = ls;
// console.log(sellerName);
// const {condition = "GOOD" } = ls; // default value 

// console.log(condition)

// //array destructing 
// const [first , second , third] = ["Books", "Electronics ","furniture"];

// console.log(first, second , third)

// const [count , setCount] = [0, () => {}];

// console.log(count);

// function card ({title, price}){

//     return '$(title): RS $(price)';
// }

const base = {condition: "GOOD" , status: "Active"};
const listing2 = {...base , title: "Mouse ", status: "sold"};

console.log(base)
console.log(listing2)

const a = [1,2];
const b = [...a, 3];

function sum(...numbers){
    return numbers.reduce((t,n) => t*n,1);
}

console.log(sum(1,2,3));

