// условные операторы
// if
// else if
// else

// блок if-else

// тернарный оператор

// условие
//  ? вариант, если условие правдиво
//  : вариант, если условие ложно
/*
if ((<условие>)) {
  // код, который выполнится, если условие ПРАВДИВО
}

if ((<условие>)) {
  // код, который выполнится, если условие ПРАВДИВО
} else {
  // код, который выполнится, если условие ЛОЖНО
}


if (<условие>) {
  // код, который выполнится, если условие ПРАВДИВО
} else if (<еще условие />) {

} else {
  // код, который выполнится, если условие ЛОЖНО
}
*/

// let mark = Number(prompt("Введите вашу оценку"));
// if (mark === 5) {
//   alert("Good boy!");
// } else if (mark === 4) {
//   alert("OK");
// } else if (mark < 4) {
//   alert("Bad");
// } else {
//   alert("Enter valid mark");
// }

// if (mark) {
//   console.log('test')
//   if (mark === 5) {
//     alert("Good boy!");
//   } else if (mark === 4) {
//     alert("OK");
//   } else if (mark < 4) {
//     alert("Bad");
//   } else {
//     alert("Enter valid mark");
//   }
// }

// const userAnswer = confirm("Are you sure?");
// if (userAnswer) {
//   if (confirm("Точно уверен?")) {
//     alert("Welcome");
//   } else {
//     alert("Go away");
//   }
// } else {
//   alert("Bye!");
// }

// тернарный оператор
// условие
//  ? вариант, если условие правдиво
//  : вариант, если условие ложно

// let message;
// userAnswer
//   ? confirm("Точно уверен?")
//     ? (message = "Welcome!")
//     : (message = "Go away!")
//   : (message = "Bye!");

// alert("Message");

// Используя конструкцию if..else, напишите код, который будет спрашивать:
// „Какое «официальное» название JavaScript?“

// Если пользователь вводит «ECMAScript», то показать: «Верно!»,
// в противном случае – отобразить: «Не знаете? ECMAScript!»

// const userAnswer = prompt("Какое «официальное» название JavaScript?");

// if (userAnswer === "ECMAScript") {
//   alert("Верно");
// } else {
//   alert("Не знаете? ECMAScript!");
// }

// ОПЕРАТОР И (AND) &&
// &&

// let a = true;
// let b = false;
// let с = true;

// if (a && b && c) {
//   // false -> единственноe false (ищет фолс)
//   alert("значения верны в И"); // not shown
// }

// ОПЕРАТОР ИЛИ (OR) ||
// ||

// let x = false;
// let y = true;

// if (x && y ) {
//   alert('все значения верны')
// } else {
//   alert("одно из значений не верно"); // shown
// }

// ОПЕРАТОР НЕ (NOT) !
// !

// Приводит значение к противополодному Boolean

// !true -> false
// !0 -> true
// !"" -> true
// !"not_empty_string" -> false

// const correctLogin = "admin";
// const correctPassword = "123456";

let num = +prompt("Number");
let message = "Ваше число больше 5";

if (num > 5) {
  console.log(message)
}

num > 5 ? console.log(message) : null