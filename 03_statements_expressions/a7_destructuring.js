/* 구조 분해 (Destructuring) */
// 배열을 분해해서 할당하는 원리
const rank = ['효준', '유나', '민환', '재하'];

// const macbook = rank[0];
// const ipad = rank[1];
// const airpods = rank[2];
// const coupon = rank[3];
const [macbook, ipad, airpods, ...coupon] = rank; // 할당값은 배열이 와야 에러가 생기지 않는다
/* 함수의 Rest Parameter처럼 배열을 분해해서 할당할때 앞쪽에 있는 변수의 순서대로
요소를 할당하고 남은 나머지 요소를 이 마지막 변수의 배열로 할당하는게 가능하다 */

/* 할당하는 배열의 길이가 선언된 변수의 개수보다 적으면 undefined가 할당된다. 
기본값을 작성하여 undefined대신 기본값을 할당할 수도 있다. */

console.log(macbook);
console.log(ipad);
console.log(airpods);
console.log(coupon);

/* ---------------------------------------------- */


let macbook = '효준';
let ipad = '유나';

console.log('macbook 당첨자:', macbook); // 효준
console.log('ipad 당첨자:', ipad); // 유나

[macbook, ipad] = [ipad, macbook]; // 두 변수의 값을 교환

console.log('macbook 당첨자:', macbook); // 유나
console.log('ipad 당첨자:', ipad); // 효준