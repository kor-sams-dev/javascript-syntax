// 얕은 복사 Shallow copy - 객체는 메모리 주소 전달
// 자바스크립트에서 복사할때는 항상 얕은 복사가 이루어짐!
// Array.from, concat, slice, spread(...), Object.assign ...
const pizza = { name: '🍕', price: 2 };
const ramen = { name: '🍜', price: 3 };
const sushi = { name: '🍣', price: 4 };
const store1 = [pizza, ramen];
const store2 = Array.from(store1);
console.log('store1', store1);
console.log('store2', store2);

// store2에 sushi 추가 했으나 store1에는 추가되지 않음
store2.push(sushi);
console.log('store1', store1);
console.log('store2', store2);

// pizza의 가격을 변경했을 뿐인데 배열 store1, store2의 피자 가격이 변한다 shallow copy!
pizza.price = 4;
console.log('store1', store1);
console.log('store2', store2);
