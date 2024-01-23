/* some과 every */
const numbers = [1, 3, 5, 7, 9];

// some: 조건을 만족하는 요소가 1개 이상 있는지
const someReturn = numbers.some((el) => el > 5);
/* 조건을 만족하는 요소를 발견하는 순간 true를 반환하고 반복 종료 */

// every: 모든 요소가 조건을 만족하는지 ( 혹은 )
// every: 조건을 만족하지 않는 요소가 1개 이상 있는지
const everyReturn = numbers.every((el) => el > 5);
/* 조건을 만족하지 않는 순간 false를 반환하고 반복 종료 */

console.log('some:', someReturn);
console.log('every:', everyReturn);


/* 배열 안에서 어떤 조건을 만족하는 요소들을 추려낼 때는 filter,find를..
배열 내의 요소들이 단순히 그 조건을 만족하는 지만 확인하고자 할 때는
some과 every를 사용하는것이 좋다 */