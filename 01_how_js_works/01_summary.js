/* 자바스크립트의 데이터 타입 */
/*
number
string
boolean
undefined
null
object
symbol
bigint
*/






/* Truthy값과 Falsy값 */
Boolean(false); // false
Boolean(null); // false
Boolean(undefined); // false
Boolean(0); // false
Boolean(NaN); // false
Boolean(''); // false
// 이외 나머지 값은 전부 truthy값이다.






/* 독특한 방식으로 동작하는 논리 연산자 */
console.log(null && undefined); // null
console.log(0 || true); // true
console.log('0' && NaN); // NaN
console.log({} || 123); // {}
/* AND연산자는 왼쪽 피연산자가 falsy값일 때 왼쪽 피연산자를,
왼쪽 피연산자가 truthy값일 때 오른쪽 피연산자를 리턴.
OR연산자는 왼쪽 피연산자가 falsy일 때 오른쪽 피연산자를,
왼쪽 피연산자가 truthy값일 때 왼쪽 피연산자를 리턴. */







/* var변수와 let,const변수의 차이 */
/* var변수의 특징
1. 변수 이름 중복 선언 가능
2. 변수 선언 전에 사용 가능 (호이스팅)
3. 함수 스코프

let, const의 특징
1. 변수 이름 중복 선언 불가 (SyntaxError 발생)
2. 변수 선언 전에 사용 불가 (ReferenceError 발생)
3. 블록 스코프 */