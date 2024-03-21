const score = 400
// console.log(score)

const balance = new Number(1000);
// console.log(balance)

// console.log(balance.toString())
// console.log(balance.toString().length)
// console.log(balance.toFixed(4))


const anotherNumber = 23.9905
// console.log(anotherNumber.toPrecision(3))//give precise value

const hund = 10000000
// console.log(hund.toLocaleString('en-IN'))// method [jo represent ko easy krta h]

// console.log(Number.MAX_VALUE) // largest possible number
// console.log(Number.MIN_VALUE) // min poss num 

// console.log(Number.MAX_SAFE_INTEGER)  // max safe integer
// console.log(Number.MIN_SAFE_INTEGER)  // min safe integer
// console.log(Number.isFinite)


// ++++++++++++++++ MATHS ******************

// console.log(Math)
// console.log(Math.abs(-4)) // absolute
// console.log(Math.round(2.76)); // rounding off to nearest whole number

// console.log(Math.ceil(4.6)) // 4 s upper
// console.log(Math.floor(4.6))// 4 s lower

// console.log(Math.sqrt(4))
// console.log(Math.min(4,3,6,8))
// console.log(Math.max(4,3,6,8))

console.log(Math.random())
console.log((Math.random()*10) + 1) //added one to avoid 0

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max-min)+1) + min)

