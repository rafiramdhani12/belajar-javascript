/* 
! for in
* perulangan for yg digunakan untuk mengiterasi seluruh data property di object / index di array
* walaupun for in bisa digunakan untuk array , namun tidak direkomendasikan untuk array , karena biasanya kita jarang sekali butuh data index untuk array , kita bisa menggunakan for of
*/

const person = {
  firstName: "perrel",
  middleName: "laquarius",
  lastName: "brown",
};

for (property in person) {
  document.writeln(`<p> property ${property} : ${person[property]}`);
}

const names = ["perrel", "laquarius", "brown"];
for (index in names) {
  document.writeln(`<p>${index} : ${names[index]}`);
}
