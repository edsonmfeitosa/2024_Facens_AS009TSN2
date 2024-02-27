//const | var | let
//const - Constante - não pode mudar o valor
const nome = "edson"

console.log(typeof nome)

//Diferença do let e var
var num1 = 12.2
let num2 = 22

console.log(num1, num2)

num1 = 'a'
num2 = 1.22

console.log(num1, num2)

var num1 = "declarei novamente"
console.log(num1)

var x1 = 0
{
    let x1 = 2
    console.log('Valor de x1: '+x1)
}
console.log('Valor de x1: '+x1)