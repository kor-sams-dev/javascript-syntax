// 클래스를 베이스로한 객체지향 프로그래밍

class Animal {
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }
  printName() {
    console.log(`${this.name} ${this.emoji}`);
  }
}

class Dog extends Animal {
  play() {
    console.log('같이 놀자!!!');
  }
}

class Tiger extends Animal {
  hunt() {
    console.log('사냥하자!');
  }
}

const dog1 = new Dog('멍멍', '🐶');
const tiger = new Tiger('어흥', '🐯');
console.log(dog1, tiger);
dog1.printName();
tiger.printName();

dog1.play();
tiger.hunt();

console.log(dog1 instanceof Dog);
console.log(dog1 instanceof Animal);
console.log(dog1 instanceof Tiger);
console.log(tiger instanceof Dog);
console.log(tiger instanceof Animal);
console.log(tiger instanceof Tiger);
