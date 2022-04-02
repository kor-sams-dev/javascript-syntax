// static 정적 프로퍼티, 메서드
class Fruit {
  static MAX_FRUIT = 5;
  // 생성자: new 키워드로 객체를 생성할때 호출되는 함수
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }
  // 클래스 레벨의 메서드
  static makeRandomFruit() {
    return new Fruit('banana', '🍌');
  }

  // 인스턴스 레벨의 메서드
  display = () => {
    console.log(`${this.name}: ${this.emoji}`);
  };
}

// console.log(Fruit.display()) // 👈 불가

// apple은 Fruit 클래스의 인스턴스이다
const apple = new Fruit('apple', '🍎');
// orange은 Fruit 클래스의 인스턴스이다
const orange = new Fruit('orange', '🍊');
console.log(Fruit.makeRandomFruit());
console.log(Fruit.MAX_FRUIT);
console.log(apple);
console.log(orange);
console.log(apple.name);
console.log(orange.name);
apple.display();
orange.display();

// static 함수 예제
Math.pow();
Number.isFinite(1);
