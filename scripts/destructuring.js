/* 
! destructuring
* destructuring adalah fitur yg bisa digunakan untuk membongkar value-value di array / object kedalam varibale-variable
* fitur ini sangat mempermudah kita ketika ingin mengambil data dari array / object tanpa harus melakukan pengambilan data satu persatu
*/
{
  const names = ["fuad", "rusdi", "amba"];

  const [firstName, middleName, lastName, ...other] = names;

  console.info(firstName);
  console.info(middleName);
  console.info(lastName);
  console.info(other);
}

{
  const person = {
    firstName: "perrel",
    lastName: "brown",
    address: {
      street: "ambatustreet no 69",
      city: "ngawi",
      country: "indonesia",
    },
    hoby: "edging and gaming",
    channel: "dreambullxxx",
  };

  /* 
  ! destructuring nested object
  */

  const {
    firstName,
    lastName,
    address: { street, city, country },
    ...other
  } = person;
  console.info(firstName);
  console.info(lastName);
  console.info(street);
  console.info(city);
  console.info(country);
  console.info(other);
}

/* 
! destructuring fucntion parameter
* destructuring tidak hanya bisa dilakukan di variable , tapi juga bisa dilakukan di function parameter
* hal ini membuat kita mudah ketika ingin mengambil nested data dalam array / object dalam function
*/

{
  function displayPerson({ firstName, lastName, hobby: { one, two } }) {
    console.info(firstName);
    console.info(lastName);
    console.info(one);
    console.info(two);
  }

  const person = {
    firstName: "perrel",
    lastName: "brown",
    hobby: {
      one: "edging",
      two: "gaming",
    },
  };

  displayPerson(person);
}

{
  function sum([first, second]) {
    return first + second;
  }
  console.info(sum([1, 1]));
  console.info(sum([2, 3]));
}

/* 
!  default value
* yg paling menarik di destructuring adalah kita bisa menambahkan devault value 
* jadi misal kita kita melakukan destructuring terhadap array, ternyata tidak ada datanya , maka kita bisa menambahkan default value
* begitu juga pada object , jika ternyata property nya tidak ada maka kita bisa menambahkan default value
*/

/* 
! menggunakan nama variable lain
* saat kita melakukan destructuring di array , kita bisa dengan mudah membuat nama variable sesuka kita
* namun pada saat melakukan destructuring kita harus membuat nama variable sama dengan nama property
* kita juga bisa menggunakan nama variable lain saat melakukan destructuring object jika kita mau
*/
