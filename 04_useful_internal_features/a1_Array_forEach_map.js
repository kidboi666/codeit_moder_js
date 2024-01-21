/* forEach */
const members = ['영훈','윤수','동욱','태호'];

members.forEach((item, index) => {
  console.log(`${index + 1}번째로 ${item}님이 입장하셨습니다.`);
})
/* forEach는 첫번째 파라미터가 반드시 있어야 대상으로 하는 배열의 요소가 들어온다 */
/* 두번째 파라미터는 그 요소가 있는 인덱스 이다. 이것으로 for of 문보다 다양한 짓거리가 가능해진다 */






/* forEach의 3번째 파라미터 활용법 */
const lastNames = ['강','이','손','성'];

['영훈','윤수','동욱','태호'].forEach((items, index, arr) => {
  console.log(`${lastNames[index]}${items}님이 입장하셨습니다.`)
  /* 3번째 파라미터를 이용한 코드 */
})
/* 배열값 자체에 forEach메소드를 활용하는 경우엔 3번째 
  파라미터를 함수 내에서 유용하게 사용할 수 있다 */





/* map */
/* 사실 위에 forEach문과 사용방식은 같다. 하지만 map의 다른점은 메소드의 호출 결과로
새로운 배열을 반환한다는 것이다. */
const firstNames2 = ['영훈','윤수','동욱','태호'];
const lastNames2 = ['강','이','손','성'];

const fullNames = firstNames2.map((firstName, i) => (lastNames[i] + firstName));
/* map 메소드는 이렇게 콜백 함수 내에서 리턴문을 작성해주게 되면 이 각각의 리턴값으로 구성된
새로운 배열이 이 메소드의 결과로 리턴된다. */
console.log(fullNames); // 강영훈, 이윤수, 손동욱, 성태호

const fullNames2 = firstNames2.forEach((firstName, i) => (lastNames[i] + firstName));
/* forEach는 항상 리턴값이 없기 때문에 변수에 담을 경우 undefined를 반환한다 */
console.log(fullNames2); // undefined, undefined, undefined, undefined


/* 단순히 배열의 반복 작업이 필요한 경우에는 forEach를,
 반복 작업을 통해서 새로운 배열이 필요한 경우에는 map을, */



 

/* 반복중 해당 배열에 요소를 추가하거나 제거하는 경우 주의점 */
const members2 = ['영훈','윤수','동욱','태호'];


members2.forEach((member) => {
  console.log(`${member}님이 입장하셧습니다.`)
  members2.push('코드잇'); // 추가하는 경우엔 추가 이전 반복문 실행 당시에 값까지만 반복문을 실행한다.
  members2.pop(); // 하지만 요소를 제거하는 경우엔 제거 후 줄어든 요소까지만 반복문을 실행한다.
});