let form = document.getElementById("form");

form.addEventListener("submit", (e) => {
    // previne reload da pagina qdo pressionado submit
    e.preventDefault();
    let name = document.getElementById("name").value;
    let codigo = document.getElementById("codigo").value;
    let marca = document.getElementById("marca").value;
    let modelo = document.getElementById("modelo").value;
    let unidade = document.getElementById("unidade").value;
    let estoque = document.getElementById("estoque").value;
    let estoquemin = document.getElementById("estoquemin").value;
    let vlcusto= document.getElementById("vlcusto").value;
    let vlvenda= document.getElementById("vlvenda").value;
    let date = document.getElementById("date").value;
    let status = document.getElementById("status").value;
   
  
    

    let dados = {
        name,
        codigo,
        marca,
        modelo,
        unidade,
        estoque,
        estoquemin,
        vlcusto,    
        vlvenda,
        date,
        status,

    };
  
    let valoresDados = Object.values(dados);

    let tbody = document.getElementById('tabela-produtos');
    let tr = document.createElement('tr');
    tbody.append(tr);

    valoresDados.forEach(valor => {
        let td = document.createElement('td');
        tr.append(td);
        td.append(valor);
    });

    // Adicionando o cliente no Local Storage

    let produtos = JSON.parse(localStorage.getItem('produto')) ?? [];

    produtos.push(dados);

    let produtosConvertidos = JSON.stringify(produtos);

    localStorage.setItem('produto', produtosConvertidos);


    swal('Produto cadastrado com sucesso!', 'Pronto, bora la vender!', 'success');


});