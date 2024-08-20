/* 
! operator matenmatika
? tipe data operator matematika
* Aritmatika
* Augmented assigment  
* Unary
*/

/*
 * + = pertambahan
 * - = pengurangan
 * * = perkalian
 * / = pembagian
 * ** = eksponensial (pangkat)
 * % = sisa bagi
 */

document.writeln("<h1>Operator matematika</h1>");

let result = 1 + 2;
document.writeln(`<p>1+2 = ${result}</p>`);
let originalResult = result; // 3

// mengganti value result sebelumnya
result -= 1;
document.writeln(`<p>${originalResult} - 1 = ${result}</p>`);
originalResult = result; //2

result = result * 2; //4
document.writeln(`<p>${originalResult} * 2 = ${result}</p>`);

/* 
! augmented assigment
* result = result + 10 | += 10
* result = result - 10 | -= 10
* result = result * 10 | *= 10
* result = result / 10 | /= 10
* result = result ** 10 | **= 10
* result = result % 10 | %= 10
*/

document.writeln("<h1>Operator Augmented assigment</h1>");

let result2 = 10;
result2 += 10;
document.writeln(result2);

result2 -= 10;
document.writeln(result2);

result2 *= 10;
document.writeln(result2);

/* 
! opeator unary (biasanya hanya membutuhkan 1 data)
* + = menandakan nilai positif
* - = menandakan nilai negatif
* ++ = increment menaikan 1 aangka
* -- = decrement menurunkan 1 angka
*/

document.writeln("<h1>Operator Augmented assigment</h1>");
let result3 = +1;
document.writeln(`<p>${result3}</p>`);

result3--; // result = result +=1
document.writeln(`<p>${result3}</p>`);

result3++;
document.writeln(`<p>${result3}</p>`);

result3 = -result3;
document.writeln(`<p>${result3}</p>`);

// translate yg diatas adalah matematika 1 - 1 = 0 + 1 = 1 , yg terakhir hanya mengubah nilai positif ke negatif
