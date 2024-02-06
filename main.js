const input = require('sync-input');

const name = input("Enter your name: > ");
const surname = input("Enter your surname: > ");
const message = input("Enter your message: > ");
const count = Number(input("Enter the number of repeats: > "));

for (let i = 0; i < count; i++) {
	console.log(`This is ${name} ${surname} and ${message}`);
}