"use strict";



function test() {
  hello();
  gueesTheNumber();
  password();
  calculator();
}

function hello() {
  const name = prompt("Введите ваше имя:");
  const age = prompt("Введите ваш возраст:");

  alert(`Привет, ${name}! Твой возраст - ${age} лет. `);
  console.log(`Привет, ${name}! Твой возраст - ${age} лет.`);

  if (age < 18) {
    alert("Вы несовершеннолетний");
  } else {
    alert("Вы совершеннолетний");
  }
}

function gueesTheNumber() {
  const number = Math.trunc(Math.random() * 10);
  const guees = prompt("Угадай число от 0 до 10");

  if (guees === number) {
    alert("Поздравляем! Вы угадали число!");
  } else {
    if (guees <= 5) {
      alert("Введенное число меньше или ровно 5.");
    } else {
      alert("Введенное число больше 5.");
    }
  }
}

function password() {
  const access = 12345;
  const pwd = prompt("Введите пароль:");

  if (pwd) {
    if (pwd === access) {
      alert("Доступ разрешен.");
    } else {
      alert("Доступ запрещен.");
    }
  }
}

function calculator() {
  const number1 = Number(prompt("Введите первое число:"));
  const number2 = Number(prompt("Введите второе число:"));
  const operator = prompt("Введите операцию (+, -, *, /):");

  switch (operator) {
    case "+":
      alert(number1 + number2);
      return;
    case "-":
      alert(number1 - number2);
      return;
    case "*":
      alert(number1 * number2);
      return;
    case "/":
      if (number2 === 0) {
        alert("Нельзя делить на ноль.");
        return;
      }
      alert(number1 / number2);
      return;
    default:
      alert("Неверный оператор");
  }
}

function cycles() {
  for (let i = 1; i < 11; i++) {
    console.log(i);
  }
  let i = 10;
  while (i !== 0) {
    console.log(i);
    i--;
  }
}

function arrays(lections, practices) {
  lections.push("Операции сложения");
  practices.push("Практика 4");

  lections.forEach((lection) => {
    console.log(lection);
  });

  practices.forEach((practice) => {
    console.log(practice);
  });
}

function print(numbers) {
  console.log(numbers.join(", "));
}

function printO(lections) {
  lections.forEach((lection) => {
    if (lection.toLocaleLowerCase().startsWith("о")) {
      console.log(lection);
    }
  });
}

function test2() {
  cycles();
  let lections = ["Тема 1", "Тема 2", "Тема 3"];
  let practices = ["Практика 1", "Практика 2", "Практика 3"];
  arrays(lections, practices);
  const numbers = [1, 2, 3, 4, 5];
  print(numbers);
  printO(lections);
}



