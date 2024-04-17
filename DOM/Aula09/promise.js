function pesquisar(event) {
    event.preventDefault()
    let cep = document.querySelector('#cep').value
    if (cep == '') {
        window.alert("Digite o CEP.")
        return
    }
    cep = cep.replace('.','').replace('-', '')
    let carregar = document.querySelector('#carregando')
    
     consultarCep(cep).then(dados =>{
        carregar.style.visibility = 'visible'
        document.querySelector('#rua').value = dados.logradouro
        document.querySelector('#bairro').value = dados.bairro
        document.querySelector('#estado').value = dados.uf
        carregar.style.visibility = 'hidden'
    })
}
function consultarCep(cep) {
    debugger
    //viacep.com.br/ws/01001000/json/
    let link = `https://viacep.com.br/ws/${cep}/json/`
    return fetch(link).then(resposta => resposta.json())
}