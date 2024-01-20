function getFullName() {
  return `${this.firstName} ${this.lastName}`
}

const user = {
  firstName: 'Tess',
  lastName: 'Jang',
  getFullName: getFullName,
};

const admin = {
  firstName: 'Alex',
  lastName: 'Kim',
  getFullName: getFullName,
};

console.log(user.getFullName()); 
// getFullName 안에서의 this는 getFullName을 호출한 user객체가 담긴다!
console.log(admin.getFullName()); 
// getFullName 안에서의 this는 getFullName을 호출한 admin객체가 담긴다!