/* finally 문 */

try {
  // 실행할 코드
} catch (err) {
  // 에러가 발생했을 때 실행할 코드
} finally {
  // 항상 실행할 코드
}
/* try 문에 에러 여부와 상관없이 마지막에 실행시킬 의도를 가진것이 finally문이다 */

/* 참고로 finally 문에서 에러가 발생할 경우에는 다시 그 위에 있는 catch문으로 넘어가진 않는다 */

/* 만약 finally 문에서도 에러 처리가 필요한 경우에는 아래처럼 try catch문을 중첩해서 활용하면 된다 */
try {
  try {
    // 실행할 코드
  } catch (err) {
    // 에러가 발생했을 때 실행할 코드
  } finally {
    // 항상 실행할 코드
  }
} catch (err) {
  // finally문에서 에러가 발생했을 때 실행할 코드
}