/*
how the data will be present in memory and how to access data in memory

data have two categories
1 -> Primitive data => [ call by value] 
  [ 7 categories type: String , Number, Boolean, null, undefined, Symbol, BigInt]
*/
//Symbol same  as return 

const id = Symbol('123');
const anotId = Symbol('123');
console.log(id === anotId);

// const bigNumber = 3448585985948939n

/*
2 -> Non-Primitive data [Reference]
 [Array, Object, Function]
*/
const heros = ["shakti","ninja","bheem"]

let myObj = {
    name: "abh",
    age: 34,
    height: 334,
}

const myFunc = function(){
    console.log("hello");
}

console.log(typeof id);  //symbol
console.log(typeof anotId);//symbol
console.log(typeof heros); //obj
console.log(typeof myObj);//obj
console.log(typeof myFunc);// function