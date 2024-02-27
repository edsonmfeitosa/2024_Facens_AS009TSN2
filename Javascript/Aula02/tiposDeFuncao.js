//tipos de função

//Função Nomeada
function divisao(num1, num2) {
    if (num2 == 0) {
        return 'Impossível dividir por zero'
    } else {
        return num1 / num2
    }
}
console.log(divisao(3, 2))

//função anônima
let multiplicacao = function (num1, num2){
    return num1 * num2
}
console.log(multiplicacao(4, 2))

// Arrow function
let subtracao = (num1, num2) => {
    return num1 - num2
}
console.log(subtracao(10, 5))

let soma = (num1, num2) => num1 + num2

console.log(soma(3, 6))

//bricadeira
let calcular = (num1, num2, operacao) => operacao(num1, num2)

console.log(calcular(10, 5, divisao))