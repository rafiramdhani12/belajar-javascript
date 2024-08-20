/* 
! closure
* closure adalah kombinasi function dan bundle referensi ke data disekitarnya
* kita sudah tau bahwa local scope tidak bisa diakses keluar dari scope nya
* dengan kemampuan closure kita bisa membuat sebuah function di local scope dan referensi ke data di sekitar local scope tersebut  keluar scope nya
*/

function createAdder(value) {
  const owner = "perrel";

  function add(param) {
    console.info(owner);
    return value + param;
  }
  return add;
}

const addTwo = createAdder(2);

console.info(addTwo(20));
