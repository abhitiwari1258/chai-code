const accountId = 1144553
let accountEmail = "abhishek@3456.com";
var accountPassword = "12345";
accountCity = "UP";

// accountId = 2 //not allowed
accountEmail = "aAbear@34"
accountPassword = "12345555"
accountCity = "punjab" //not good but variable can use
let accountState;  //undefine
/*
prefer not use var because of issue in block scope and functional scope
*/
console.log(accountId)
console.table([accountEmail,accountId,accountPassword,accountCity,accountState])
