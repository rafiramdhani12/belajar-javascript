/* 
!popup
* alert , confirm , prompt
* alert digunakan untuk memberi peringatan
* prompt digunakan untuk meminta input string dari pengguna browser dalam bentuk popup inputtext
* sedangkan confirm digunakan untuk meminta input boolean dari pengguna browser dalam bentuk popup input  pilihan
*/

// ! prompt

/* 
* const nama = prompt("siapa nama anda ");

* alert(`hello ${nama}`);
 
*/

// !  confirm

const masuk = confirm("apakah anda ingin masuk ?");
if (masuk) {
  const name = prompt("siapa nama anda");
  alert(`hello ${name}`);
} else {
  alert("bye");
}
