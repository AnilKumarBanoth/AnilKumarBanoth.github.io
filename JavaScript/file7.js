// const f1=()=>{
//     console.log("log out");
// }
// ;
// const main =(x)=>{
//     x()

// }
// main(f1);

// const add = (...a) =>{
//     console.log(a)
// console.log(a[0])
// }
// add(4,45,664,3455)

// const student ={
//     name : "john",
//     age:2345,
// };
// console.log(student);
// console.log(student.name);
// console.log(student["age"]);
// console.log(student["name"]);
// student.name = "doe";
// console.log(student.name);
// student.city = "delhi";
// console.log(student);
// delete student.age
// console.log(student)
// student.city = "mumbai";

// const keys = Object.keys(student)
// console.log(keys);
// const values = Object.values(student)
// console.log(values);

// const cart =
// {
//     23 : 12,
//     13 : 45,
//     45 : 67,
//     67 : 89

// };
// const items = Object.keys(cart).length
// console.log(items);

// const score = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
// console.log(score)
// console.log(score[0])
// score.push(110);
// console.log(score)
// consloe.log(score.length)
  
// const score =[[...score,...score1]];


// const newScore = [...score[7,8,9]]
// console.log(newScore)


// const cart ={
//     1:2,
//     2:3,
//     3:4,
//     4:5,
// };
// const newCart =({...cart,7:6})
// console.log(newCart)

let cart = {};

const product =[
    {id:1, name:"laptop", price:50000, quantity:2},
    {id:2, name:"mobile", price:20000, quantity:5},
    {id:3, name:"tablet", price:30000, quantity:3},
    {id:4, name:"watch", price:10000, quantity:1},

];
function addToCart(id){
    cart= {...cart,[id]: 6};
}

addToCart(1)
console.log(cart)
addToCart(2)
addToCart(3)
addToCart(4)


console.log(cart)