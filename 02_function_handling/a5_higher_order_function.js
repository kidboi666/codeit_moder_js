function getPrintHi() {
  return function() {
    alert('hi!');
  }
}

const sayHi = getPrintHi();

sayHi(); // hi!!

/* getPrintHi같이 함수를 리턴하는 함수를 
고차 함수(higher order function) 라고 한다 */

getPrintHi()(); 
// getPrintHi함수의 리턴값인 함수의 리턴값을 바로 호출


/* 함수 요약 */
/*
 함수는 변수나 다른 데이터 구조 안에 할당 될 수 있고
 다른 함수의 파라미터로 전달될 수도 있고
 다른 함수의 리턴값이 될 수도 있다.
 
 프로그래밍에서 이러한 특징을 가진 함수를

 일급 함수 (First Class Function) 이라고 한다.
*/