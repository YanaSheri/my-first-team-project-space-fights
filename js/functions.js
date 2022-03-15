/*--------------------------------------------------------
Создание блоков
---------------------------------------------------------*/
// Функция создание блока старта игры//
function sozdanieStartBlock() {
    startBlock = document.createElement("div");
    // присваиваем id
    startBlock.id = "game-start";
    // создаем кнопку "Играть"//
    startButton = document.createElement("button");
    // присваиваем id
    startButton.id = "start-button";
    // текст кнопки 
    startButton.innerText = "START";
    // помещаем кнопку в блок startBlock//
    startBlock.appendChild(startButton);
    // помещаем блок старта игры в body
    body.appendChild(startBlock);
} // - the end of function sozdanieStartBlock()

// ==========================================================

// Функция создания игрового поля
function sozdanieGamePole() {
  gameSpace = document.createElement("div");
    // добавляем тегу div => id="game-space"
  gameSpace.id = "game-space";
    // помещаем блок игрового поля в body
  body.appendChild(gameSpace);
} // - the end of function sozdanieGamePole()

/* ==========================================================
      звуковое сопровождение
// ======================================================*/
//функция создания музыки 
function soundClick() {
  var audio = new Audio();
  audio.src = "sound/fon.mp3";
  audio.autoplay = true;

}

function fire() {
  var fire = new Audio('sound/fire.mp3');
  fire.play();
}

function exp() {
  var exp = new Audio('sound/exp.mp3');
  exp.play();
}

function pointsPlus() {
  var bonus = new Audio('sound/bonus.mp3');
  bonus.play();
}

// ==========================================================

//создаем блок жизней
function makingLifesBlock() {
  //создаем див с жизнями
  lifes = document.createElement("div");
  //присваеваем ид
  lifes.id = "lifes";
  //текущее количество жизней
  var currentlifesQuant = 0;
  //цикл создания жизней
  while(currentlifesQuant < lifesQuant) {
  //создаем одну жизнь
  life = document.createElement("span");
  //добавляем ее в блок жизней
  lifes.appendChild(life);
  /*увеличиваем текущее количество жизней до 3
  (переменная с необходимым количеством жизней
   в файле с переменными)*/
  currentlifesQuant = currentlifesQuant + 1;
  }
//добавляем блок с жизнями на игровое поле
gameSpace.appendChild(lifes);
}// - the end of function makingLifesBlock()

// ==========================================================


// Функция создания блока топлива
function sozdanieFuelBlock() {
  // создаем div в переменной fuel
  fuel = document.createElement("div");
  // присваиваем id
  fuel.id = "fuel";
  // помещаем блок lifes в блок igraPole 
  gameSpace.appendChild(fuel);
} // - the end of function sozdanieFuelBlock()

// ==========================================================

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
  } // - the end of function sozdaemOchkiBlock()



 // ==========================================================

// Функция создания уровня топлива
var fuelBlock = document.createElement("div");
// присваиваем id
fuelBlock.id = "fuel";
// Функция создания ТаймерБлока
function sozdanieTimerBlock() {
  // сoздаем заголовок h2 - "Время" 
  var h3 = document.createElement("h3");
  h3.innerText = "FUEL LEVEL:(%) ";
  // в таймерБлок добавляем тег span
  timerBlock = document.createElement("span");
  // прописываем timerBlock id 
  timerBlock.id = "timer";
  // устанавливаем знечение времени
  timerBlock.innerText = "30";
  // цвет текста
  h3.style.color = "green";
  // в h2 добавляем span
  h3.appendChild(timerBlock);
  // добавляем в инфоюблок заголововок h2
  fuelBlock.appendChild(h3);
  // помещаем fuelBlock в игровое поле
  gameSpace.appendChild(fuelBlock);
} // - the end of function sozdanieTimerBlock()
  
// ==========================================================

// Создаем блок корабля
function makingShipBlock() {
  //создаем див стартового блока
  var spaceShip = document.createElement("div");
  //присваиваем ему ид
  spaceShip.id = "star-ship";
  //создаем кнопку старта
  //помещаем блок старта на игровое поле
  gameSpace.appendChild(spaceShip);
  //выбираем корабль
  spaceShip = document.querySelector("#star-ship");
  // Добавляю событие нажатия клавиши
  document.addEventListener('keydown', function(event) {
  // создаем управление кораблем (событие нажатия на клавиши)
    switch(event.keyCode){
      // Нажали  влево(а)
      case 39:
        // если координаты корабля слева не превышают 525 слева(доходит до правого края игрового поля)
        if (spaceShip.offsetLeft <= 525) {
          // двигаем гораблю на 10 пикселей вправо
          spaceShip.style.left = spaceShip.offsetLeft + 20 + "px";
          // если, превышает, не двигаем.
        } else {
          spaceShip.style.left = spaceShip.offsetLeft + 0 + "px";
        }
        break;
      // Нажали вправо(d)
      case 37:
      // если координаты корабля слева больше или равно 1 слева(левій край поля) 
        if (spaceShip.offsetLeft >= 1) {
          // двигаем корабль
          spaceShip.style.left = spaceShip.offsetLeft - 20 + "px";
          // если меньше еденицы. не двигаем
        } else {
          spaceShip.style.left = spaceShip.offsetLeft - 0 + "px";
        }
        break;
      // Нажали пробел
      case 32:
      // вызываем функцию создания пули
      makingBullets();
      fire();
        break;
    } // - the end of switch
  }); // - the end of ('keydown', function(event)
} // - the end of function makingShipBlock()

// ==========================================================

// Функция создания блока пуль
function makingBullets() {
  // создаем див пуль и объявляем его переменной
  let bullet = document.createElement("div");
  // выбираем корабль
  spaceShip = document.querySelector("#star-ship")
  // присваиваем класс
  bullet.className = "bullet";
  // задаем координаты появления пули
  bullet.style.left = spaceShip.offsetLeft + 29 + "px";
  // помещаем блок пуль в игровое поле
  gameSpace.appendChild(bullet);
  // вызываем функцию перемещения пули
  bulletMove(bullet);
} // - the end of function makingBullets()

// ==========================================================

// Функция перемещения пули
function bulletMove(bullet) {
  //таймер движения пули
  timerId = setInterval (function() {
    //пуля двигается вверх на 30 рх каждые 0,2 сек.
    bullet.style.top = bullet.offsetTop - 30 + "px";
    //если пуля достигает верхнего края поля
    if (bullet.offsetTop < 0) {
      //пуля удаляется
      bullet.remove();
      //очищаем таймер движения пули
      //clearInterval(timerId);
    } // - the end of if
  }, 10); // - the end of timerId 
  // вызываем функцию столкновения пули с астероидом
 isShot(bullet, timerId);
} // - the end of function bulletMove(bullet)

// ==========================================================

// Функция столкновения пули с астероидом
function isShot(bullet) {
  //console.log("test");
  // месторасположение левой стороны пули
  leftB = bullet.offsetLeft;
  // месторасположение правой стороны пули
  rightB = bullet.offsetLeft + bullet.offsetWidth;
  // выбираем астероид
  let enemy = document.querySelector(".enemy");
  // если есть астероиды
  if (enemy != null) {
    // левая сторона астероида
    leftE = enemy.offsetLeft;
    // правая сторона астероида
    rightE = enemy.offsetLeft + enemy.offsetWidth;
    // верхняя часть пули
    topB = bullet.offsetTop;
    //нижняя часть астероида
    bottomE = enemy.offsetTop + enemy.offsetHeight; 
    // вывести в консоль текст
    console.log("rightB");
    // елси координаты пули пересекаются с координатами врага (астероида)
    if (leftB >= leftE && leftB <= rightE && topB >= bottomE) {
      // навешиваем на врага анимацию взрыва
      enemy.className = 'expl';
      //clearInterval(enemy.dataset.timer); - ????????????????????????????????????????
      // выбираем блок очков
      scores = document.querySelector("#scores");
      // очки увеличиваем на 1
      points = points + 1;
      // очки помщаем в текст блока очков
      scores.innerText = points;
      //clearInterval(enemy.dataset.timer); - ????????????????????????????????????????
      // врага выбрасываем с поля вниз    - так пойдет, не совсем понимаю что здесь происходит????????????
      enemy.style.top = bottomE - 40 + "px";
      // 
      enemy.style.left = leftE + "px"; // - эта строчка мне не понятна, не знаю как прокомментировать!!!!!
      // очищаем интервал таймера врага
      clearInterval(enemy.dataset.timer);
      // функция удаления и создания врага (астероида) через 500мс
      setTimeout(function() {
        // удаляем врага
        enemy.remove(); 
        // создаем врага
        createEnemy();
        // очищаем интервал таймера врага
        clearInterval(timer);
      }, 500);// - the end of setTimeout(function()
    }// - the end of if
  }// - the end of if (enemy != null)
}// - the end of function isShot(bullet)

// ==========================================================

// Функция столкновения астероида с кораблем
function collision() {
  // выбираем врага по селектору
  enemy = document.querySelector(".enemy");
  // выбираем корабль по селектору
  spaceShip = document.querySelector("#star-ship");
  // если координаты врага (астероида) пересекаются с координатами корабля
  if (enemy.offsetLeft + enemy.offsetWidth >= spaceShip.offsetLeft && 
  enemy.offsetLeft <= spaceShip.offsetLeft + spaceShip.offsetWidth && 
  enemy.offsetTop >= spaceShip.offsetTop) {
    console.log("boom");
    // навешиваем на врага анимацию взрыва
    enemy.className = 'expl';
    //clearInterval(enemy.dataset.timer); - ??????????????????????????????????????
    // врага выбрасываем с поля вниз
    enemy.style.top = spaceShip.offsetTop - 20 + "px";
    //
    enemy.style.left = spaceShip.offsetLeft + "px";
    // очищаем интервал таймера врага
    clearInterval(enemy.dataset.timer);
    // функция удаления и создания врага (астероида) через 500мс
    setTimeout(function() {
      // удаляем врага
      enemy.remove(); 
      // создаем врага
      createEnemy();

    }, 500);// - the end of setTimeout(function()
    // Функция уменьшения жизней
    wasted();
    exp();
    // если количество жизней равно 0
    if (lifesQuant == 0) {
      console.log("жизней нет!");

      udalenieFuelBlock();
      // вызываем функцию окончания игры
      konecIgry();
    } // - the end of if
  }// - the end of if ><=
}//конец collision

// ==========================================================
// Функция уменьшения жизней
function wasted() {
  // количество жизней уменьшаем на 1
  lifesQuant = lifesQuant - 1;
  // удаляем блок жизней
  removeLifes();
  // создаем блок жизней
  makingLifesBlock();
  // очищаем интервал создания врага
  clearInterval(createEnemy);
}
// ==========================================================

// Функция создания врага (астероида)
function createEnemy() {
  // создаем блок div с переменной
  var enemy = document.createElement("div");
  // присваиваем классу врагов имя enemy
  enemy.className = "enemy";
  //случайное месторасположение 
  setTimeout(function() {
    // отступ сверху такой как в стилях
    enemy.style.top = enemy.offsetTop + "px";
    // отступ слева рандомный, не больше 550 пикселей
    enemy.style.left = random(550) + "px";
  }, 200);  // - the end of setTimeout
  // помещаем врага в игровое поле
  gameSpace.appendChild(enemy);
  // создаем переменную и в ней функцию интервала падения врага (астероида)
  var timerEnemy = setInterval(function() {
    // каждые 100 мс опускать астероид на 200 пикселей вниз
    enemy.style.top = enemy.offsetTop + 200 + "px";
    //если астероид выходит за приеделы игрового поля
    if (enemy.offsetTop > 600) {
      // удалить врага
      enemy.remove();
      // очистить интервал таймера врага
      clearInterval(timerEnemy);
      // создать врага
      createEnemy();
      }
    // если количество жизней равно 0
    if (lifesQuant == 0) {
            // очищаем интервал таймера врага
      clearInterval(timerEnemy);
    }
    // если закончилось горючее
    if (timerBlock.innerText == 0) {
      // очищаем интервал таймера врага
      clearInterval(timerEnemy);
    }
    // вызываем функцию проверки столкновения астероида с кораблем
    collision();
  }, 100)
  // ТУТ Я НЕ ЗНАЮ КАК ПРАВИЛЬНО ПРОКОММЕНТИРОВАТЬ!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  enemy.dataset.timer = timerEnemy;
} // - the end of function createEnemy()


 

// ==========================================================

// Функция создания блока звезд
function makingStarsBlock() {
  //создаем див стартового блока
  stars = document.createElement("div");
  //присваиваем ему ид
  stars.className = "stars";
  //помещаем блок старта на игровое поле
  gameSpace.appendChild(stars);
}  // - the end of function makingStarsBlock()

// ==========================================================

 //создаем функцию случайного числа
function random(max) {
  //
  var randNum = 1 + Math.random () * (max + 1);
  //
  randNum = Math.floor(randNum);
  //
  return randNum;
}

// ==========================================================

// // ЭТОТ БЛОК НУЖЕН???????????????????????????????????????????????????????????

function randomSpeed(min, max) {
  var min = 1 + Math.random () * (min + 1);
  min = Math.floor(min);
  return min;
  var max = 1 + Math.random () * (max + 1);
  max = Math.floor(max);
  return (max)
}

// ==========================================================

//функция столкновения планет (марса) с кораблем
function collisionPlanet() {
  // выбираем планету по селектору
  let planets = document.querySelector(".planets");
  // выбираем корабль по селектору
  let spaceShip = document.querySelector("#star-ship");
  // если координаты врага (астероида) пересекаются с координатами корабля
  if (planets.offsetLeft + planets.offsetWidth >= spaceShip.offsetLeft &&
  planets.offsetLeft < spaceShip.offsetLeft + spaceShip.offsetWidth &&
  planets.offsetTop >= spaceShip.offsetTop) {
    console.log("bang-mars");
    // присваиваем классу планет анимацию bonus
    planets.className = 'bonus';
    //
    planets.style.top = spaceShip.offsetTop - 10 + "px"; // - ???????????????????????
    //
    planets.style.left = spaceShip.offsetLeft + "px"; // - ??????????????????????????
    // очищаем интервал таймера планет (марса)
    clearInterval(planets.dataset.timer);
    // таймер удаления и создания марсов
    setTimeout(function() {
      // удаляем марсы
      planets.remove(); 
      // добавляем 10 очков
      points = points + 10;
      // очки помещаем в текст блока очков
      scores.innerText = points; 
      // создаем новые планеты (марсы)
      makingPlanets();
    }, 500);
    pointsPlanets();
  } // - the end of if
}//конец collision

// ==========================================================

// Функция создания блока планет
function makingPlanets() {
  //создаем блок div
  var planets = document.createElement("div");
  //присваиваем ему class
  planets.className = "planets"
  
  //  var direction = random(2); - ЭТОТ БЛОК НУЖЕН???????????????????????????
  // if (direction == 1) {
  // planets.className = "saturn" 
  // }else{
  // planets.className = "mars"
  // }

  // случайное месторасположение 
  setTimeout(function() {
    //
    planets.style.top = planets.offsetTop + "px";
    //
    planets.style.left = random(550) + "px";
  }, 10);
   //помещаем блок старта на игровое поле
  gameSpace.appendChild(planets);
  //setTimeout(function() {
    //падение 
  var timerPlanets = setInterval(function() {
  //  if (planets.className == "saturn") {
  // planets.style.top = planets.offsetTop + 80 + "px"; 
  // }else{
    planets.style.top = planets.offsetTop + 250 + "px";
    // }// - the end of if/else
        //если планета выходит за приеделы игрового поля
    if (planets.offsetTop > 600) {
      planets.remove();
      clearInterval(timerPlanets);
      makingPlanets();
     
      }

    if (lifesQuant == 0) {
      planets.remove();
      clearInterval(timerPlanets);
    }

    if (timerBlock.innerText == 0) {
      planets.remove();
      clearInterval(timerPlanets);
          
    }
    collisionPlanet();
  }, 100)// - the end of setInterval

planets.dataset.timer = timerPlanets;

//}, 100);
 }// - the end of function makingPlanets()

// ==========================================================

//функция столкновения САТУРНА с кораблем
function collisionSaturn() {
  // выбираем сатурн по селектору
  saturn = document.querySelector(".saturn");
  // выбираем корабль по селектору
  spaceShip = document.querySelector("#star-ship");
  //
  if (saturn.offsetLeft + saturn.offsetWidth >= spaceShip.offsetLeft && saturn.offsetLeft < spaceShip.offsetLeft + spaceShip.offsetWidth && saturn.offsetTop >= spaceShip.offsetTop) {
    console.log("bang-saturn");
    // присваиваем классу сатурна анимацию bonus
    saturn.className = 'bonus';
    // верхнему отступу сатурна присваиваем положение верхнего отступа корабля минус 10 пикселей
    saturn.style.top = spaceShip.offsetTop - 10 + "px";
    // 
    saturn.style.left = spaceShip.offsetLeft + "px"; // - ????????????????????????????????????????????????
    // очищаем интервал таймера сатурна
    clearInterval(saturn.dataset.timer);
    // таймер удаления и создания сатурнов и +5 очков
    setTimeout(function() {
      // удалить сатурн
      saturn.remove(); 
      // добавить 5 очков
      makingSaturn();
    }, 500);
    pointsSaturn();
  } // - the end of if
} //конец collision

// ==========================================================

// Функция создания блока сатурна
function makingSaturn() {
  //создаем блок div
  var saturn = document.createElement("div");
  // присваиваем классу имя
  saturn.className = "saturn"
  //случайное месторасположение с интервалом 10 мс
  setTimeout(function() {
    // верхний отступ начальной точки сатурна взять со стилей
    saturn.style.top = saturn.offsetTop + "px";
    // левый отступ выбрать рандомно, в пределах 550 пикселей
    saturn.style.left = random(550) + "px";
  }, 10);
  // помещаем сатурн в игровое поле
  gameSpace.appendChild(saturn);
  // падение сатурна
  var timerSaturn = setInterval(function() {
    // опускать сатурн на 300 пикселей каждые 100 мс
    saturn.style.top = saturn.offsetTop + 300 + "px";
    //если сатурн выходит за приеделы игрового поля
    if (saturn.offsetTop > 600) {
      // удалить сатурн
      saturn.remove();
      // очистить интервал таймера сатурна
      clearInterval(timerSaturn);
      // создать сатурн
      makingSaturn();
    }
    // если закончились жизни
    if (lifesQuant == 0) {
      // удалить сатурн
      saturn.remove();
      // очистить интервал таймера сатурна
      clearInterval(timerSaturn);
    }
    // если закончилось топливо
    if (timerBlock.innerText == 0) {
      // удалить сатурн
      saturn.remove();
      // очистить интервал таймера сатурна
      clearInterval(timerSaturn);
    }
    // вызываем функцию столкновения сатурна с кораблем
    collisionSaturn();
  }, 100) // - the end of timerSaturn = setInterval
  // 
  saturn.dataset.timer = timerSaturn; // - НЕ ЗНАЮ ЧТО ПИСАТЬ!!!!!!!!!!!!!!!!!
} // - the end of makingSaturn()

// ==========================================================



// ==========================================================

// создание блока конец-игра//
function sozdanieKoniecIgra() {
  // создаем div блока окончания игры
  var div = document.createElement("div");
  // присваиваем ему id
  div.id = "konec_igra";
  // создаем заголовок h2
  var h2 = document.createElement("h2");
  // текст заголовка h2
  h2.innerText = "Игра Окончена!";
  // создаем заголовок h3
  var h3 = document.createElement("h3");
  // текст заголовка h3
  h3.innerText = "Молодец! У тебя: " + points + " очков";
  // создаем кнопку для начала новой игры
  var button = document.createElement("button");
  // присваиваем id
  button.id = "start-button";
  // текст кнопки
  button.innerText = "Сыграем ещё?";
  // перезагрузка страницы при клике на кнопку
  button.onclick = function () {
    location.href = location.href;
  }
  // помещаем h2 в блок div
  div.appendChild(h2);
  // помещаем h3 в блок div
  div.appendChild(h3);
  // помещаем кнопку  в блок div
  div.appendChild(button);
  // помещаем div в блок igraPole 
  body.appendChild(div);
} // - sozdanieKoniecIgra()

// ==========================================================
// ФУНКЦИИ УДАЛЕНИЯ
// ==========================================================

// удаление стартового блока 
function removeStartBlock() {
  startBlock.remove();
 }

// удаление блока жизней//
function udlenieOchkiBlock() {
  scores.remove();
}

// удаление таймера//
function udalenieFuelBlock() {
  fuelBlock.remove();
}


// удаление конец игра
function udalenieKonecIgra() {
  konec_igra.remove();
}

// удаление астероида -  не работает
function udalenieEnemy() {
  enemy.remove();
}

// удаление блока корабля - не работает
function udalenieStarShip() {
  spaceShip.remove()
}

// убираем жизни
 function removeLifes() {
  lifes.remove();
 }

// убираем жизни
 function removeLifes() {
  lifes.remove();
 }

// удаляем игрове поле
 function udalenieGameSpace() {
  gameSpace.remove();
}

function pointsPlanets() {

   points = points + 10;
   scores.innerText = points; 
   pointsPlus();

}//tnd of pointsPlus

function pointsSaturn() {

   points = points + 5;
   scores.innerText = points; 
   pointsPlus();

}//tnd of pointsPlus