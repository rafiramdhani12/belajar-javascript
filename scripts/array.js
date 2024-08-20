/* 
! array
* array bersifat dinamis , array adalah tipe data yg berisikan kumpulan data
*/

let arrayKosong = [];
// cara menambah data kedalam array
arrayKosong.push("apalah");
arrayKosong.push("bejir");

arrayKosong.push("skibidi");
arrayKosong.push(["masukin array ke array bejir"]);

arrayKosong[0] = "lil nas x";

const table = console.table(arrayKosong);

let arrayNama = ["amba", "fuad", "rusdi"];

/* 
! operasi di array
* array.push(value) = menambah data ke array
* array.length = untuk mendapatkan panjang array
* array[index] = mendapat data di posisi index
* array[index] = value = mengubah data di posisi index
* delete array[index] = menghapus data diposisi index , namun index tidak bergeser
*/
