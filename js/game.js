/*--------------------------------------------------------
Создание блоков
---------------------------------------------------------*/
//создание блока старта игры//
function sozdanieStartBlock() {
    startBlock = document.createElement("div");
    //
    startBlock.id = "game-start";
    //создаем кнопку "Играть"//
    startButton = document.createElement("button");
    //
    startButton.id = "start-button";
    //текст кнопки //
    startButton.innerText = "START";
    //помещаем кнопку в блок startBlock//
    startBlock.appendChild(startButton);
    body.appendChild(startBlock);
}

// Функуия создания игрового поля
function sozdanieGamePole() {
  gameSpace = document.createElement("div");
    // добавляем тегу div => id="game-space"
  gameSpace.id = "game-space";
    // помещаем блок игрового поля в body
  body.appendChild(gameSpace);
}
//создаем  блок жизней  //
function sozdanieLifesBlock() {
    //создаем блок жизней lifes//
    lifes = document.createElement("div");
    //создаем id lifes//
    lifes.id = "lifes";
    //обьявляем переменную и присваиваем ей значение//
    var tekusheeKolichZhizney = 0;
    //создаем цикл (условие)//
    while (tekusheeKolichZhizney < kolichZhiney) {
      //создаем span//
      var lifesSpan = document.createElement("span");
      //помещаем span в блок lifes//
      lifes.appendChild(lifesSpan);
      //создаем условеи увеличения создания кол-ва жизней//
      tekusheeKolichZhizney = tekusheeKolichZhizney + 1;
    }
    //помещаем блок lifes в блок igraPole //
    gameSpace.appendChild(lifes);
  }

  //создание блока топлива//
  function sozdanieFuelBlock() {
  fuel = document.createElement("div");
  fuel.id = "fuel";
  //обьявляем переменную и присваиваем ей значение//
  var tekusheeKolichTopliva = 0;
  var kolichTopliva = 5;
  //создаем цикл (условие)//
  while(tekusheeKolichTopliva < kolichTopliva) {
    //создаем span//
    var fuelSpan = document.createElement("span");
    //помещаем span в блок lifes//
    fuel.appendChild(fuelSpan);
    //создаем условеи увеличения создания кол-ва жизней//
    tekusheeKolichTopliva = tekusheeKolichTopliva + 1;
  }
  //помещаем блок lifes в блок igraPole //
  gameSpace.appendChild(fuel);
}
  //создаем блок очков//
function sozdaemOchkiBlock() {
    //отображаем stars в документе//
    scores = document.createElement("div");
    //присваиваем id//
    scores.id = "scores";
    //отображаем количество очков//
    scores.innerText = 0;
    //помещаем блок очков в graPole//
    gameSpace.appendChild(scores);
  }
  // //создание блока космического корабля//
  // starShip = document.createElement("star-ship");
  // starShip.id = "star-ship";
  // gameSpace.appendChild(starShip);


//gameSpace = document.createElement("game-space");
//gameSpace.id = "game-space";

//
function makingShipBlock() {
  //создаем див стартового блока
  spaceShip = document.createElement("div");
  //присваиваем ему ид
  spaceShip.id = "star-ship";
  //создаем кнопку старта
 gameSpace.appendChild(spaceShip);
  //помещаем блок старта на игровое поле
}
function makingAsteroidsBlock() {
  //создаем див стартового блока
  asteroids = document.createElement("div");
  //присваиваем ему ид
  asteroids.className = "asteroids"
  //создаем кнопку старта
 gameSpace.appendChild(asteroids);
  //помещаем блок старта на игровое поле
}

function makingPlanetsBlock() {
  //создаем див стартового блока
  planets = document.createElement("div");
  //присваиваем ему ид
  planets.className = "planets";
  //создаем кнопку старта
 gameSpace.appendChild(planets);
  //помещаем блок старта на игровое поле
}

function makingStarsBlock() {
  //создаем див стартового блока
  stars = document.createElement("div");
  //присваиваем ему ид
  stars.className = "stars";
  //создаем кнопку старта
 gameSpace.appendChild(stars);
  //помещаем блок старта на игровое поле
} 