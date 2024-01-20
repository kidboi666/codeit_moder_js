typeof 'Codeit'; // string
typeof Symbol(); // symbol
typeof {}; // object
typeof []; // object
typeof true; // boolean
typeof(false); // boolean
typeof(123); // number
typeof(NaN); // number
typeof(456n); // bigint
typeof(undefined); // undefined


typeof null; // object
/*
JavaScript를 처음 구현할 때, JavaScript 값은 타입 태그와 값으로 표시되었습니다.
객체의 타입 태그는 0이었습니다. null은 Null pointer(대부분의 플랫폼에서 0x00)로 
표시되었습니다. 그 결과 null은 타입 태그로 0을 가지며, 따라서 typeof는 object를 
반환합니다. (참고 문서)
*/


function sayHi() {
  console.log('Hi!?');
}
typeof sayHi; // function
/*
함수는 object로 취급되지만 타입오브에선 function을 반환함
*/