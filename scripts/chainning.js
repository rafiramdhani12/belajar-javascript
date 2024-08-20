/*
! channing 
* channing (?) merupakan operator yg digunakan untuk mengamankan ketika kita ingin mengakses property sebuah object dari data nullish
* jika kita mencoba mengakses property dari sebuah object dari data nullish tanpa menggunakan optional chainning operator maka akan terjadi error 
*/

const person = {
  address: {
    country: "indonesia",
  },
};

const country = person?.address?.country;

document.writeln(`<p>${country}</p>`);

document.writeln(`<p>sukses</p>`);
