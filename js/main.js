//Создаем функцию начала игры (элементы игры становятся видны)

//

function start() {
	//создаем блок старта
	sozdanieStartBlock();
	//кнопка старта
	startButton.onclick = play;


 }
 //
start();


//функция запуска игры по кнопке
function play(){
	sozdanieGamePole();
	soundClick();
    sozdanieTimerBlock();
	sozdaemOchkiBlock();
	makingLifesBlock();
	sozdanieFuelBlock()
	makingShipBlock();
	createEnemy();
	makingPlanets();
	makingSaturn();
	removeStartBlock();
	fuelLevel();
}

 

 //функция отсчета уровня топлива с шагом -1 . и завершения игры при уровне =0//
function fuelLevel() {
    var chasy = setInterval(function () {
      timerBlock.innerText = timerBlock.innerText - "1";
      if (timerBlock.innerText == 0) {
        clearInterval(chasy);
        konecIgry();
        //console.log(stars.innerText);
      }
    }, 1000);
  }



//функция конец игры
function konecIgry() {

  udalenieGameSpace();

  removeLifes();

  udlenieOchkiBlock();

  udalenieFuelBlock();
  
  sozdanieKoniecIgra();
}






