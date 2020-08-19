// Операторы сравнения

// математическое сравнение
// >
// <
// >=
// <=
// === строгое сравнение
// == нестрогое сравнение
// != не равно
// !== строгое не равно
// Результат сравнения имеет логический тип !!!

3 === "3"; // false
3 === Number("3"); // true
3 == "3"; // true
// 3 == "3" -> 3 === 3  // true

3 > 5; // false
10 < 12; // true

10 !== 10; // false
3 != "3"; // false

"Сонный" > "Cон"; // true
"Я" > "А"; // true

1 == true; // 1 === 1 -> true
1 === true; // false

Boolean(0) === +""; // false === 0 --> false
Boolean(0) ==
  +"" - // false == 0   -> false === false --> false
    5 >
    true; // -5 > 1 --> false
true > false; // true

null == undefined; // true
null === undefined; // false

"ананас" > "яблоко"; // false

5 !== "5";

!true !== !0; // false !== true --> true
// Приведение типов
// к числу
("12"); // -> 12
Number("12"); // -> 12
const num = +"строка"; // NaN
// к логическому типу
!!10; // true
!!""; // false
Boolean(0); // false

// к строке
let number = 10;
number.toString(); // "10"

let name = "nikita";
name = name
  .toUpperCase()(
    // NIKITA

    "b" + "a" + +"a" + "a"
  )
  .toLowerCase(); // banana

// логические операторы
// И              &&
// ИЛИ            ||
// НЕ (отрицвние) !

// true && true && true -> true
if (true && true && true) {
  alert("Hello"); // выполнится
}

// true && true && false -> false
if (true && true && false) {
  alert("Hello"); // не выполнится
}

// false && true -> false
if (false && true) {
  alert("Hello"); // не выполнится
}

// true || false || false -> true
if (true || false || false) {
  alert("Hello"); // выполнится
}

//  false || false -> false
if (false || false) {
  alert("Hello"); // не выполнится
}
let num = 10;
num > 5 && alert("Ваше число больше 5"); // true

const name = prompt("Имя");
const age = prompt("Возраст");

// if(name && age) {
//     alert("вы ввели все значения праавильно !")
// }

name && age && alert("вы ввели все значения праавильно !");
