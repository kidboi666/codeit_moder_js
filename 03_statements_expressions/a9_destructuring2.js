/* 객체를 활용한 Destructuring */
const macbook = {
  title: '맥북 프로 16형',
  price: 3690000,
  memory: '16gb',
  storage: '1tb ssd 저장 장치',
  display: '16형 retina 디스플레이',
}
/*
const title = macbook.title;
const price = macbook.price;

객체의 프로퍼티를 사용하고자 할때 매번 점 표기법을 작성하지 않고 프로퍼티 네임 자체를
변수처럼 사용하고자 할 때 Destructuring을 활용하게 된다. */
const { title, price, color = 'silver' } = macbook;
/* 할당 연산자 오른편의 이 객체에서 왼편에 선언된 변수의 이름과 똑같은 프로퍼티 네임이
있으면 이 변수 이름에 그 값이 할당되는 방식으로 동작한다 */
/* 할당 연산자를 통해서 기본값을 지정해 줄 수도 있다 */
console.log(title); // 맥북 프로 16형
console.log(price); // 3690000
console.log(color); // silver







const { title, ...rest } = macbook;
/* 남은 프로퍼티를 ...변수에 할당해 하나의 객체로 모을 수 도 있다. */
console.log(title); // 맥북 프로 16형
console.log(rest); // { price: 3690000, memory: 16gb, --- }







/* 변수이름을 다른 변수이름으로 할당 */
const macbook2 = {
  title: '맥북 프로 16형',
  price: 3690000,
  memory: '16gb',
  storage: '1tb ssd 저장 장치',
  display: '16형 retina 디스플레이',
  'serial-num': '1234-3456-32324', /* 하이픈- 이 있어 변수이름으론 사용하지 못해도 
  프로퍼티 네임으론 사용 가능하다 */
};
const { title: product, 'serial-num': serialNum } = macbook2;
/* 
디스트럭쳐링할때는 반드시 하이픈이 없는 새 변수 이름으로 선언해야 사용이 가능하다
*/
console.log(product);
console.log(serialNum);







/* computed 프로퍼티 네임으로 활용하는 법 */
const propertyName = 'title';
const { [propertyName]: product } = macbook2;
console.log(product); // 맥북 프로 16형