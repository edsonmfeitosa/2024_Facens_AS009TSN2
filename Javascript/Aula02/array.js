//Array
const lista = [1, 2.2, true, 'edson', 5, 6, 7]

//acessar a informação
console.log(lista[3])

//atribuir um valor
lista[1] = 3.3
console.log(lista)

console.log(`O tamanho do array é ${lista.length}`);
lista[7] = 'novo valor'
console.log(lista)

lista[15] = 'teste'
console.log(lista)

//acrescentar/retirar do início da lista
lista.unshift("elemento no início")
console.log(lista)
lista.shift()
console.log(lista)

//acrescentar/retirar do final da lista
lista.push("Martin")
console.log(lista)
lista.pop()
console.log(lista)