//Destructor
let aluno = {
    nome : 'Maria',
    email: 'maria@gmail.com',
    endereco : {
        rua : 'Rua das flores',
        bairro: 'Vila teste',
        numero : 1
    },
    notas : [10, 8, 6.2]
}
//destructor de objetos
const {nome, email} = aluno
console.log(nome, email)

const {nome : n, email : e} = aluno
console.log(n, e)

//destructor de array
const [a, b, c] = [1, 2, 3]
console.log(a, b, c)