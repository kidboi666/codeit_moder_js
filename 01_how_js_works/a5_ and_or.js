console.log(null && undefined) // null
console.log(0 || true) // true
console.log('0' && NaN) // NaN
console.log({} || '123') // {}

/*
AND연산자 (&&) 는 왼쪽값이 truthy하면 오른쪽 값을 리턴하고
왼쪽값이 falsy하면 그대로 왼쪽값을 리턴한다.

OR연산자 (||) 는 왼쪽값이 truthy하면 그대로 왼쪽 값을 리턴하고
왼쪽값이 falsy하면 오른쪽값을 리턴한다.
*/

function print(value) {
  const message = value || 'Codeit';

  console.log(message);
}

print(); // 'Codeit'
print('JavaScript'); // 'JavaScript'

/*
연산자 우선순위에서는 AND연산자가 우선순위가 더 높다.
*/
console.log(true || false && false); // true
console.log((true || false) && false); // false

console.log('Codeit' || NaN && false); // Codeit
console.log(('Codeit' || NaN) && false); // false
