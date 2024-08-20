/* 
! this 
* this adalah referensi object milik siapa
* tiap lokasi kata kunci this , bisa berbeda-beda referensi pemilik nya
* dalam object method this merupakan referensi ke object pemilik function nya
* di global scope this merupakan refrensi ke global object (di browser biasanya window)
* dalam function , this merupakan referensi ke global object
* di function dengan strict mode this adalah undefined 
* dalame event , this merupakan refrensi ke element yg menerima event
*/

console.info(this);

function sample() {
  console.info(this);

  function inner() {
    console.info(this);
  }
  inner();
}

sample();

// this di object

const person = {
  name: "amba",
  sayHello: function (value) {
    console.info(`hello ${value} My name is ${this.name}`);
  },
};

person.sayHello("fuad");
