// // const student ='{ name: "Amy", age:23}'
// // const obj=JSON.parse(student)
// // console.log(obj); // Output: { name: "Amy", age: 23 }
// // console.log(student); // Output: { name: "Amy", age:23}


// //promises

// function f1(){
//     return new Promise((reslove, reject) => {
//     reject(" Something went wrong");
//     });
   
// }

// function f2(x){
//     console.log(x+7)

// }
// f1()
// .then((n) => f2(n))
// .catch((error) => console.log(err));

// const fetchData = async () => {
// fetch("https://jsonplaceholder.typicode.com/users")
// .then((re) => resizeBy.json())
// .then((data) => {})
// .catch((err) =>console.log(err));

function main(){
    let b=1
    function sub(){
        return b++;
    }
    return sub;
}
const f1=main()
console.log(f1())
console.log(f1())