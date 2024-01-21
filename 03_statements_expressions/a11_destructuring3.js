// 구조 분해 (Destructuring)
function getArray() {
  return ['컴퓨터', '냉장고', '세탁기'];
}

const [el1, el2, el3] = getArray();

console.log(el1)
console.log(el2)
console.log(el3)
/* 함수의 리턴값이 배열인 경우에도 구조 분해 할당이 가능하다 */




/* 배열 자체를 매개변수로 받는 경우 */
function printWinners([macbook, ipad, airpods, ...coupon]) {
  console.log(`${macbook}`);
  console.log(`${ipad}`);
  console.log(`${airpods}`);

  for (let user of coupon) {
    console.log(`${user}님`);
  }

  console.log(`${coupon.length}`);
}
const ranks = ['효준','효신','재훈','소원','현승','종훈'];
printWinners(ranks); 





/* 객체 */
const macbook = {
  title: '맥북 프로 16형',
  price: 3690000,
  memory: '16gb',
  storage: '1tb ssd 저장 장치',
  display: '16형 retina 디스플레이',
};
function printSummary({ title, color = 'silver', price }) {
  console.log(`${title}`);
  console.log(`${color}`);
  console.log(`${price}`);
}
printSummary(macbook);
/* 함수의 파라미터에 구조 분해 할당을 사용하여 함수 내부를 좀더 간결하게 작성할 수 있다 */






/* DOM에서의 활용 */
const $btn = document.createElement('button');
//                          파라미터 단에서 객체 분해
$btn.addEventListener('click', ({ target }) => {
  target.classList.toggle('checked');
}) /* 매번 event객체에 접근해 target 프로퍼티를 가져오지 않고 target프로퍼티에 바로 접근해
코드의 간결함을 만들 수 있다 */
document.body.append($btn);


$btn.addEventListener('click', ({ target }) => {
  const { classList } = target;
  classList.toggle('checked');
}) /* 객체 안에 객체에 프로퍼티를 구조 분해 할당해 사용, 흔한 경우는 아니다 */
document.body.append($btn);
/* 이러한 구조를
중첩 객체 구조 분해 ( Nested Object Destructuring ) 이라고 한다 */