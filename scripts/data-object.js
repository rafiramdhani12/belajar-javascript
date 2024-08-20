/* 
! associative array
* dibahasa lain kita bisa menggunakan index berupa tipe data selain data number , misal string
* di js tidak mendukung associative array
* jika memaksakan js akan merubah tipe data array menjadi object , dan ini bisa berbahaya , karena beberapa operasi di array mungkin bisa berubah hasilnya
*/

/* 
! tipe data object
* tipe data object adalah tipe data yg mirip dengan tipe data array
* yg membedakan adalah index pada tipe data object bisa menggunakan string
* index di object biasanya disebut atribut / properties bukan index
*/

const orang = {};

// ! menambah / mengubah data
orang["nama"] = "ambasing";
orang["alamat"] = "ngawi";
orang["umur"] = 30;

console.table(orang);
// ! menghapus
delete orang["alamat"];

console.table(orang);

orang["alamat"] = "bogor";

console.table(orang);

const Amba = {
  nama: "ambasuke kiritani",
  alamat: "japanese",
  pekerjaan: "the first great black samurai in japan",
  umur: 30,
};

console.table(Amba);

delete Amba["umur"];

console.table(Amba);

console.info(`nama : ${Amba.nama}`);
console.info(`alamat : ${Amba.alamat}`);
console.info(`pekerjaan : ${Amba.pekerjaan}`);
console.info(`umur : ${Amba.umur}`);
