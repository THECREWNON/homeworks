s// 1  
let test1 = '3';
let test2 = '3';

if (test1 != test2) {
    alert('верно');
} else {
   alert('неверно'); // <---
}

// 2
if (0 == '') {
    alert('верно'); // <---
} else {
    alert('неверно');
}

// 3
if (0 == '0') {
    alert('верно'); 
} else {
    alert('неверно'); // <---
}

// 4
let test1 = 3;
let test2 = '3';
    
if (test1 !== test2) {
    alert('верно'); // <---
} else {
    alert('неверно');
}

//второе задание

let a = prompt('write a number')
let b = prompt('write a number')
if (a < b) {
	alert('B bigger than A')
}
else {
	alert('A bigger than B')

//третье задание
let x = 5;
let y = 6;
alert = (x && y ) ? 'все значения верны' : "одно из значений не верно";

