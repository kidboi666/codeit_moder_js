// reduce
const numbers = [1, 2, 3, 4];

/* reduce의 틀 */
numbers.reduce((acc, el, i, arr) => {
  return nextAccValue;
}, initialValue);
/* 첫번째 매개변수로 오는 acc는 accumulator(누산기)로써의 역할로
항상 reduce문의 이전 콜백함수의 반환값을 (=누산값을) 가지게된다. */


/* reduce를 이용하여 배열의 모든 숫자를 합하는 코드 */
const sumAll = numbers.reduce((acc, el, i) => {
  console.log(`${i}번 index의 요소로 콜백함수가 동작중입니다.`);
  console.log(`acc:`, acc);
  console.log(`el:`, el);
  console.log('---------');
return acc + el;
}, 0);

console.log('sumAll:', sumAll);



