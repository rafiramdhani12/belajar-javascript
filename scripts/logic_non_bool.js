/* 
! operator logika non boolean
* sebelumnya kita sudah tahu bahwa operator logika and(&&) or (||) digunakan untuk dua data boolean
* namun berbeda dengan di js kita bisa menggunakan operator logika and dan or untuk tipe data non boolean
*/

/* 
! oepartor or(||)
* membaca dari kiri ke kanan , mengambil nilai pertama yg thruthy , jika tidak ada satupun yg bernilai thruthy, maka yg terakhir yg akan diambil
*/

console.info("hello" || "");
console.info("" || []);
console.info("0" || "nol");
console.info(0 || "nol");
console.info(null || "NULL");
console.info(undefined || "undefined");
console.info(0 || false); // ! jika 2 2 nya false maka yg diambil adalah yg ke 2

const person = {
  firstName: "perrel",
  lastName: "brown",
};

const name = person.firstName || person.lastName;
console.info(name);

// ! and(&&) kebalikan dari or and akan mengambil nilai falsy

console.info("hello" && "");
console.info("" && []);
console.info("0" && []);
