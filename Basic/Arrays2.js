//
const marvel_heros =["thor","Ironman","spiderman"]
const dc_heros=["superman","flash","batman"]
// marvel_heros.push(dc_heros);// it will change the original array
// console.log(marvel_heros);

// const allHeros = marvel_heros.concat(dc_heros);// concat will return new array
// console.log(allHeros);


const all_new_heros=[...marvel_heros,...dc_heros];// ... is a spread operator. it will spread all the elements of array
// console.log(all_new_heros);


const another_array =[1,2,3,[4,5,6],7,[6,7,[4,5]]];

const real_another_array=another_array.flat(2);//we can infinity also. ... to break all elements in a single array


// console.log(real_another_array);

// console.log(Array.isArray("sachin"));// it will check about array
// console.log(Array.from("sachin"));// it will convert to array

// console.log(Array.from({name:"sachin"}));// we have to mention that we need to make array of keys or values or else it will return an empty array


let score1 =100;
let score2=200;
let score3=300;

// console.log(Array.of(score1,score2,score3))


