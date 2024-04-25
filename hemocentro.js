const readline = require ('readline-sync');

let cadastroDoadores = []

function cadastrarDoador(){
    let novoDoador = {}
    let nome = readline.question("nome do doador: ");
    let idade = readline.question("idade do doador: ");
    let peso = readline.question("peso do doador: ");
    let tipo = readline.question("tipo sanguíneo do doador: ");
    let data = readline.question("data da última doação do doador: ");

    novoDoador.nome = nome
    novoDoador.idade = idade
    novoDoador.peso = peso
    novoDoador.tipoSanguíneo = tipo
    novoDoador.dataUltimaDoacao = data

    cadastroDoadores.push(novoDoador)
    console.log(cadastroDoadores)
}

function listaDoadores(){
    console.log("--------------------\nLISTAGEM DE DOADORES\n:--------------------")
    console.log("NOME             | IDADE | PESO | TIPO SANGUÍNEO | ÚLTIMA DOAÇÃO")
    console.log("-----------------------------------------------------------------")

}


//função menu
function exibirMenu(){
    console.log('1. cadastrar doador');
    console.log('2. listar doadores');
    console.log('3. buscar doador por tipo sanguíneo');
    console.log('4. buscar dador por data de última doação');
    console.log('5. sair');
}
 function processarEscolha(opcao){
    switch(opcao){
        case '1':
           console.log(" doador");
            break;
        case '2':
            console.log("listar doadores");
            break;
        case '3':
            console.log("buscar doador por tipo sanguíneo");
            break;
        case '4':
            console.log("buscar doador por data de última doação");
            break;
        case '5':
        console.log("sair...");
            return true; //indica que o progam deve ser encerrado
        default:
            console.log("Você escolheu uma opcao inválida. escolha outra opcao válida.")

    }
    return false;
 }

/*funcao principal, que executa um while que vai ser smepre true, ou seja, o código vai
continuar em execução até que apertemos a opção4, que transforma a condição do while em false(!true).*/

function main(){
    let encerrar = false;

    while(!encerrar) {
        exibirMenu();
        let opcao = readline.question("digite o número da opcao desejada: ");
        encerrar = processarEscolha(opcao);

    }
}
main();

