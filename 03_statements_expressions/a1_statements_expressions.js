/* 문장 (statements)
자바스크립트는 모두 문장과 표현식으로 구성되어 있다. 자바스크립트에서 문장은 어떤 동작이
일어나도록 작성된 최소한의 코드 덩어리를 가리킨다. */

let x; // 변수 선언 문장
x = 3; // 변수에 값 할당 문장

if (x < 5) { // 조건문 문장
  console.log('x는 5보다 작다');
} else {
  console.log('x는 5와 같거나 크다');
}

for (let i = 0; i < 5; i++) { // 반복문 문장
  console.log(i);
}

/* 선언문 할당문 조건문 반복문 등 끝에 문이라고 붙은 이유는 모두
동작을 수행하는 문장이기 때문이다. */






/* 표현식 (expressions) 
표현식은 결과적으로 하나의 값이 되는 모든 코드를 가리킨다 */

const title = 'JavaScript';
const codeit = {
  name: 'Codeit'
};
const numbers = [1, 2, 3];

typeof codeit // object
title // JavaScript
codeit.name // Codeit
numbers[3] // undefined
/* 위 코드의 마지막 네 줄처럼 선언된 변수를 호출하거나 객체의 프로퍼티에 접근하는 것도
결국에는 하나의 값으로 평가되는데, 길이와는 상관없이 결과적으로 하나의 값이 되는 코드를
모두 표현식이라고 할 수 있다 */




/* 표현식이면서 문장, 문장이면서 표현식 */

// 할당 연산자는 값을 할당하는 동작도 하지만, 할당한 값을 그대로 가지는 표현식이다.
title = 'JavaScript'; // JavaScript

// 함수 호출은 함수를 실행하는 동작도 하지만, 실행한 함수의 리턴 값을 가지는 표현식이다.
sayHi(); // sayHi 함수의 리턴 값

// console.log 메소드는 콘솔에 아규먼트를 출력하는 동작도 하지만, undefined 값을 가지는 
// 표현식이다.
console.log('hi'); // undefined

/* 사실은 할당연산자 자체가 할당한 값을 그대로 리턴하는 특징이 있기 때문에 연산 자체로 
값이 되는 표현식이기도 하다. 그런데 할당식은 왼쪽에 있는 피연산자에 오른쪽 피연산자 값을
할당하는 동작을 하기 때문에 문장이 되기도 한다. */






/* 표현식인 문장 vs 표현식이 아닌 문장 */
let x; 
x = 3;

// console.log(if (x < 5) {
//   console.log('x는 5보다 작다');
// } else {
//   console.log('x는 5보다 크다');
// });

// const someloop = for (let i = 0; i < 5; i++) {
//   console.log(i);
// };

/* 조건문이나 반복문은 값으로 평가되지 않고 오로지 문장으로만 평가되므로,
console.log의 인자로 if문을 전달하거나 변수에 for문을 할당하면 에러가 난다. */

(3 + 4) * 2;
console.log('Hi!');

while(true) {
  x++;
}
/* 표현식인 문장은 세미콜론으로, 표현식이 아닌 문장은 문장 자체의 코드 블록(중괄호)로
그 문장의 범위가 구분된다 */