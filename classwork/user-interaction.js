// false
// 0
// ""
// null
// NaN // not a number
// undefined

// ALERT
// const message = "Hello world!";

// console.log("Я код, который выполнился");
// alert(message);
// console.log("А я жду, пока закроется алерт");
// выводит сообщение на экран
// принимает только одно значение
// является БЛОКИРУЮЩЕЙ операцией

// PROMPT
// const age = 23;

// let age = prompt("Enter your age?"); // 23
// console.log(age);
let question = "Your Login ?";
let userLogin = prompt(question, "admin");
console.log("userLogin", userLogin);

// предназначен для получения данных у пользователя
// принимает 2 аргументы (сообщение(вопрос), значение по умолчанию)
// является БЛОКИРУЮЩЕЙ операцией
// возвращает строку
// при отмене возвращет в переменную null

// СONFIRM

const userResponse = confirm("Are you sure ?");
console.log("userResponse", userResponse);

// придназначен для получения ответа ДА или НЕТ
// принимает один аргумент, строку, которая является вопросом
// является БЛОКИРУЮЩЕЙ операцией
// возвращает true либо false

