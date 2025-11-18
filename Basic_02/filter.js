// const coding =["js","rubby","python"]

// // for each wont return undefined;

// coding.forEach((item)=>{
//     console.log(item);
// })

 const myNums=[1,2,3,4,5,6,7,8,9,10];

// const newNums=myNums.filter((num)=>{
//     return num>4;
// })

// console.log(newNums)


// if we want to use for each for the same thing

const newNums=[]

myNums.forEach((num)=>{
    if(num>4){
        newNums.push(num)
    }
})

console.log(newNums)


// array of objects