// 개요
/* 프로퍼티네임으로 이름이 있는 여러 값들을 묶는 객체와 비슷한 Map
인덱스를 통해 순서가 있는 여러 값들을 묶는 배열과 비슷한 Set */

// Set
/* 여러 개의 값을 순서대로 저장한다는 점에서 배열과 비슷
하지만 배열의 메소드는 활용x, map처럼 set만의 메소드로만 값을 다룸 */

// Set 생성
const members = new Set();

// set.add(value): 값을 추가하는 메소드. (메소드를 호출한 자리에는 추가된 값을 가진 Set 자신을 반환.)
members.add('영훈'); // Set(1) {"영훈"}
members.add('윤수'); // Set(2) {"영훈", "윤수"}
members.add('동욱'); // Set(3) {"영훈", "윤수", "동욱"}
members.add('태호'); // Set(4) {"영훈", "윤수", "동욱", "태호"}

// set.has(value): Set 안에 값이 존재하면 true, 아니면 false를 반환하는 메소드.
console.log(members.has('동욱')); // true
console.log(members.has('현승')); // false

// set.size: 요소의 개수를 반환하는 프로퍼티. (메소드가 아닌 점 주의! 배열의 length 프로퍼티와 같은 역할)
console.log(members.size); // 4

// set.delete(value): 값을 제거하는 메소드. (메소드를 호출한 자리에는 셋 내에 값이 있어서 제거에 성공하면 true, 아니면 false를 반환.)
members.delete('종훈'); // false
console.log(members.size); // 4
members.delete('태호'); // true
console.log(members.size); // 3

// set.clear(): Set 안의 모든 요소를 제거하는 메소드.
members.clear();
console.log(members.size); // 0


// set은 for of 같은 반복문을 통해서만 개별 값에 접근이 가능함.
/* 그러함에도 불구하고 set이 유용하게 사용되는 경우는 중복을 허용하지 않는 값들을 모을때 이다.
set은 중복된 값을 허용하지 않는 독특한 특징이 있음. */

const numbers = [1, 3, 4, 3, 3, 3, 2, 1, 1, 1, 5, 5, 3, 2, 1, 4];
const uniqNumbers = new Set(numbers);

console.log(uniqNumbers); // Set(5) {1, 3, 4, 2, 5}