/* 
! for loop
* for adalah  salah 1 kata kunci yg bisa digunakan untuk melakukan perulangan
* blok kode yg terdapat di dalam for akan selalu diulangi selama kondisi for terpenuhi
*/

for (i = 1; i <= 20; i++) {
  document.writeln(`<p>perulangan ke ${i}</p>`);
}

/* 
! sintaks perulangan for

* for(init statement,kondisi;post statement){
* block perulangan
* }



* init statement akan dieksekusi hanya sekali diawal sebelum perulangan
* kondisi akan dilakukan pengecekan dalam setiap perulangan , jika true perulangan akan dilakukan , jika false perulangan akan berhenti 
* post statement akan dieksekusi setiap kali diakhir pengulangan
* int statement , kondisi dan post statement tidak wajib diisi ,berarti kondisi selalu bernilai true
*/
