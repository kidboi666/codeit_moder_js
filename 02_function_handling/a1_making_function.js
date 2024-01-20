// 함수 선언문
function js() {
  console.log('js')
}
// 함수 스코프를 가진다


// 함수 표현식
let js = function() {
  console.log('js')
}
// 할당된 변수의 특성에 따라 스코프가 결정
// var는 함수 스코프
// let,const는 블록 스코프