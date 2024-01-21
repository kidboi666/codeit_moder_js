// 모던한 프로퍼티 표기법
const title = 'codeit';
const birth = 2017;
const job = '프로그래밍 강사';

const user = {
  title, // <- title: title,
  birth,
  job,
}
/* 변수에 할당된 값을 활용해서 프로퍼티를 만들 수 있다.




변수 뿐 아니라 함수를 메소드로 만들 때 도 축약형 표기가 가능하다 */

function getFullName() {
  return `${this.firstName} ${this.lastName}`;
}
const user2 = {
  firstName: 'tess',
  lastName: 'jang',
  getFullName, // <- getFullName: getFullName
}
console.log(user2.getFullName()); // tess jang





/* 함수 내부에서 메서드를 만들때도 축약이 가능하다 */
const user3 = {
  firstName: 'tess',
  lastName: 'jang',
  getFullName() { // <- getFullName: function() {}
    return `${this.firstName} ${this.lastName}`;
  }
}






/* 계산된 속성명 (computed property name) */
// 표현식의 값을 프로퍼티 네임으로 쓸 수가 있다.
const user4 = {
  ['code' + 'it']: 'value',
};
console.log(user4); // {codeit: 'value'}






const propertyName = 'birth';
const getJob = () => 'job';
const codeit = {
  ['topic'+'Name']: 'modern javascript',
  [propertyName]: 2017,
  [getJob()]: '프로그래밍 강사',
};
console.log(codeit); // { topicName: 'modern javascript', birth: 2017, job: '프로그래밍 강사'}
/* 위 함수를 호출하는 다양한 방식들 */
codeit.topicName;
codeit[propertyName]; // 표현식을 그대로 사용해서 대괄호 표기법으로 접근
codeit[getJob()];
codeit.job; // 표현식이 가지는 값을 통해 점 표기법으로 접근
codeit.birth;
//
codeit.propertyName; // 표현식을 그대로 사용하려면 대괄호 표기법으로 접근해야하므로 에러
/* 변수에 담긴 값을 사용하거나 함수의 리턴값을 사용할 수 도 있어 프로퍼티 네임을 만드는데
보다 자유롭게 상상할 수 있다 */
