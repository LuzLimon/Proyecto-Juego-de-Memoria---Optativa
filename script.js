//DECLARACION DE VARIABLES Y CONSTANTES PARA UTILIZAR EN LA FUNCIONES DEL CODIGO
let cardsDiscover = 0;
let timer = false;
let pairs = 0;
let score = 0;
let attempts = 0;
const showAttempts = document.getElementById("attempts");
//CONSTANTE PARA DECLARAR LAS IMAGENES POR MEDIO DEL NUEMRO DE IDENTIFICACION
const cards = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];

//FUNCION PARA OBTENER UNA LISTA DE IMAGENES RANDOM
cards = cards.sort(function () {
  return Math.random() - 0.3;
});

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
    firstSelecction = cards[id];
    card1.innerHTML = `<img src="/images/${firstSelecction}.jpg" alt="">`;
    card1.disabled = true;
    cardsDiscover++;
    firstId = id;

  } else if (cardsDiscover == 1) {
    let card2 = document.getElementById(id);
    secondSelecction = cards[id];
    card2.innerHTML = `<img src="/images/${secondSelecction}.jpg" alt="">`; 
    card2.disabled = true;
    cardsDiscover++;
    secondId = id;
//CONDICION PARA VERIFICAR SI LAS IMAGENES SON LAS MISMAS O NO Y REGRESAR A SU ESTADO NORMAL
    if (firstSelecction == secondSelecction) {
      cardsDiscover = 0;
      pairs++;
    } else {
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
    showAttempts.innerHTML = `Movimientos: ${attempts}`;
  }
}
