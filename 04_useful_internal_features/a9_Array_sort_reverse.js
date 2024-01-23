// sort
const letters = ['D', 'C', 'E', 'B', 'A'];
const numbers = [1, 10, 4, 21, 36000];

letters.sort();
numbers.sort();

console.log(letters); // (5) ["A", "B", "C", "D", "E"]
console.log(numbers); // (5) [1, 10, 21, 36000, 4]

/* 기본적으로 sort 메소드는 유니코드 기준으로 정렬한다.
숫자를 오름차순이나 내림차순으로 정렬하려면 다음과 같은 콜백함수를 넣어야한다. */

numbers.sort((a, b) => (a - b));
console.log(numbers); // [1, 4, 10, 21, 36000] 오름차순
numbers.sort((a, b) => (b - a));
console.log(numbers); // [36000, 21, 10, 4, 1] 내림차순

// sort는 메소드를 실행하는 원본 배열의 요소들을 정렬한다. ---------




// reverse
const letters2 = ['a', 'c', 'b'];
const numbers2 = [421, 721, 353];

letters2.reverse();
numbers2.reverse();

console.log(letters2); // (3) ["b", "c", "a"]
console.log(numbers2); // (3) [353, 721, 421]

// reverse 메소드에 파라미터 따윈 없다.
// 얘도 원본 배열 자체를 정렬해버림