class Plane {
  constructor(name, weight) {
    this.name = name;
    this.weight = weight
  }

  sayHi() {
    return `Hi, everyone. Bienvenidos al avion ${this.name}`
  }
};

let a319 = new Plane;
a319.weight = 750000;
a319.name = 'A319'
console.log(a319.sayHi())

let a340 = new Plane;
a340.weight = 640000;
a340.name = 'A340';
console.log(a340.sayHi())