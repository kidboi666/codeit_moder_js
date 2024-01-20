const sayHi = function() {
  console.log('hi');
}
console.log(sayHi.name) // sayHi
// 함수 표현식으로 함수가 할당된 변수에는 자동으로 name이라는 프로퍼티를 가진다




/* Named Function Expression (기명 함수 표현식) */
const sayHi2 = function printHiInConsole() {
  console.log('hi');
}
console.log(sayHi.name) // printHiInConsole
// 이 함수 이름은 함수 내부에서 함수 자체를 가리킬 때 사용할 수 있고 함수를 외부에서
// 호출할 때는 사용할 수 없다.





/* 재귀 함수 + 기명 함수 표현식 */
let countdown = function printCountdown(n) {
  console.log(n);
  if (n === 0) {
    console.log('end!')
  } else {
    printCountdown(n - 1);
  }
}
let myFunc = countdown;
countdown = null;
myFunc(5) // 5 , 4 , 3 , 2 , 1 , 0 , end!
/* 함수 표현식을 작성할 때 함수에도 이름을 지어서 재귀 함수로 쓰일때 안전하게 자기자신을
호출 할 수 있도록 할 수 있다. */