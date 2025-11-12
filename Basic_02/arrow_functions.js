// const user ={

//     username:"hitesh",
//     price:999,

//     welcomeMessage: function(){

//         console.log(`${this.username}, welcome to website`)
//         console.log(this)
//     }
// }

// user.welcomeMessage();
// user.username="sam"

// user.welcomeMessage();

// console.log(this)// it will print an empty object {}



// function chai(){
//     let username="sachin"
//     console.log(this.username);// undefined
// }

// chai()


// const chai = function(){
//      let username="sachin"
//     console.log(this.username)
// }

// chai()


// const chai = ()=>{  // this is arrow function
//      let username="sachin"
//     console.log(this)
// }

// chai()


//****************** now we will study more about pure arrow funtion**************


// const addTwo=(num1,num2)=>{
//    return num1+num2
// }

// console.log(addTwo(3,4))

// const addTwo=(num1,num2)=>num1+num2// implicit

// console.log(addTwo(3,4))


// const addTwo=(num1,num2)=>{ return num1+num2}// if we use curly breaces we should use return keyword

// console.log(addTwo(3,4))


// const addTwo=(num1,num2)=> {return { username:"hitesh"}}
// console.log(addTwo(3,4))

// const myArray =[2,4,5,3,6]


// Immediately inoked function expression (IIFE)

// function chai(){
// console.log("db connected")
// }
// chai()

// now we will write iife

( function chai(){
 console.log("db connected")
 })()

//  we use iife to to get rid of global variable pollutions





