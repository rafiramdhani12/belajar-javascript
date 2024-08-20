/* 
! for of 
* jika for in digunakan untuk melakukan iterasi property / index , berbeda dengan for of digunakan untuk melakukan iterasi terhadap isi value dari iterable object, seperti array , string dan lain"
* for tidak bisa digunakan untuk melakukan iterasi data di object karena object bukanlah iterable 
*/

const names = ["amba", "fuad", "rusdi"];

for (name of names) {
  document.writeln(`<p>${name}`);
}

const fullName = "perrel brown";
for (character of fullName) {
  document.writeln(`<p> ${character}`);
}
