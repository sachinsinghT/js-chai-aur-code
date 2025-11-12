// singleton  

// object literals

// Object.create // for singleton 

const mySym = Symbol("key1");// we should not use it as key.......because it i will make they as string not as symbol...for that we should keep that key in square brackets;

const JsUser={
    // key value system
    name:"sachin",
    age:18,
    "full name":"sachin singh",// we can access it using . operator,,,we should access should []notataion
    location:"india",
    email:"sachin@gmail.com",
    isLoggenIn:false,
    lastLoggeninDays:["monday","saturday"],
    [mySym]:"myKey1"
}

// console.log(JsUser.email);
// console.log(JsUser["name"]);

// console.log(JsUser.full name);
// console.log(JsUser["full name"]);

//console.log(typeof JsUser[mySym])//this will print it as undefined if we dont use square bracket for key 

//console.log(typeof JsUser[mySym])//not square bracket only here but also in key declarition also

// we can freeze the object using freeef fucntion
// Object.freeze(JsUser);

// console.log(JsUser)

JsUser.greeting=function(){
    console.log("hello js user")
}

console.log(JsUser.greeting());

JsUser.greeting2=function(){
    console.log(`hello js user ${this.name}`)
}

console.log(JsUser.greeting2());

