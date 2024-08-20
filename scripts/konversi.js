/* 
! konversi string number
* saat membuat aplikasi kadang kita menginput data dalam bentuk string
* sedangkan kita ingin mengelola datanya dalam bentuk number
* maka sangat disarankan untuk melakukan kontroversi tipe data
*/

const value1 = parseInt("1");
const value2 = 2;
const sum = value1 + value2;

document.writeln(`<p>${sum}</p>`);

document.writeln(`<p>${parseInt("1.1")}</p>`);
document.writeln(`<p>${parseFloat("1.1")}</p>`);
document.writeln(`<p>${Number("1.1")}</p>`);

const first = Number("salah");
const totalNumber = first + 100;
document.writeln(`<p>${totalNumber}</p>`);

/* 
! konversi string number
* parseInt(string) = mengkonversi dari string ke number(bilangan bulat)
* parseFloat(string) = mengkonversi dari string ke number (bilangan dpecahan)
* Number(string) = mengkonversi dari string ke number (bilangan bulat / pecahan)
* number.toString() = mengkonversi dari number ke string
*/

/* 
! isNaN()
* function untuk mengecek bahwa number itu nan / bukan 
*/
