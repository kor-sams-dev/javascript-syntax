// 구조 분해 할당 Destructuring Assignment
// 데이터 뭉치(그룹화)를 쉽게 만들 수 있다.
const fruits = ['🍎', '🍊', '🍓', '🍒'];
const [first, second, ...others] = fruits;
console.log(first);
console.log(second);
console.log(others);

const point = [1, 2, 3];
const [y, x, z = 0] = point;
console.log(y);
console.log(x);
console.log(z);

function createEmoji() {
  return ['apple', '🍎'];
}
const array = createEmoji();
console.log(array);

const [title, emoji] = createEmoji();
console.log(title, emoji);

const ellie = { name: 'Ellie', age: 20, job: 's/w engineer' };
// function display(person) {
//   console.log('이름', person.name);
//   console.log('나이', person.age);
//   console.log('직업', person.job);
// }

function display({ name, age, job }) {
  console.log('이름', name);
  console.log('나이', age);
  console.log('직업', job);
}
display(ellie);

const { name, age, job: occupation, pet = '강아지' } = ellie;
console.log(name);
console.log(age);
console.log(occupation);
console.log(pet);

// Quiz!!

const prop = {
  name: 'Button',

  styles: {
    size: 20,

    color: 'black',
  },
};

function changeColor({ styles: { color } }) {
  console.log(color);
}

changeColor(prop);
