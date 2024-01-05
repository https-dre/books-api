# Books - Api

Uma api para visualizar realizar uploads de Livros em *PDF*

O objetivo do projeto era aprender a lidar com arquivos de forma simples, então criei esse projeto só para passar o tempo.

Utilizei o PostgreSQL como banco de dados para registrar os Livros e o endereço de cada arquivo PDF salvo na pasta storage, assim cada linha do banco tem seu PDF correspondente.

# Rotas

  /post *Postar os Livros*
  
    var formdata = new FormData();
    formdata.append("name", "O Pequeno Príncipe");
    formdata.append("autor", "Antoine de Saint");
    formdata.append("file", "file://C:\\Users\\User\\Downloads\\O-Pequeno-Príncipe.pdf");
    
    var requestOptions = {
       method: 'POST',
       body: formdata,
    };
    
    fetch("http://localhost:2007/post", requestOptions)
       .then(response => response.text())
       .then(result => console.log(result))
       .catch(error => console.log('error', error));

  /getBook *Pesquisar Livros*

    fetch("http://localhost:2007/getBook?name=O Pequeno Príncipe")
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));

  /download *Visualizar um Livro*

    fetch("http://localhost:2007/download?id=1")

    
