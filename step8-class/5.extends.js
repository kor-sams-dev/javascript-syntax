// class Tiger {
//   constructor(color) {
//     this.color = color;
//   }
//   eat() {
//     console.log('먹자!');
//   }
//   sleep() {
//     console.log('잔다!');
//   }
// }

// class Dog {
//   constructor(color) {
//     this.color = color;
//   }
//   eat() {
//     console.log('먹자!');
//   }
//   sleep() {
//     console.log('잔다!');
//   }
//   paly() {
//     console.log('논다!');
//   }
// }

class Animal {
  constructor(color) {
    this.color = color;
  }
  eat() {
    console.log('먹자!');
  }
  sleep() {
    console.log('잔다!');
  }
}

class Tiger extends Animal {}
const tiger = new Tiger('노랑이!');
console.log(tiger);
tiger.eat();
tiger.sleep();

class Dog extends Animal {
  constructor(color, ownerName) {
    // super 부모의 내부 항목
    super(color);
    this.ownerName = ownerName;
  }
  paly() {
    console.log('놀자!!!!');
  }
  // 오버라이딩 over riding
  eat() {
    super.eat();
    console.log('강아지가 먹는다!!');
  }
}
const dog = new Dog('빨강이', '한샘');
console.log(dog);
dog.eat();
dog.sleep();
dog.paly();
