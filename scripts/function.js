/* 
! function
* function adalah block program yg akan berjalan saat kita panggil
* untuk membuat function kita bisa menggunakan kata kunci function , lalu diikuti dengan nama function , kurung () , dan diakhiri dengan block kurung {}
* kita juga bisa memanggil function dengan menggunakan nama function lalu diikuti dengan kurung ()
* di bahasa lain function disebut method
*/

function sayHelloWorld(firstName, lastName) {
  document.writeln(`<p> hello world ${firstName} ${lastName}`);
}

sayHelloWorld("perrel", "brown");

/* 
! function parameter
* kita bisa mengirim informasi ke function yg ingin kita panggil 
* untuk melakukan hal tsb kita perlu menambahkan parameter / argument di function yg sudah kita buat
* parameter ditempatkan di dalam kurung () di deklarasi method
* parameter bisa lebih dari satu , jika lebih dari 1 harus di pisah menggunakan tanda koma
*/

/* 
! Function Return Value
* • Secara default, function itu tidak menghasilkan value apapun, namun jika kita ingin, kita bisa
* membuat sebuah function mengembalikan value
* • Agar function bisa menghasilkan value, kita bisa menggunakan kata kunci return di dalam function
* nya.
* • Dan di dalam block function, untuk menghasilkan nilai tersebut, kita harus menggunakan kata
* kunci return, lalu diikuti dengan data yang ingin kita hasilkan.
* • Function hanya bisa mengembalikan satu data, jika kita ingin mengembalikan beberapa data
* sekaligus, kita bisa menggunakan Array sebagai return value nya 
*/

function sayHello(firstName, lastName) {
  const say = `hello ${firstName} ${lastName}`;
  return say;
}

const result = sayHello("perrel", "brown");
document.writeln(`<p>${result}`);

function finalExam(value) {
  if (value > 90) {
    return "A";
  } else if (value > 80) {
    return "B";
  } else if (value > 75) {
    return "c";
  } else if (value > 70) {
    return "c-";
  } else {
    return " u stoopid as fuck";
  }
}

const finalValue = finalExam(100);
document.writeln(`<p>${finalValue}`);

function isContains(array, searchValue) {
  for (element of array) {
    if (element === searchValue) {
      return true;
    }
  }
  return false;
}

const array = [1.32, 12, 10, 9, 6, 5, 7];
const search = 8;
const found = isContains(array, search);
document.writeln(`<p>${found}`);

/* 
! optional parameter
* secara default optional 
*/

const helloTod = (firtsName, lastName) => {
  console.info(firtsName);
  console.info(lastName);
};

helloTod("perrel");

/* 
! default parameter
*/

const register = (name, gender = "unknown") => {
  console.info(name);
  console.info(gender);
};

register("amba", "male");
register("fuad");
register("rusdi", undefined);

/* 
! Rest Parameter / variable argument
* • Rest Parameter adalah fitur dimana kita bisa mengirim data sebanyak-banyak nya pada satu parameter, dan secara otomatis akan di konversi menjadi Array
* • Untuk membuat rest parameter, ada ketentuannya Rest parameter hanya boleh ada satu di function, tidak boleh lebih dari satu
* Rest parameter hanya boleh berada di posisi paling akhir, tidak boleh di depan atau di tengah, kecuali memang cuma ada 1 parameter
* • Di bahasa pemrograman lain, ada juga yang bilang ini adalah variable argument
*/

const sum = (name, ...data) => {
  let total = 0;
  for (const item of data) {
    total += item;
  }
  document.writeln(`<p> total ${name} is ${total}`);
};

sum("orange", 1, 2, 3, 4, 5, 6);

/* 
! spread syntax
* kadang kita terlanjur memiliki data berupa array
* tapi untung nya lita juga bisa megirim array ke rest parameter
* kita bisa gunakan ... diikuti dengan array nya ketika memanggil fnction
* fitur ini dinamakan spread syntax
*/

sum("orange", ...[1, 2, 3, 4, 5, 6]);

/* 
! arguments object
* sebelum ada fitur rest parameter ada fitur arguments object 
* kita bisa mengambil semua parameter dalam bentuk array dengan menggunakan object bernama argument
* argument secara automatis bisa digunakan di function 
* namun perlu diingat bahwa js lebih disarankan menggunakan rest param
*/

/* 
! function sebagai value
*/

function sayHello2(name) {
  console.info(`hello ${name}`);
}

const say = sayHello2;

say("budi");

function giveMeName(callback) {
  callback("budi");
}

giveMeName(sayHello2);
giveMeName(say);

/* 
! anonymous function
* function tanpa nama bisa diisi di parameter / variable sebagai value
*/

const say2 = function (name) {
  document.writeln(`<p> hello ${name}`);
};

say2("amba");

giveMeName(function (name) {
  document.writeln(`<p> hi ${name}`);
});

/* 
! function dalam function / inner function
* inner function hanya dapat diakses ditempat kita membuat function nya tidak bisa diakses diluar function nya
*/

function outer() {
  function inner() {
    console.info("inner");
  }
  inner();
}

outer();

/* 
! Scope
* Scope merupakan area akses sebuah data Ada dua jenis scope, global scope dan local scope.
* Setiap kita membuat function, maka kita akan membuat local scope untuk function tersebut
* Data di global scope bisa diakses dari local scope, namun data di local scope hanya bisa di akses di local scope tersebut atau di scope local dibawahnya (dalam kasus function dalam function)
*/

// ! global scope

let counter = 0;

function hitMe() {
  counter++;
}

hitMe();
hitMe();

document.writeln("kontol " + counter);

// local scope

function first() {
  const firstVariable = "first";
}

// ! nested function scope
function second() {
  let secondVariable = "second";

  function third() {
    console.info(secondVariable);
  }

  third();
}

first();
second();

/* 
! recursive function
* adalah kemampuan function memanggil diri dia sendiri
* kadang ada banyak problem , yg lebih mudah diselesaikan menggunakanb recursive function seperti contohnya faktorial
*/

function factorialRecursive(value) {
  if (value === 1) {
    return 1;
  } else {
    return value * factorialRecursive(value - 1);
  }
}

document.write(`<p> recursive : ${factorialRecursive(10)}`);

/* 
! function generator
* function generator adalah function yg digunakan untuk membuat data generator
* generator adalah data yg bisa di iterasi seperti array
* untuk membuat function generator kita perlu menggunakan tanda bintang (*) setelah kata function
* dan untuk mengembalikan data di tiap iterasi, kita bisa gunakan kata kunci yield diikuti data nya 
*/

function* createName() {
  yield "perrel";
  yield "brown";
}

console.info(createName());

const names = createName();
for (name of names) {
  console.info(name);
}

function* buatGanjil(value) {
  for (i = 1; i <= value; i++) {
    if (i % 2 === 1) {
      yield i;
    }
  }
}

const numbers = buatGanjil(100);
for (number of numbers) {
  console.info(number);
}

/* 
! lazy evaluation
* generator itu bersifat lazy
* jadi artinya jika data kita belum diambil dari generator, maka yield selanjutnya tidak akan dieksekusi
*/
