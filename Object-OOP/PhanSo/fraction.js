const Fraction = {
  Tu: 0,
  Mau: 1,
  getTu: function () {
    return this.Tu;
  },

  Nhap: function () {
    this.Tu = Number(prompt(`Hay nhap tu so: `));
    do {
      this.Mau = Number(prompt(`Hay nhap mau so: `));
      if (this.Mau <= 0) console.log(`Mau so khong duoc bang khong`);
    } while (this.Mau <= 0);
  },

  show: function () {
    console.log(`${this.Tu}/${this.Mau}`);
  },
};

console.log(`Initial: ${Object.entries(Fraction)}`);

Fraction.Nhap();
console.log(`After: ${Object.entries(Fraction)}`);
console.log(`show function: `);
Fraction.show();
