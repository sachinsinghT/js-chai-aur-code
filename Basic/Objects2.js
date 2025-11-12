// const tinderUser= new Object();// this is singleton object
// console.log(tinderUser);
const tinderUser={};// this is non singleton
// console.log(tinderUser);

tinderUser.id="123"
tinderUser.name="sachin"

// console.log(tinderUser);


//

const regularUser={
email: "someone@gmailcom",

fullname:{
    userfullname:{
       firstname:"sachin",
       lastname:"singh"
    }
}
}

// console.log(regularUser.fullname.userfullname.firstname)// ther is one conept of (?) we will learn it later

const obj1={
    1:"a",
    2:"b"
}

const obj2={
    3:"a",
    4:"b"
}

const obj4={
    5:"a",
    6:"b"
}


// we will combine them

// const obj3={obj1,obj2}  two object will come but we need key value pair like array separator...for that we use

// console.log(obj3) 

//const obj3 =Object.assign({},obj1,obj2);
// const obj3 =Object.assign(obj1,obj2);this will also work

// console.log(obj3)
// console.log(obj1)//here obejct one will remain same if we use {} this or not,,but in case of more than  two objects it obj1 one will also contain all if we dont use {}this

// const obj3=Object.assign({},obj1,obj2,obj4);

// console.log(obj3)

// console.log(obj1)


// we can use spread operatior

// const obj3={... obj1,...obj2,...obj4};
// console.log(obj3)


// if something come from database


const users=[
    {
     tinderUser
    },
    {
      obj2
    }
    ,
    {
     obj4
    }
]

// console.log(users[0]);

// const arr=(Object.keys(tinderUser));
// console.log(arr[0])

// const arr=(Object.values(tinderUser));
// console.log(arr[0])

// const arr=(Object.entries(tinderUser));
// console.log(arr)

console.log(tinderUser.hasOwnProperty("id"));





