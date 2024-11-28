//No using private int tu , private in mau
//Instead of up here , we use # for private and public is default
class Fraction {
  #Numerator;
  #Denominator;

  //Only one constructor
  constructor(numerator = 0, denominator = 1) {
    if (denominator === 0) {
      throw new Error(`Denominator is not 0`);
    }

    this.#Numerator = numerator;
    this.#Denominator = denominator;
  }

  //Methods
  //No using public void method()
  //Instead of up here , we use #method() or method()
  display() {
    const result = document.getElementById("result");
    result.innerHTML = `${this.#Numerator}/${this.#Denominator}`;
  }
}
/*
--------------------------Test here-----------------------------------
let fr;
let show = document.getElementById(`show`);
show.addEventListener("click", () => {
  const numerator1 = Number(document.getElementById("numerator").value);
  const denominator1 = Number(document.getElementById("denominator").value);
r
  fr = new Fraction(numerator1, denominator1);
   fr.display();
 });
-------------------------------------------------------
 */

class FractionalList {
  #List;
  #n;
  constructor() {
    this.#List = [];
    this.#n = 0;
  }
" "



  factor(a, b) {
    if (a === 0) return b;
    return this.factor(b, a % b);
  }
  brief(tu, mau) {
    let divisor = this.factor(tu, mau);
    tu = Number(Math.floor(tu.divisor));
    mau = Math.floor(mau / divisor);
    console.log(tu, mau);
    return { tu, mau };
  }
  addComponents(numerator, denominator) {
    let { tu, mau } = this.brief({ tu: numerator, mau: denominator });
    console.log({ tu, mau });
    this.#List.push({ tu, mau });
    this.#n++;
    this.display();
  }

  display() {
    let result = ``;
    this.#List.map((ele, index) => {
      result += `<h1>Fraction ${index}: ${ele.Tu}/${ele.Mau}</h1>`;
    });
    const show = document.getElementById("myDiv");
    show.innerHTML = result;
  }
  getLength() {
    return this.#n;
  }
}

let l = new FractionalList();

const addEle = document.getElementById("enter");
const result = document.getElementById("show");

addEle.addEventListener("click", () => {
  const numerator = Number(document.getElementById("numerator").value);
  const denominator = Number(document.getElementById("denominator").value);
  l.addComponents(numerator, denominator);
});
