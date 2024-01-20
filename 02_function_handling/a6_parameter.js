// Parameter
function greeting(name) {
  console.log(`hi my name is ${name}`);
}
// 함수 선언 부분에서 소괄호 안에 작성되는 것이 파라미터

// 함수를 호출하는 부분에서 파라미터로 전달하는 값이 아규먼트
greeting('javascript')


function greeting2(name = 'codeit', interest = 'javascript') {
  console.log(`hi name is ${name}!`);
  console.log(`i like ${interest}`);
}

greeting2(undefined, 'python'); 
// 파라미터의 기본값은 undefined이거나 해당 어규먼트 자리에 아무것도 없을때 사용된다.
// 하지만 그 이외에 값이 해당 어규먼트 자리에 오면 무조건 그 값을 파라미터로 받는다.

function defaultTest(x, y = x + 3) {
  console.log(`x : ${x}`);
  console.log(`y : ${y}`);
}

defaultTest(5); // 'x : 5, y : 8'
defaultTest(2, 3); // 'x : 2, y : 3'