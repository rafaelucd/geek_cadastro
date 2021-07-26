let form = document.getElementById("form");

form.addEventListener("submit", (e) => {
    // previne reload da pagina qdo pressionado submit
    e.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let data_nasc = document.getElementById("data_nasc").value;
    let tel = document.getElementById("tel").value;
    let cep = document.getElementById("cep").value;
    let logradouro = document.getElementById("logradouro").value;
    let numero = document.getElementById("numero").value;
    let complemento= document.getElementById("complemento").value;
    let bairro = document.getElementById("bairro").value;
    let cidade = document.getElementById("cidade").value;
    let UF = document.getElementById("UF").value;
    let pais = document.getElementById("pais").value;
    

    let dados = {
        name,
        email,
        data_nasc,
        tel,
        cep, 
        logradouro, 
        numero,
        complemento, 
        bairro,
        cidade,
        UF,
        pais,

    };
  
    let valoresDados = Object.values(dados);

    let tbody = document.getElementById('tabela-clientes');
    let tr = document.createElement('tr');
    tbody.append(tr);

    valoresDados.forEach(valor => {
        let td = document.createElement('td');
        tr.append(td);
        td.append(valor);
    });

    // Adicionando o cliente no Local Storage

    let clientes = JSON.parse(localStorage.getItem('cliente')) ?? [];

    clientes.push(dados);

    let clientesConvertidos = JSON.stringify(clientes);

    localStorage.setItem('cliente', clientesConvertidos);


    swal('Bom trabalho!', 'Cliente cadastrado com sucesso!', 'success');


});
