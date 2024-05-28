let clientes = [];
    function carregar(status) {
      let divCarregando = document.querySelector('#carregando')
      let divTabela = document.querySelector('#tabelaDados')
      if (status) {
        //habilita o carregando
        divCarregando.innerHTML = `
        <div class="d-flex justify-content-center" >
            <div class="spinner-border" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        `
        divTabela.style.visibility = 'hidden'

      } else {
        //desabilita o carregando
        divCarregando.innerHTML = ''
        divTabela.style.visibility = 'visible'
      }
    }

    function carregarDados() {
      carregar(true)
      const url = "https://66266bc2052332d55322d1f0.mockapi.io/cliente";
      fetch(url)
        .then((resposta) => resposta.json())
        .then((dados) => {
          clientes = dados;
          console.log(clientes);
          montaTabela(clientes);
          carregar(false)
        });
    }
    function montaTabela(clientes) {
      debugger;
      let tbody = document.querySelector("#tbody");
      tbody.textContent = "";
      clientes.forEach((element) => {
        let tr = document.createElement("tr");
        let thId = document.createElement("th");
        let tdNome = document.createElement("td");
        let tdEmail = document.createElement("td");
        let tdBotaoAlterar = document.createElement("td");
        let tdBotaoExcluir = document.createElement("td");
        thId.textContent = element.id;
        tdNome.textContent = element.nome;
        tdEmail.textContent = element.email;
        tdBotaoAlterar.innerHTML = `<button type="button" class="btn btn-success" onclick="alterarCliente(${element.id})" 
                                      data-bs-toggle="modal" data-bs-target="#exampleModal">Alterar</button>`;
        tdBotaoExcluir.innerHTML = `<button type="button" class="btn btn-danger" onclick="excluirCliente(${element.id})">Excluir</button>`;
        tr.appendChild(thId);
        tr.appendChild(tdNome);
        tr.appendChild(tdEmail);
        tr.appendChild(tdBotaoAlterar);
        tr.appendChild(tdBotaoExcluir);
        tbody.appendChild(tr);
      });
    }
    function alterarCliente(id) {
      let cli = clientes.find((x) => x.id == id);
      document.querySelector("#idCliente").value = cli.id;
      document.querySelector("#cadNome").value = cli.nome;
      document.querySelector("#cadEmail").value = cli.email;
    }
    function excluirCliente(id) {
      const url = "https://66266bc2052332d55322d1f0.mockapi.io/cliente";
      fetch(url + "/" + id, {
        method: "Delete",
        headers: {
          "Content-Type": "application/json",
        },
      }).then((resposta) => {
        carregarDados();
        appendAlert("Cliente excluído com sucesso!", "danger");
      });
    }
    function novoCliente(event) {
      event.preventDefault();
      document.querySelector("#idCliente").value = "";
      document.querySelector("#cadNome").value = "";
      document.querySelector("#cadEmail").value = "";
    }

    function consultar(event) {
      event.preventDefault();
      let valor = document.querySelector("#pesquisa").value;
      let clientesSelecionados = clientes.filter(
        (x) => x.nome.includes(valor) || x.email.includes(valor)
      );
      montaTabela(clientesSelecionados);
    }
    function salvarCliente(event) {
      event.preventDefault();
      const url = "https://66266bc2052332d55322d1f0.mockapi.io/cliente";
      let nome = document.querySelector("#cadNome").value;
      let email = document.querySelector("#cadEmail").value;
      let id = document.querySelector("#idCliente").value;
      if (id == "") {
        //novo cliente
        let cliente = { nome, email };
        fetch(url, {
          method: "Post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(cliente),
        }).then((resposta) => {
          //window.alert("Cliente salvo com sucesso.");
          carregarDados();
        });
      } else {
        //altera o cliente
        let cliente = { id, nome, email };
        fetch(url + "/" + id, {
          method: "Put",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(cliente),
        }).then((resposta) => {
          carregarDados();
        });
      }
    }

    //script do alert
    const alertPlaceholder = document.getElementById("liveAlertPlaceholder");
    const appendAlert = (message, type) => {
      const wrapper = document.createElement("div");
      wrapper.innerHTML = [
        `<div class="alert alert-${type} alert-dismissible" role="alert">`,
        `   <div>${message}</div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        "</div>",
      ].join("");

      alertPlaceholder.append(wrapper);
    };

    const alertTrigger = document.getElementById("liveAlertBtn");
    if (alertTrigger) {
      alertTrigger.addEventListener("click", () => {
        appendAlert("Cliente salvo com sucesso!", "success");
      });
    }