/* 
! while loop 
* while loop adalah versi perulangan yg lebih sederhana dibanding for loop
* di while loop, hanya terdapat kondisi perulangan , tanpa ada init statement dan post statement 
*/

let counter = 1;
while (counter <= 10) {
  document.writeln(`<p> perulangan ke ${counter}`);
  counter++;
}

/* 
! do while loop
* perulangan yg mirip dengan while 
* perbedaanya hanya pada pengecekkan kondisi
* pengecekkan kondisi di while loop dilakukan diawal sebelum perulangan dilakukan,sedangkan di do while loop dilakukan setelah perulangan dilakukan
* oleh karena itu dalam do while loop , minimal pasti sekali perulangan dilakukan walaupun kondisi tidak bernilai true
*/

let counter2 = 1; // init
do {
  // ! block perulangan
  document.writeln(`<p> perulangan ${counter2}`);
  counter2++;
} while (counter2 <= 10); // ! pengecekan
// ! diekksekusi dulu baru ada pengecekan dan minimal terjadi 1 kali
