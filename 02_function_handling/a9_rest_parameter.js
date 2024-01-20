function printRank(first, second, ...others) {
  console.log('코드잇 레이스 최종 결과');
  console.log(`우승 : ${first}`);
  console.log(`준우숭 : ${second}`);
  for (let arg of others) {
    console.log(`참가자 : ${arg}`);
  }
}

printRank('phil', 'won', 'emma', 'min', 'luke');


/* rest parameter는 배열이므로 배열의 메서드를 사용할 수 있다 */

function printArguments(...args) {
  console.log(args.splice(0, 2)); // 'young', 'mark'
  console.log('-------------')
}

printArguments('young', 'mark', 'koby')