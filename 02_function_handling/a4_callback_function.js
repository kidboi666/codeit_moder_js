function makeQuiz(quiz, answer, success, fail) {
  if (prompt(quiz) === answer ) {
    console.log(success());
  } else {
    console.log(fail());
  }
}

function getSuccess() {
  return '정답!';
}

function getFail() {
  return '오답!';
}

const question = '3 + 5 = ?';
//                        콜백 함수, 콜백 함수
makeQuiz(question, '8', getSuccess, getFail)

/* 다른 함수의 파라미터에 전달된 함수를 콜백 함수라고 한다 */