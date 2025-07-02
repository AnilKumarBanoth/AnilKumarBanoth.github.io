// const score =[2,4,5,6,7];
// score.forEach((value)=>{
//     console.log(value);
// });

//  const score =[2,4,5,6,7];
// score.map((value)=>{
//     console.log(value);
// });


// const score =[2,4,5,6,7];
//  const newScore = score.filter((value)=>{
//    return value > 3

// });
// console.log(newScore);


// const score =[2,4,5,6,7];
//  const newScore = score.find((value)=>{
//    return value === 3

// });
// console.log(newScore);

const score =[2,4,5,6,7];
 const newScore = score.reduce((sum, value)=> sum + value, 0
   

);
console.log(newScore);
