class Person {
  #Id;
  #Name;
  #Age;
  //age2
  //Generate 2 type of constructors
  constructor(id = "", name = "", age = 0) {
    this.#Id = id;
    this.#Name = name;
    this.#Age = 0;
    //Check here for finding out difference
    this.age2 = 0;
  }

  //Public is default and using # before the properties or methods for being private
  Nhap() {
    this.#Id = String(prompt("Hay nhap Id:"));
    this.#Name = String(prompt("Hay nhap Ho ten:"));
    this.#Age = Number(prompt(`Hay nhap tuoi:`));
  }

  Xuat() {
    console.log(`ID: ${this.#Id} ,Name: ${this.#Name} ,Tuoi: ${this.#Age}`);
  }
}

const p = new Person();
p.Nhap();
p.Xuat();
