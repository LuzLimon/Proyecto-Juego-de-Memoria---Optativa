//DECLARACION DE VARIABLES Y CONSTANTES PARA UTILIZAR EN LAS FUNCIONES DEL CODIGO.
const showAttempts = document.getElementById("attempts");
let cardsDiscover = 0;
let timer = false;
let pairs = 0;
let score = 0;
let attempts = 0;
let showMovements = 0;
let showMovements2 = 0;
let cardsAleatoria = [];
let cardsContainer = [];
let cardsRandom = [];
//CONSTANTE PARA DECLARAR LAS IMAGENES POR MEDIO DEL NUEMRO DE IDENTIFICACIÓN.
let cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32];

// let cards = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 14, 14, 15, 15, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 30, 30, 31, 31, 32, 32];




//FUNCION PARA OBTENER UNA LISTA DE IMAGENES RANDOM Y LISTA DE IMAGENES RANDOM POR JUEGO
cards.sort(function(){
  return Math.random() - 0.5;
});
cardsAleatoria = cards.slice(cards.length-8);
cardsContainer = cardsAleatoria;

cardsRandom = cardsAleatoria.concat(cardsContainer);

console.log('aleatoria', cardsAleatoria)
console.log('aleatoria2', cardsContainer)
console.log('aleatoria3', cardsRandom)

cardsRandom.sort(function(){
  return Math.random() - 0.3;
});





// function cardsAleatoria() {
//   orderCardsRound = cards.concat(this.cards);
//   orderCardsRound.sort( () => Math.random() - 0.5);
//   console.log(orderCardsRound)
// }
// cardsAleatoria();

// cards = cards.sort(function cardsAleatoria(min, max) {
//   return Math.random() * (max - min) + min;
// });

// function cardsAleatoria(min, max){
//   cards = cards.sort(function(){
//       return Math.random() * (max - min) + min;
//     })
// }

// cardsAleatoria(1,32);

//FUCNION PARA EL CONTEO DE INTENTOS
function movements() {
  showMovements ++;
  // console.log(showMovements);
  if(showMovements % 2 == 0){
    showMovements2++;
    // console.log('movimientos 2: ', showMovements2)
  }
  showAttempts.innerHTML = `Intentos: ${showMovements2}`;
}

///FUNCION PARA DEVOLVER LAS TARJETAS A SU ESTADO NORMAL Y NO MOSTRAR LA IMAGEN
function blockTargets(cards) {
  for (let i = 0; i <= 15; i++) {
    let targetBlock = document.getElementById(i);
    targetBlock.innerHTML = `<img src="/images/${cards[i]}.jpg" alt="">`;
    targetBlock.disabled = true;
  }
}

//FUNCION PARA GIRAR LAS CARDS Y MOSTAR LA IMAGEN
function turn(id) {
  if (timer == false) {
    timer = true;
  }
//CONDICIONALES PARA VOLTEAR LAS IMAGENES UNA POR UNA Y DESHABILITAR CUANDO ESTEN BOCA ARRIBA
  if (cardsDiscover == 0) {
    let card1 = document.getElementById(id);
    firstSelecction = cardsRandom[id];
    console.log('IMAGEN 1:', firstSelecction);
    card1.innerHTML = `<img src="/images/${firstSelecction}.jpg" alt="">`;
    card1.disabled = true;
    cardsDiscover++;
    firstId = id;

  } else if (cardsDiscover == 1) {
    let card2 = document.getElementById(id);
    secondSelecction = cardsRandom[id];
    console.log('IMAGEN 2', secondSelecction);
    card2.innerHTML = `<img class="card2" src="/images/${secondSelecction}.jpg" alt="">`;
    card2.disabled = true;
    cardsDiscover++;
    secondId = id;
    // const button = [...document.querySelectorAll(".button")];

//CONDICION PARA VERIFICAR SI LAS IMAGENES SON LAS MISMAS O NO Y REGRESAR A SU ESTADO NORMAL
    if (firstSelecction == secondSelecction) {
      console.log(firstSelecction)
      cardsDiscover = 0;
      pairs++;
    } else {
      // card2.innerHTML = `<img class="card2" src="/images/${secondSelecction}.jpg" alt="">` + `<style>
      // img {
      //   border: red 5px double;
      //   width: 80%; 
      // }
      // </style>`; 
      setTimeout(() => {
        card1 = document.getElementById(firstId);
        card2 = document.getElementById(secondId);
        card1.innerHTML = " ";
        card2.innerHTML = " ";
        card1.disabled = false;
        card2.disabled = false;
        cardsDiscover = 0;
      }, 1500);
    }
  }
//CONDICION PARA FINALIZAR EL JUEGO
  if (pairs == 8) {
    showAttempts.innerHTML = `Intentos: ${showMovements2}`;
  }
}
