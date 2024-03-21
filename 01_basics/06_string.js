// String
const name = "abhishek";
const repoCount = 50;

//console.log(name + repoCount + "value")

// backTicks
// console.log(`Hello my name is ${(name).toUpperCase()} and my repoCount is ${repoCount}`)

const names = new String('Abhishek')
console.log(names)

// console.log(names[1]) // access the key
// console.log(names.__proto__); //protoType

// console.log(names.length)
// console.log(names.toUpperCase());
// console.log(names.charAt(5)) //at given position which char is present
// console.log(names.indexOf('k'))// to know the position of char


const naming = "abhi-shek";

const newString = naming.substring(0, 4)// -ve not accept
console.log(newString);

const anotherString = naming.slice(-9,7)// -ve accept
console.log(anotherString)


const newName = "   abhishek   ";
console.log(newName);
console.log(newName.trim());//remove start and end space

const url = "abhishek@3456"
console.log(url.replace('@34', '*&'))

console.log(url.includes('abhishek'))//abhishek present or not

const urlIn = "abhi shek @ 3456"
const urlOut = "abh-ish-ek-@-3456"
console.log(urlIn.split(' ')); // split string into array 
console.log(urlOut.split('-'));