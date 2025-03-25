// 1) Um cliente chamado "João" preencheu o formulário com o 
// nome cheio de espaços em branco no início e no final. Agora
// você precisa corrigir isso.
const cliente =  "    João    ";
console.log(cliente.trim()); //remove os espaços na frente e atrás

// 2) Uma aluna chamada "Ana" preencheu um fomulário, e o 
// sistema precisa exibir o nome dela em letras maiúsculas, já que
// será usado em um banner publicitário. Converta todo o nome para
// maiúsculo.
const aluna = "Ana";
console.log(aluna.toUpperCase());

// 3) Um escritor chamado "Paulo" está escrevendo um livro e,
// por engano, usou a palavra "antigo" onde deveria estar "novo".
// Substitua todas as ocorrências da palavra "antigo" por "novo"
// no texto abaixo.

const livro = "O livro antigo foi revisado. A capa do livro" 
   + "antigo também foi trocada.";
const livroCorrigido = livro.replaceAll("antigo", "novo");
console.log(livroCorrigido);

/*
4) Um professor está verificando as respostas de seus alunos,
e ele quer garantir que todas as respostas iniciem com
a palavra "Resposta". Verifique se as respostas abaixo começam
com a palavra "Resposta".
*/
const resposta1 = "Resposta: A capital do Brasil é Brasília.";
const resposta2 = "Minha resposta: A capital do Brasil é Brasília.";

const iniciaComResposta = resposta1.startsWith("Resposta");
console.log("Resposta 1 inicia com 'Resposta': " + iniciaComResposta);
const iniciaComResposta2 = resposta2.startsWith("Resposta");
console.log("Resposta 2 inicia com 'Resposta': " + iniciaComResposta2);

/*
5) Um usuário quer garantir que sua mensagem de saudação
termine com "!" no final. Ele já escreveu a saudação "Olá, como
vai", mas quer adicionar um ponte de exclamação no final usando
um método.
*/
const saudacao = "Olá, como vai";
const saudacaoComExclamacao = saudacao.concat("!");
console.log(saudacaoComExclamacao);

/*
6) Um engenheiro está trabalhando em um projeto e precisa
calcular a potência de um número. Faça um código que calcule o
valor de 5 elevado ao cubo (5^3)
*/
let numero = 5;
let potencia = 3;
console.log(Math.pow(numero, potencia));

/*
7) Uma pessoa está preenchendo um formulário online e
inseriu a idade como "25 anos" (uma string). O sistema precisa
extrair apenas o número inteiro dessa string.
*/
let idadeString = "25 anos";
let idadeNumber = parseInt(idadeString);
console.log(idadeNumber);

/*
8) Um contador está calculando a taxa de um empréstimo e
obteve um número com muitas casas decimais Ele precisa
formatar esse número para que tenha apenas 2 casas decimais.
*/
let taxa = 2.6776152;
let taxaDuasCasasDecimais = taxa.toFixed(2);
console.log(taxaDuasCasasDecimais);

/*
9) Uma equipe de cientistas registrou as temperaturas mais
altas de três cidades diferentes. Agora, eles precisam
descobrir qual foi a maior temperatura registrada entre essas
cidades
*/
let tempSaoPaulo = 35;
let tempPortoAlegre = 21;
let tempCuiaba = 43;
let maiorTemperatura = Math.max(tempSaoPaulo, tempPortoAlegre, tempCuiaba);
console.log(maiorTemperatura);

/*
10) Um usuário criou uma lista de compras com alguns itens.
Agora, ele deseja adicionar novos itens, tanto no início quanto
no final da lista. Adicione pelo menos 1 item no início e 1
item no final da lista.
*/
let listaDeCompras = ["arroz", "feijão", "carne"];
listaDeCompras.unshift("pão", "tomate");
listaDeCompras.push("água", "refrigerante");
console.log(listaDeCompras);

/*
11) Um cliente tem uma lista de frutas e quer remover a
última fruta da lista
*/
let frutas = ["maçã", "banana", "laranja"];
frutas.pop();
console.log(frutas);

/*
12) Um usuário tem uma estante de livros com os seguintes
títulos: "Game of Thrones", "Harry Potter" e "O Código Da
Vinci". Ele deseja remover o primeiro livro da estante.
*/
let estanteDeLivros = ["Game of Thrones", "Harry Potter", "O Código Da Vinci"];
estanteDeLivros.shift();
console.log(estanteDeLivros);

/*
13) Um usuário tem uma lista de números e deseja filtrar
apenas os números pares.
*/
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numerosPares = numeros.filter ((numero) => numero % 2 === 0);
console.log(numerosPares);
/*
14) Uma cliente tem uma lista de nomes e deseja filtrar
apenas o snomes que iniciam com a aplavra "João"
*/
let nomes = ["João", "Maria", "Daphne", "Pedro", "João Pedro", "Ana"];
let nomesJoao = nomes.filter((nome) => nome.startsWith("João"));
console.log(nomesJoao);

/*
15) Um usuário tem uma lisa de objetos onde cada objeto 
possui várias propriedades, incluindo uma informação sobre o
nível de urgência (de 1 a 5), sendo 1 pocuo urgente e 5 muito
urgente. O objetivo é filtrar apenas os objetos onde o campo
urgente é maior ou igual a 3.
*/
let itens = [
    { nome: "Item 1", categoria: "Eletrônicos", urgente: 5},
    { nome: "Item 2", categoria: "Livros", urgente: 3},
    { nome: "Item 3", categoria: "Alimentos", urgente: 4},
    { nome: "Item 4", categoria: "Roupas", urgente: 2},
    { nome: "Item 5", categoria: "Ferramentas", urgente: 1},
];
let urgentes = itens.filter((item) => item.urgente >= 3);
console.log(urgentes);

/*
16) Um cliente tem uma lista de cidades com seus respectivos
estados e deseja filtrar apenas as cidades que estão localizadas
no estado do Rio Grande do Sul (RS).
*/
let cidades = [
    { nome: "Porto Alegre", estado: "RS"},
    { nome: "Pelotas", estado: "RS"},
    { nome: "Caxias do Sul", estado: "RS"},
    { nome: "Curitiba", estado: "PR"},
    { nome: "Florianópolis", estado: "SC"}
];
let cidadesGauchas = cidades.filter((cidade) => cidade.estado === "RS");
console.log(cidadesGauchas);

/*
17) Encontre o primeiro número par da lista abaixo e exiba
no console a posição desse número na lista.
*/
const numerosAleatorios = [1, 3, 7, 8, 9, 12, 20, 21];
let primeiroNumeroPar = numerosAleatorios.findIndex((numero) => numero % 2 === 0);
console.log(primeiroNumeroPar);

/*
18) Considere a lista de produtos abaixo e resolva as questões 
para encontrar determinados produtos. Se houver produto com a
condição da qustão, mostre o produto no console. Caso contrário,
exiba "Produto não encontrado"
*/
const produtosAleatorios = [
    { nome: "Caneta", preco: 5, estoque: 6},
    { nome: "Caderno", preco: 20, estoque: 20},
    { nome: "Mochila", preco: 150, estoque: 2},
    { nome: "Borracha", preco: 3, estoque: 0},
    { nome: "Lápis", preco: 2, estoque: 12}
];

//18.1) Encontre o primeiro produto caro (acima de R$100,00)
let produtoCaro = produtosAleatorios.find((item) => item.preco > 100);
console.log(produtoCaro);

//18.2) Encontre o primeiro produto que está sem estoque.
let produtoSemEstoque = produtosAleatorios.find((item) => item.estoque == 0);
if(!produtoSemEstoque){
    console.log("Produto não encontrado");
} else{
    console.log(produtoSemEstoque);
};

//18.3) Encontre o primeiro produto que possua ao menos 10 itens.
let produto10ItensEstoque = produtosAleatorios.find((item) => item.estoque >= 10);
if(!produto10ItensEstoque){
    console.log("Produto não encontrado");
} else{
    console.log(produto10ItensEstoque);
};

/*
19) Um usuário tem uma lista de pessoas com suas idades
e deseja verificar se existe pelo menos uma pesoa maior de
18 anos.
*/
let pessoas = [
    { nome: "Lucas", idade: 26},
    { nome: "Maria", idade: 22},
    { nome: "Carlos", idade: 15},
    { nome: "Fernanda", idade: 30},
];
let existeMaior = pessoas.some((item) => item.idade >= 18);
console.log(existeMaior);

/*
20) Um estudante tem uma lista de tarefas de estudo e deseja
verificar se todas as tarefas foram concluídas (status true).
*/
let tarefasEstudo = [
    { descricao: "Estudar matemática", concluido: true },
    { descricao: "Revisar física", concluido: true },
    { descricao: "Fazer exercícios de química", concluido: true },
    { descricao: "Ler capítulo de biologia", concluido: false },
];
let todasTarefasConcluídas = tarefasEstudo
    .every((item) => item.concluido);
console.log(todasTarefasConcluídas);

/*
21) Em um supermercado, o gerente decidiu dar um desconto de
10% em alguns produtos. Sua tarefa é calcular o preço final
desse sproduto com o desconto aplicado e exibir a nova lista
de preços.
*/
let produtosMercado = [
    { nome: "Arroz", preco: 20 },
    { nome: "Feijão", preco: 10 },
    { nome: "Macarrão", preco: 8 },
    { nome: "Açúcar", preco: 5 }
];

let produtosAtualizados = produtosMercado.map((item) => {
    return{
        nome: item.nome,
        preco: item.preco - (item.preco * 0.1)
    };
});
console.log(produtosAtualizados);

/*
22) Você trabalha numa biblioteca e precisa criar uma lista
para saber quantas páginas ainda faltam para terminar de ler
cada livro. Para isso, você tem uma lista de livros com o
total de páginas e as páginas que já foram lidas.
*/
let livros = [
    { 
        titulo: "O Senhor dos Anéis", 
        totalPaginas: 1000,
        paginasLidas: 320
    },
    {
        titulo: "1984",
        totalPaginas: 328,
        paginasLidas: 100
    },
    {
        titulo: "O Código Da Vinci",
        totalPaginas: 96,
        paginasLidas: 50
    }
];

let livrosPaginasRestantes = livros.map(item => {
    return {
        titulo: item.titulo,
        paginasRestantes: item.totalPaginas - item.paginasLidas
    };
});
console.log(livrosPaginasRestantes);

/*
23) Você está organizando uma festa e tem uma lista de
convidados. Agora quer enviar uma mensagem e confirmação para
cada um deles. Mostre no console uma mensagem para cada convidado
usando o forEach.
*/
let convidados = ["João", "Maria", "Carlos", "Fernanda"];

convidados.forEach(item => {
    console.log(`Olá, ${item}! Você está confirmado`);
});

/*
24) Vamos imaginar que voce tem uma lista de frutas e deseja
obter apenas as primeiras três frutas dessa lista.
*/
let minhasFrutas = ["Maçã", "Banana", "Laranja", "Uva", "Abacaxi"];
let minhas3Frutas = minhasFrutas.slice(0, 3);
console.log(minhas3Frutas);

/*
25) Você tem uma lista de tarefas e deseja obter todas 
as tarefas, exceto as duas primeiras, mas sem alterar a
lista original.
*/
let tarefas = [
    "Estudar para a prova", "Revisar os exercícios", 
    "Assistir as aulas", "Ler um livro"
];
let tarefasMantidas = tarefas.slice(2, 4);
console.log(tarefasMantidas);

/*
26) Refaça o exercício acima, mas dessa vez excluindo os 
dois primeiro itens da lista original.
*/
tarefas.splice(0, 2);
console.log(tarefas);

/*
27) Você tem uma lista de ingredientes para uma receita e
deseja criar um única string que contenha todos os 
ingredientes separados por vírgulas.
*/
let ingredientes = ["Farinha", "Açúcar", "Ovos", "Leite", "Manteiga"];
let receita = ingredientes.join(", ");
console.log(receita);

/*
28) Você está organizando um campeonato de jogos e tem uma
lista de jogadores inscritos, Você quer verificar se um
jogador específico se inscreveu no campeonato.
*/
let jogadoresInscritos = [
    "Lucas", "Mariana", "Felipe", 
    "Tatiane", "Roberto,"
];
let jogadorParaVerificar = "Felipe";
let confirmarJogador = jogadoresInscritos.includes(jogadorParaVerificar);
console.log(`O ${jogadorParaVerificar} está inscrito: ${confirmarJogador}`);

/*
29) Você é o organizador de um campeonato de futebol. Para
garantir que tudo saia conforme o planejado, você criou uma
lista de tarefas. Mas essa lista está em ordem invertida e 
você precisa corrigir.
*/
let tarefasDoCampeonato = [
    "Divulgar o evento",
    "Definir as equipes",
    "Comprar os prêmios",
    "Escolher o local do jogo",
    "Criar as regras do torneio"
];
tarefasDoCampeonato.reverse();
console.log(tarefasDoCampeonato);

/*
30) Você está organizando uma lista de nomes e quer se
certificar que todos os convidados estão organizado em
ordem alfabética para facilitar a hora de fazer as ligações.
*/
let nomesConvidados = ["Carlos", "Ana", "Mariana", "Felipe", "João"];
nomesConvidados.sort((a, b) => {
    if(a < b) {
        return -1
    }

    return 1
});
console.log(nomesConvidados);

/*
31) Você está rganizando uma equipe para um torneio de
esportes e precisa classificar os participantes por idade.
Para isso, você fez uma lista com as idades deles e quer
organizá-los do mais jovem para o mais velho.
*/
let clienteLista = [
    { nome: "Pedro", idade: 20 },
    { nome: "Joana", idade: 25 },
    { nome: "Maria", idade: 12 },
    { nome: "Cleide", idade: 65 },
];
clienteLista.sort((a, b) => {
    if(a.idade < b.idade) {
        return -1
    }

    return 1
});
console.log(clienteLista);

/*
32) Um funcionário de uma loja precisa saber quanto vendeu no
último dia. Então ele fez uma lista com os valores das vendas
dos produtos e calculou o total.
*/
let vendas = [150.75, 200.5, 50.25, 80.0, 120.0];
let somaVendas = vendas.reduce((somaAtual, item) => {
    return somaAtual + item
}, 0);
console.log(somaVendas);

/*
33) Você está acompanhando um campeonato de videogame e deseja 
saber quantos pontos seus amigos acumularam juntos em uma
partida.
*/
let pontosJogadores = [
    { jogador: "Pedro", pontos: 20 },
    { jogador: "Maria", pontos: 50 },
    { jogador: "Cleide", pontos: 5 },
    { jogador: "Pedro", pontos: 150 },
    { jogador: "Maria", pontos: 298 },
];
let totalPontos = pontosJogadores.reduce((somaAtual, item) => {
    return somaAtual + item.pontos
}, 0);
console.log(totalPontos);

function trocarImagem(){
    let imagem = document.getElementsByTagName("img")[0];
    imagem.src = "./images/imagem2.jpg"
}

function adicionarTarefa(){
    let input = document.getElementById('entrada')
    let lista = document.getElementById("listaTarefas")
    let item = document.createElement("li")
    item.textContent = input.value
    lista.appendChild(item)

    /* 
    item.onclick = function(){
        lista.removeChild(item)
    }
    */
}

document.getElementById("listaTarefas").addEventListener("click", function(event) {
    event.target.remove() //remove o item clicado
});