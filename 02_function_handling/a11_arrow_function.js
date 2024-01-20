const getTwice = number => number * 2;

console.log(getTwice(3)); // 6

const sum = (a, b) => {
  const result = a + b;
  return result;
}

const getCodeit = () => ({ name:'codeit', });

console.log(sum(10, 5));
console.log(getCodeit());

/* Arrow Function은 arguments 객체가 없다 */
/* 또한 모든 Arrow Function은 익명 함수라서 변수에 할당하거나
다른 함수를 호출할 때 아규먼트로 사용된다. */