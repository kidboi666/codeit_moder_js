/* filter */
/* 특별한 조건을 만족하는 것만 추려내고 싶을 때 filter 메소드를 사용한다 */
const devices = [
  { name: 'galaxy', brand: 'samsung' },
  { name: 'macbook', brand: 'apple' },
  { name: 'ipad', brand: 'apple' },
  { name: 'galaxyWatch', brand: 'samsung' },
  { name: 'iMac', brand: 'apple' },
  { name: 'galaxyBuds', brand: 'samsung' },
  { name: 'gram', brand: 'lg' },
  { name: 'galaxyBook', brand: 'samsung' },
  { name: 'surfacePro', brand: 'microsoft' },
  { name: 'zenbook', brand: 'asus' },
  { name: 'macbookAir', brand: 'apple' },

];
const apples = devices.filter((el) => {
  return el.brand === 'apple';
});
console.log(apples); // 브랜드가 apple인 배열이 나열됨
/* filter메소드를 호출한 배열을 반복하면서 콜백함수가 리턴하는 조건식이 true가 되는
요소만 모아서 새로운 배열을 리턴한다 */


const macbook = devices.find((el) => {
  return el.brand === 'apple';
});
console.log(macbook); // 브랜드가 apple인 첫 값 하나가 그대로 반환
/* find 메소드를 호출한 배열을 반복하면서 콜백함수가 리턴하는 조건식이 true인 요소
하나를 반환 */