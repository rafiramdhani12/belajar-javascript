/* 
! switch
* kadang kita hnya butuh menggunakan kondisi sederhana di if statement , seperti hanya menggunakan perbandingan == 
* switch adalah statement percabangan yg sama dengan if , namun lebih sederhana cara pembuatanya 
* kondisi di switch statement hanya untuk perbandingan ==
 */

const nilai = "A";

switch (nilai) {
  case "A":
    document.writeln("<p>good job</p>");
    break;
  case "B":
  case "C":
    document.writeln("<p>not bad</p>");
    break;
  case "D":
    document.writeln("<p>haiiiyyaaa ur score so bad u faaaking dumbshit</p>");
    break;
  default:
    document.writeln("<p>maybe u get a wrong major</p>");
}
