/* 
! arrow function di object
* sebelum kita sudah bahas tentang arrow function
* arrow function juga bisa kita gunakan di sebagai object method
* namun perlu diketahui arrow function tidak bisa digunakan untuk mengakses arguments object, function generator , kata kunci this dan super
* jadi pastikan gunakan arrow function hanya memang ketika kita tidak butuh fitur fitur diatas
*/

const person = {
  name: "Eko",
  sayHello: (name) => {
    console.info(`hello ${name}`);
  },
};

person.sayHello("budi");
