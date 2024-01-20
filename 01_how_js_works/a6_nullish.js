/*
Nullish coalescing operator (null 병합 연산자)
연산자 왼편이 null이나 undefined라면 오른편 값이 리턴
연산자 왼편이 값이 있다면 왼편 값이 리턴
*/

const example1 = null ?? 'I'; // I
const example2 = undefined ?? 'love'; // love
const example3 = 'Codeit' ?? 'JavaScript'; // Codeit

console.log(example1, example2, example3); // I love Codeit

/*
OR연산자는 왼편의 값이 falsy값인지를 판단한다면
??연산자는 왼편의 값이 null이나 undefined인지를 판단한다.
*/

const title1 = false || 'codeit';
const title2 = false ?? 'codeit';

console.log(title1); // codeit
console.log(title2); // false

const width1 = 0 || 150;
const width2 = 0 ?? 150;

console.log(width1); // 150
console.log(width2); // 0
