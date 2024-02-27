//Notação Ponto
let cliente = {}
cliente.nome = 'Edson'
cliente.email = 'edson.feitosa@facens.br'
console.log(cliente)

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
console.log(aluno.nome, aluno.notas)
console.log(aluno.endereco.bairro)
console.log(aluno.notas[1])