/* 
! arrow function
* arrow function adalah alternative pembuatan function yg lebih sederhana dari function biasanya
* namun terdapat limitasi dan juga tidak bisa digunakan di semua situasi
* dinamakan arrow function karena menggunakan => 
* berikut contoh beberapa kekurangan arrow function
* - tidak memiliki fitur argument object
* - tidak bisa menggunakan function generator
* - tidak bisa mengakses this
* - tidak bisa mengakses super
*/

const sayHello = (name) => {
  const say = `hello ${name}`;
  console.info(say);
};

sayHello("lembu dah beli dah belah");

// ! arrow function tanpa block

const sayName = (name) => console.info(`hello ${name}`);
sayName("jembut");

// ! arrow function value

const sum = (first, second) => first + second;

console.info(sum(1, 2));

// ! arrow sebagai parameter

function giveName(callback) {
  callback("kuda");
}

giveName((name) => console.info(`hello ${name}`));
