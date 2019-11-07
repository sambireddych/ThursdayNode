const readline = require('readline-sync')
const name = readline.question("Who are you");
const height = readline.questionInt("enter height")
console.log(name)
if(height>=7){
    console.log("please consider in basketball team")
}else{
    console.log("consider other sports")
}