/* 
! with statement
* with statement merupakan fitur yg digunakan untuk menurunkan sebuah scope data
* dengan menggunakan whith statement kita bisa mengakases property dalam sebuah data tanpa harus menyebut data nya
*/

const person = {
  firstName: "perrel",
  middleName: "laquarius",
  lastName: "brown",
};

with (person) {
  console.info(firstName);
  console.info(middleName);
  console.info(lastName);
}

/* 
! tidak direkomendasikan
*/
