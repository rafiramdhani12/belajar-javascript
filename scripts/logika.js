/*
 * && = dan
 * || = atau
 * ! = kebalikan
 */

const nilaiUjian = 90;
const nilaiAbsensi = 70;

const lulusUjian = nilaiUjian > 70;
const lulusAbsensi = nilaiAbsensi > 70;

const lulus1 = lulusUjian || lulusAbsensi;
const lulus2 = lulusUjian && lulusAbsensi;
document.writeln(`<p>lulus : ${lulus1}</p>`);
