/* 
! gettter dan setter
* getter dan setter adalah kemampuan membuat function yg berbeda untuk mengambil data (getter) dan mengubah data(setter) pada sebuah property di object
* dengan menggunakan setter dan getter kita bisa melakukan hal apapun dalam function sebelum sebuah property diakses / diubah , misal menambah validasi dan lain lain
*/

const person = {
  firstName: "perrel",
  lastName: "brown",
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(value) {
    const array = value.split(" ");
    this.firstName = array[0];
    this.lastName = array[1];
  },
};

person.fullName = "budiono siregar";
console.table(person);
