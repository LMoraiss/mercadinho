const prompt = require ('prompt-sync')();

const produtos = [];

const menu = () => {
    console.log(`               \nMENU
    
    1- Cadastrar produto
    2- Listar produtos
    3- Atualizar produto
    4- Remover produto
    5- Sair
    `)
    
}

const addProd = () => {
    let nomeP = prompt("Informe o nome do produto a ser adicionado:\n").trim();
    let valorP = prompt("Informe o valor do produto a ser adionado:\n").trim();
    produtos.push({nome : nomeP, valor: valorP});
    console.log("Produto cadastrado com sucesso!");
}


const listProd = () => {
    console.log("Produtos cadastrados:\n");
    produtos.forEach((produtos,index) => {
        console.log("`${index + 1}") - Nome:${produtos.nomeP}, valor : ${produtos.valorP}
})
}

const attProd = () => {
    prompt("Por favor, informe o produto a ser atualizado\n ${produtos.nome}");

}

const removeProd = () => {
    let armv = prompt("Por favor, informe o produto a ser atualizado\n ${produtos.nome}");
    produtos.splice(armv)
    console.log("Produto removido com sucesso!");
}

const sair = () => {
    console.log("Até mais!");
    process.exit();
}