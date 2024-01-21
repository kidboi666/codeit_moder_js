/* try catch 문 */
try {
  // 코드
} catch (error) {
  // 에러가 발생했을 때 동작할 코드
}
/* try catch문의 이해.
자바스크립트에서 에러를 다루는 방법 중 하나이며, try catch문을 활용하면 에러가 발생해도 프로그램을 멈추지 않고
에러가 발생했을 때 동작할 코드를 다룰 수 있게 된다.

try문에서 동작할 코드를 작성하고 에러가 발생했을 때 동작할 코드를 catch문 안에 작성하면 되는데, 이때 try문에서
에러가 발생해서 에러 객체가 만들어지면 그 에러 객체를 catch 문 안에서 다룰 수 가 있다. */



try {
  console.log('에러 전');
  const codeit = '코드잇';
  console.log(codeit);
  codeit = 'codeit'; // 상수에 값을 할당하려 하므로 에러 발생

/* 이 구간 아래에 try문은 실행되지 않고 catch문으로 넘어가게 된다 */

  const language = 'JavaScript';
  console.log(language);

} catch(e) { 
  console.log('에러 후');
  console.error(e);
  console.log(e.name);
  console.log(e.message);
}
/* 에러가 발생하면 에러 객체가 생성되고 콘솔에 출력되는데, try문안에서도 똑같이 에러 객체가
생성된다. 하지만 이 경우엔 콘솔에 바로 에러 객체가 출력되는게 아니라 catch문의 파라미터로
전달된다. */






/* try catch 활용하기 */
function printMembers(members) {
  try {
    for (const member of members) {
      console.log(member);
    }
  } catch (err) {
    console.error(err);
    alert(`${err.name}가 발생했습니다. 콘솔창을 확인해 주세요`);
  }
}
const teamA = ['미진','지유','지원','치호'];
printMembers(teamA); // 미진, 지유, 지원, 치호
const codeit = { name: 'codeit' }; // for .. of 문은 배열에서만 사용할 수 있는 반복문이다. 고로 에러 발생
printMembers(codeit); // error
const teamB = ['미진','치호','지원','지유'];
printMembers(teamB); // 미진, 치호, 지원, 지유







/* try catch도 블록 스코프다 */
try {
  const title = 'codeit';
} catch (err) {
  console.error(err);
}
console.log(title);  // 참조 에러 (title변수를 찾을 수 없다)
/* title변수는 try문 안에서 선언한 변수이므로 블록 스코프이다.
즉, try문 밖에서는 찾을 수 없다.catch문 안에서도 찾을 수 없다. */

/* 위와 같은 에러의 경우 실행가능한 코드에서 발생한 에러를 가르켜 예외 (Exception) 이라 하고
코드가 실행 후에 발생되는 에러를 다루는 과정을 가르켜서 예외 처리 (Exception Handling) 이라고 한다. 

오타로 인한 에러는 실행 조차 되지 않으면서 Syntax Error를 일으킨다. */

