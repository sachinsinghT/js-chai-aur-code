// when you dont know how many parameters will be there

function calculateCarPrice(...num1){
    return num1
}
console.log(calculateCarPrice(100,200,300))

// rest operator and spread operatro look same ...

const user={
    name:"sachin",
    age:"23"
}



function handleObject(anyObject){
    console.log(`user name is ${anyObject.name} and user age is ${anyObject.age}`)
}

// handleObject(user);

handleObject({
    name:"sachin",
    age:"23"
})