/* 에러와 에러 객체 */
console.log('시작!');

const error = new TypeError('타입 에러가 발생했습니다.');

throw error;

console.log(error.name);
console.log(error.message);

console.log('끝!')


/* 에러 객체는 기본적으로 에러 이름을 담고 있는 name 프로퍼티와 에러 내용을 담고 있는 message 프로퍼티를 
가지고 있다. */
/* 에러가 발생하면 자동으로 에러의 내용이 담긴 여러 객체가 만들어진다 */
