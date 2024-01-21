// Spread 구문 (Spread Syntax)
const numbers = [1, 2, 3];

console.log(...numbers); 

/* Rest Parameter와의 차이점
Rest Parameter는 여러 개의 아규먼트를 하나의 파라미터로 묶는 것이고
Spread구문은 하나로 묶여 있는 값을 각각의 개별 값으로 펼치는 방식이다. 

Spread구문을 사용하면 배열을 편리하게 복사 할 수가 있다. */

const webPublishing = ['html', 'css'];
// const interactiveWeb = webPublishing.slice();
// 혹은
const interactiveWeb = [...webPublishing, 'javascript'];

console.log(webPublishing); // html, css
console.log(interactiveWeb); // html, css, javascript




/* 배열 합치기 */
const arr1 = [1,2,3];
const arr2 = [4,5,6];

const arr3 = [...arr1, ...arr2];
console.log(arr3); // [1,2,3,4,5,6]

const arr4 = arr1.concat(arr2);
console.log(arr4); // [1,2,3,4,5,6]





/* 배열을 객체로 */
const members = ['태호','종훈','우재'];

const newObject = { ...members };

console.log(newObject); // { 0: '태호' , 1: '종훈', 2: '우재', }



const latte = {
  esspresso: '30ml',
  milk: '150ml'
};

const cafeMocha = {
  ...latte, // cafeMocha 객체 안에서 latte객체의 프로퍼티 목록을 복사붙여넣기 할 수 있다.
  chocolate: '20ml',
}

console.log(latte); // {esspresso: "30ml", milk: "150ml"}
console.log(cafeMocha); // {esspresso: "30ml", milk: "150ml", chocolate: "20ml"}







/* 주의 사항 */
/* 배열을 Spread 하면 새로운 배열을 만들거나 함수의 아규먼트로 쓸 수 있었지만, 객체로는 새로운
배열을 만들거나 함수의 아규먼트로 사용할 수는 없다. */
const latte = {
  esspresso: '30ml',
  milk: '150ml'
};

const cafeMocha = {
  ...latte,
  chocolate: '20ml',
}

[...latte]; // Error

(function (...args) {
  for (const arg of args) {
    console.log(arg);
  }
})(...cafeMocha); // Error

/* 객체를 spread할 때는 반드시 객체를 표현하는 중괄호 안에서 활용해야 한다 */