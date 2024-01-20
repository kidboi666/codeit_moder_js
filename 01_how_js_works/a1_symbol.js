
/* 
심볼은 기본형 데이터 타입(primitive data type)중 하나,

심볼은 코드 내에서 유일한 값을 가진 변수 이름을 만들 때 사용한다
*/
const user = Symbol('this is a user');

user === 'this is user'; // false
user === 'user'; // false
user === 'Symbol'; // false
user === true; // false
user === false; // false
user === 123; // false
user === 0; // false
user === null; // false
user === undefined; // false

/*
그리고 괄호 안에 심볼에 대한 설명을 붙일 수 도 있다.
이렇게 Symbol 값을 담게 된 user라는 이름의 변수는 다른 어떤 값과 
비교해도 true가 될 수 없는 고유한 변수가 된다.

심지어는 똑같은 설명을 붙인 심볼을 만들어도 두 값을 비교하면 false가 된다
*/

const symbolA = Symbol('this is Symbol');
const symbolB = Symbol('this is Symbol');

console.log(symbolA === symbolB); // false