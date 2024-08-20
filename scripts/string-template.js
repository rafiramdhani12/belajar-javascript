/* 
! string template
* 
*
*
*
*/

const nama = "ambasuke kiritani";
console.info(`nama : ${nama}`);
const member1 = "ambatukam";
const member2 = "fuad";
const member3 = "rusdi";
const jomokers = `${member1} ${member2} ${member3}`;

console.info(jomokers);

const nilai = 90;
const template = `name : ${nama}, lulus = ${nilai > 75}`;
console.info(template);

/* 
! multiline string
* string template juga bisa digunakan untuk membuat string multi line
* kita cukup tambahkan enter di text nya
*/

let multiLineString = `
nama saya adalah ambasuke kiritani
            hello world
saya adalah samurai hitam terkuat di jepang yg dikirim dari ngawi
nama jurus andalan saya adalah ambasing
`;

document.writeln("<pre>");
document.writeln(multiLineString);
document.writeln("</pre>");

// ! Tag <pre> dalam HTML digunakan untuk menampilkan teks yang telah diformat sebelumnya. Teks di dalam tag <pre> akan ditampilkan persis seperti yang diketik, termasuk spasi dan baris baru. Ini berguna ketika kamu ingin menampilkan teks dengan format tertentu, seperti kode sumber, puisi, atau data yang terstruktur.
