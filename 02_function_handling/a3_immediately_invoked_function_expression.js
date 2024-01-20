/* 즉시 실행 함수 (Immediately Invoked Function Expression) = IIFE*/
(function() {
  console.log('hi')
})(); // hi

(function() {
  console.log(x + y)
})(3, 5); // 8

(function sayHi() {
  console.log('hi')
})();
sayHi(); // ReferenceError



/* 즉시 실행 함수의 활용 */

(function init() {
  // 프로그램이 실행 될 때 기본적으로 동작할 코드들
})();

// 혹은 한번 쓰고 말 일회성 동작때도 사용
const firstName = 'lee';
const lastName = 'jinwook';

const message = (function() {
  const fullName = `${firstName} ${lastName}`;
  return `hi! my name is ${fullName}`;
})();
// 이렇게 되면 즉시 실행 함수 내에 변수등은 캡슐화가 되어 안정성이 생겨난다