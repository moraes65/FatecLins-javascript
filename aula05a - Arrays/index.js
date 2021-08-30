// ARRAYS - ESTRUTURA DE DADOS EM JAVASCRIPT
// ARMAZENAR DADOS EM JAVASCRIPT (ARRAYS)

var carro1 = 'Volks';
var carro2 = 'Vovlo';
var carro3 = 'Nissan';
// PARA CADA TIPO DE CARRO DEVERIA CRIAR UMA VARIAVEL?
// CRIANDO UM ARRAY
// USARUM LITERAL DE ARRAY É FORMA FÁCIL DE CRIAR ARRAY JS
// SINTAXE:
// var arrayNome = []; // COLCHETES >>> TIPO DA VAR SERÁ ARRAY
var arrayCarros = ['Volks', 'Volvo', 'Nissan'];
console.log(arrayCarros);

// CRIAR ARRAY USANDO A PALAVRA RESERVA new

var arrayListaCarros = new Array('Volks1', 'Volvo1', 'Nissan1');
console.log(arrayListaCarros);

// ACESSO AOS ELEMENTOS DE UM ARRAY
// VOCE DEVE UTILIZAR UM INDICE (MATRIZ)
// OBS: OS INDICES COMEÇAM POR (0) ZERO

var carro01 = arrayCarros[0];
// console.log(carro01);

// ALTERAR UM ELEMENTO DO MEU ARRAY
// UTILIZANDO OS INDICES
arrayCarros[2] = 'BMW';

arrayCarros[3] = 'Nissan';
// console.log(arrayCarros);

// ARRAY PASSOU A SER UM OBJETO A PARTIR DO ECMASCRIPT 2015
// CONSIGO SABER O TAMANHO DO MEU ARRAY
// PROPRIEDADES E METODOS DA CLASSE ARRAY
// LENGTH - retorna o tamanho do array
var tamanhoArrayCarros = arrayCarros.length;
// console.log(tamanhoArrayCarros);

// ORDENAR OS ELEMENTOS DE UM ARRAY USANDO METODO sort()
var arrayCarrosOrdenado = arrayCarros.sort();
// console.log(arrayCarrosOrdenado);
// COMO RECUPERAR O ULTIMO ELEMENTO DO ARRAY???
var ultimoCarro = arrayCarros[arrayCarros.length - 1];
//console.log(ultimoCarro);

// ADICIONAR E REMOVER ELEMENTOS USANDO MÉTODOS DA CLASSE ARRAY
// MÉTODO push() - inserir um elemento no FIM do array
arrayCarros.push('Corcel');
// console.log(arrayCarros);

// METODO unshift() - inserir um elemento no INICIO do array
arrayCarros.unshift('Fusca');
// console.log(arrayCarros);

// METODO pop() - remover um elemento no FIM do array
arrayCarros.pop(); // nao passar parametro
// console.log(arrayCarros);

// METODO shift() - remover um elemento no INICIO do array
arrayCarros.shift(); // nao passar parametro
console.log(arrayCarros);



