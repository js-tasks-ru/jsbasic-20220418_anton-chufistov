/**
 * Эту функцию трогать не нужно
 */
function print(text) {
  console.log(text);
}

/**
 * Эту функцию нужно поменять так,
 * чтобы функция sayHello работала корректно
 */
function isValid(name) {
  // Проверка userName в функции sayHello на соответсвие следующим условиям:
  // имя не пустое, без пробелов, минимум 4 символа.

  if (name === null || name.search(" ") > -1 || name.length < 4) {
    return false;
  } else {
    return true;
  }
}

function sayHello() {
  let userName = prompt('Введите ваше имя');

  if (isValid(userName)) {
    print(`Welcome back, ${userName}!`);
  } else {
    print('Некорректное имя');
  }
}
