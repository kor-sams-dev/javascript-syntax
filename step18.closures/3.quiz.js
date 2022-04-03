// var와 let의 차이점

function loopLet() {
  const array = [];
  for (let i = 0; i < 5; i++) {
    array.push(function () {
      console.log(i);
    });
  }
  return array;
}

const arrayLet = loopLet();
arrayLet.forEach((func) => func());

function loopVar() {
  const array = [];
  // var i
  for (var i = 0; i < 5; i++) {
    array.push(function () {
      console.log(i);
    });
  }
  return array;
}

const arrayVar = loopVar();
arrayVar.forEach((func) => func());
