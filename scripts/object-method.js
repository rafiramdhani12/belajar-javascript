/* 
! object method
* pada tipe data object kita sudah membahas tentang property di object
* karena sebenarnya functionya jg merupakan salah 1 tipe data , jadi function pun sebenarnya bisa ditambaahkan sebagai property di object
* cara pembuatanya pun sama dengan function sebagai value
* function di object kadang disebut juga object method
*/

function sayHello(name) {
  alert(`hello ${name}`);
}

const person = {
  name: "budi",
  sayHello: sayHello,
};

person.sayHello("amba");

//

const person2 = {
  nama: "fuad",
  sayHello: function (name) {
    alert(`hello ${name}`);
  },
};

person2.sayHello("rusdi");

// ! ketika sudah terlanjur membuat object

const person3 = {
  name: "budi",
};

person3.sayHello = function (name) {
  alert(`hello ${name}`);
};

person3.sayHello("budi");
