

"use strict";
// Написати клас User(ім'я, прізвище, стать ) і клас Student(все, що має User і додатково рік вступу).
// За допомогою вбудованого об'єкту Date перевіряєте, щоб рік вступу був не більше за поточний рік.
// У студента буде метод, який повертає кількість років які начається студент, тобто курс.
// Якщо рік вступу дорівнює поточному року - то це 1 курс. Місяці і дні вступу не враховуємо.

// Скрізь попрописувати сетери і гетери. Використати try...catch

/**
 * @param {string}name
 * @param {string}lname
 * @param {number}sex
 * @throws {TypeError}type must be a number or bigint num
 * @throws {RangeError}type must be a positive or zero
 */
class User {
    constructor(name,lname,sex) {
      this.name = name;
      this.lname = lname;
      this.sex = sex;
    }
    get name() {
      return this._name;
    }
    set name(name) {
      if (typeof name !== "string") {
        throw new TypeError("Name must be string");
      }
      this._name = name;
    }

    get lname() {
        return this._lname;
      }
      set lname(lname) {
        if (typeof lname !== "string") {
          throw new TypeError("Name must be string");
        }
        this._lname = lname;
      }
      get sex() {
        return this._sex;
      }
      set sex(sex) {
        if (typeof sex !== "string") {
          throw new TypeError("Name must be string");
        }
        this._sex = sex;
      }  

}
/**
 * @param {string}name
 * @param {string}lname
 * @param {number}sex
 * @param {number}yearOfRecept
 * @throws {TypeError}type must be a number or bigint num
 * @throws {RangeError}type must be a positive or zero
 */

class Student extends User{
    constructor(name, lname,sex ,yearOfRecept){
      super(name,lname,sex );
      this.yearOfRecept = yearOfRecept;
    }
    set yearOfRecept (yearOfRecept ) {
        if (typeof yearOfRecept !== "number") {
          throw new TypeError("from must be number");
        }
        if (yearOfRecept > DATE ) {
          throw new RangeError("years must be less than Date");
        }
        this._yearOfRecept = yearOfRecept ;
      }
      howMenyYearStudy () {
        return  DATE === this._yearOfRecept?1: DATE-this._yearOfRecept

           }
         }
    
  try {
    const user = new User('Vasya','Kost','male');
    const student = new Student ('Vasya','Kost','male',2022);
    console.log(student.howMenyYearStudy());
  } catch (error) {
    if (error instanceof TypeError) {
      console.log("Wrong type");
    }
    if (error instanceof RangeError) {
      console.log("Wrong value");
    }
    console.log(error);
  }