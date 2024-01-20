function printArguments(a, b, c) {
  for (const arg of arguments) {
    console.log(arg);
  }
  console.log('------------')
}

printArguments('young', 'mark', 'koby')
printArguments('captain')
printArguments('jayden', 'scott')
printArguments('suri', 'jack', 'joy', 'noel')


/* arguments는 유사 배열이므로 배열의 메서드를 사용할 수 없다 */
/* arguments는 전달된 모든 아규먼트를 다루는 객체다 */