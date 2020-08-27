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