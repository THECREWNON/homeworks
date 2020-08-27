const correctLogin = "admin";
const correctPassword = "123456";

let a = prompt('write your login')
let b = prompt('write your password')

if (a === correctLogin || b === correctPassword ) {

	alert('Welcome')
}
else {
	alert('Go away stranger')
}