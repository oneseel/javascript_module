// named export: 파일에서 여러 함수와 변수를 export 하고 싶을 때 사용
// default export: 파일에서 하나의 메인 함수나 변수 export 하고 싶을 때 사용

const PI = 3.14;

function add(a, b) {
  return a + b;
}

function substract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

const calculator = {
  PI,
  add,
  substract,
  multiply,
  divide,
};

export default calculator;
