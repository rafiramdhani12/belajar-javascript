/* 
! in operator
* in operator adalah operator yg bisa dilakukan untuk mengecek apakah sebuah property ada di dalam object / tidak
* jika property tersebut ada di object , maka hasilnya true , sedangkan jika tidak , maka hasilnya false 
* tidak hanya di object , in juga bisa digunakan untuk mengecek index di array
*/

const person = {
  firstName: "perrel",
  lastName: "brown",
};

if ("firstName" in person) {
  alert(`helo ${person.firstName}`);
} else {
  alert("hello");
}

// ! peringatan
// * in operator hanya mengecek ada / tidaknya sebuah property /index walaupun nilai property itu berisikan null / undefined
