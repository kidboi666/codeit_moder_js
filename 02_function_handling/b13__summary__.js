/* 함수 선언 (function declaration) */
function sayHi() {
  console.log('hi!');
}




/* 함수 표현식 (function expression) */
const sayHi = function() {
  console.log('hi');
}




/* 다양한 함수의 형태 */
//변수에 할당해서 활용
const printJS = function() {
  console.log('javascript');
}

//객체의 메소드로 활용
const codeit = {
  printTitle: function() {
    console.log('codeit');
  }
}

//콜백 함수로 활용
myBtn.addEventListener('click', function() {
  console.log('button is clicked');
})

//고차 함수로 활용
function myFunction() {
  return function() {
    console.log('hi');
  }
}




/* 파라미터의 기본값 */
function sayHi(name = 'codeit') {
  console.log(`hi! ${name}`);
}
sayHi('javascript'); // hi! javascript
sayHi(); // hi! codeit




/* arguments 객체 */
function printArguments() {
  // arguments 객체의 요소들을 하나씩 출력
  for (const arg of arguments) {
    console.log(arg);
  }
}
printArguments('young','mark','koby'); // young, mark, koby




/* Rest Parameter */
function printArg(...args) {
  for (const arg of args) {
    console.log(arg);
  }
}
printArg('young','mark','koby'); 
// rest parameter는 다른 일반 파라미터와도 사용할 수 있다.

function printRankingList(first, second, ...rest) {
  console.log('레이스 결과');
  console.log(`우승 : ${first}`);
  console.log(`준우승 : ${second}`);
  for (let arg of rest) {
    console.log(`참가자 : ${arg}`)
  }
}
printRankingList('Tommy', 'Jerry', 'Suri', 'Sunny', 'Jack');
// 레이스 결과, 우승 : Tommy, 준우승 : Jerry, 참가자 : Suri --- 





/* Arrow Function */
//화살표 함수 정의
const getTwice = (number) => {
  return number * 2;
}

//콜백 함수로 활용
myBtn.addEventListener('click', () => {
  console.log('button is clicked!');
})

/* 화살표 함수의 축약형 */
//1.함수의 파라미터가 하나 뿐일 때
const getTwice = (number) => {
  return number * 2;
}

//파라미터를 감싸는 소괄호 생략 가능
const getTwice = number => {
  return number * 2;
}

//2.함수 동작 부분이 return문만 있을 때
const sum = (a, b) => {
  return a + b;
}

//return문과 중괄호 생략 가능
const sum = (a, b) => a + b;

/* 화살표 함수는 arguments 객체가 없고 this가 가리키는 값이 일반 함수와 다르다 */




/* this */
const user = {
  firstName: 'tess',
  lastName: 'jang',
  getFullName: function() {
    return `${this.firstName} ${this.lastName}`;
  },
};
console.log(user.getFullName()); // getFullName 안에서의 this는 getFullName을 호출한
// user 객체가 담긴다