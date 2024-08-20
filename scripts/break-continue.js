/* 
! break dan continue
* break mengehentikan case dalam switch
* sama dengan perulangan , break juga bisa digunakan untuk menghentikan seluruh perulangan
* namun berbeda dengan continue , continue digunakan untuk menghentikan perulangan saat ini , lalu melanjutkan ke perulangan selanjutnya
*/

let counter = 1;

while (true) {
  document.writeln(`<p> perulangan ke ${counter}`);
  counter++;
  if (counter > 10) {
    break;
  }
}

for (i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    continue;
  }
  document.writeln(`<p> perulangan continue ${i}`);
}
