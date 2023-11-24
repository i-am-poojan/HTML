const string1="p.poojan1717@gmai.com"
const string2="12a_bc@gmail.c0m"
// const regex=RegExp(/^a/)
// const regex=RegExp(/^[A-Za-z]/)
// const regex=RegExp(/^[A-Za-z]{1,3}$/)
// const regex=RegExp(/^[A-Za-z]/)
const regex=RegExp(/^[A-Za-z0-9-_.]+@[a-zA-Z]{2,8}.[a-zA-Z]{2,5}$/)

console.log(regex.test(string1));
console.log(regex.test(string2));