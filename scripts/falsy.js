/* 
! falsy
* falsy / falsey , adalah value yg ketika dalam konteks boolean, dia dianggap false 
* ini adalah slah 1 fitur unik dari js yg berguna , namun kadang juga sering membingungkan
* jadi di js , kondisi itu tidak hanya bisa boolean , tapi diluar boolean pun bisa , namun kita harus tau beberapa data falsy / dianggap false
*/

const data = "";

if (data) {
  document.writeln("true");
} else {
  document.writeln("false");
}
