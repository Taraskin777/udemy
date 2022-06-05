'use strict';

class User {

   constructor(name, age) {
      this.name = name;
      this._age = age;
}

   #surname = 'Kozak'
   
  say () {
      console.log(`Ім'я користувача: ${this.name} ${this.#surname}, вік: ${this._age}`);
   }
  
   get age() {
      return this._age;
   }

   set age(age) {
      if (typeof age === 'number' && age > 0 && age < 110) {
         this._age = age;
      } else {
         console.log('Неприпустиме значення');
      }
   }

}
 
const ivan = new User('Ivan', 25);

console.log(ivan.age);
console.log(ivan.surname);
ivan.age = 99;
console.log(ivan.age);
ivan.say();