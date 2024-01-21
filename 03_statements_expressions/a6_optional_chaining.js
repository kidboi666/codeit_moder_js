/* 옵셔널 체이닝 (Optional Chaining) */
// 보다 안전하게 프로퍼티에 접근하는 방법
function printCatName(user) {
  console.log(user.cat.name);
}
const user2 = {
  name: 'Young',
}
console.log(user2.cat); // undefined
printCatName(user2); // TypeError: Cannot read property 'name' of undefined





/* 이 경우 AND연산자를 활용해 user2.cat이 null이나 undefined가 아니라는걸 먼저 검증하고
접근해야 에러를 방지 할 수 있다. */
function printCatName(user) {
  console.log(user.cat && user.cat.name);
}  /* 코드가 길어지면 가독성이 떨어지는 단점이 있음 */








/* ?.연산자의 등장 */
function printCatName(user) {
  console.log(user.cat?.name); // user에 cat프로퍼티가 있는지 확인하고 name프로퍼티를 접근한다
}
/* ?. 연산자 왼편의 프로퍼티값이 undefined 또는 null이 아니라면 그 다음 우측에 프로퍼티 
값을 리턴하고 그렇지 않으면 undefined를 반환하는 문법이다 */




// 옵셔널 체이닝 연산자의 연산을 삼항 연산자로 구현해보면 다음과 같다.
function printCatName(user) {
  console.log((user.cat === null || user.cat === undefined) ? undefined : user.cat.name);
}




// null 병합 연산자와 함께 활용하면 다음과 같이 응용이 가능하다
function printCatName(user) {
  console.log(user.cat?.name ?? '함께 지내는 고양이가 없습니다.');
}
const user3 = {
  name: 'young',
}
printCatName(user2); // 함께 지내는 고양이가 없습니다.