const flowers = ['장미', '수국', '백합', '튤립', '진달래'];

for (let i = 4; i; i = i - 2) {
  console.log(flowers[i]);
}

if (flowers.length) {
  console.log(flowers[3]);
}

if (Number('codeit')) {
  console.log(flowers[1]);
}

/*
for문에서 i가 0이 되는 순간 조건부가 falsy가 되므로 반복문은
중단한다. 즉 콘솔에는,
'진달래'
'백합'
'튤립'
이 출력된다.
*/