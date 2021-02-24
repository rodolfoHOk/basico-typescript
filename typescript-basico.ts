var variavel:number;
const hello:string = "Hello World";
let varlocal:number = 2;

var flag:boolean = true;
var umaLista:string[] = ['Ae','Ba','Ce']

variavel = 5;
console.log(variavel);

console.log(hello);
console.log(umaLista);

class Pessoa{
    nome:string;
    idade:number;

    constructor(){
        this.nome = 'Joao';
        this.idade = 20;
    }
}
let pessoa:Pessoa;
pessoa = new Pessoa();
console.log(pessoa);
console.log(pessoa.nome);

class Pessoa2{
    constructor(
        public nome:string,
        private idade:number
    ){
    }

    imprimirNome(){
        console.log(this.nome);
    }

    obterIdade():number{
        return this.idade;
    }

    imprimirIdade(){
        console.log(this.obterIdade());
    }
}
let pessoa2:Pessoa2;
pessoa2 = new Pessoa2("Joao Jr",20);
pessoa2.imprimirNome();
pessoa2.imprimirIdade();