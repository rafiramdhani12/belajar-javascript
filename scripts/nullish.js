/* 
! nulliish coalescing operator
* nullish value adalah null dan undefined
* nullish (??) operator yg mirip dengan ternary op yg membedakan adalah pada kondisi jka bernilai null /undefined maka nilai default yg akan diambil
*/

let parameter = "fuad";

let data = parameter;
if (data === null || data === undefined) {
  data = "nilai default";
}

document.writeln(data);

// ! ini adalah nullish operator
let data2 = parameter ?? "nilai default";

document.writeln(data2);
