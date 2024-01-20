function ignoreFirst(first, ...args) {
  for (let arg of args) {
    console.log(arg);
  }
}

function ignoreFirst(...arg) {
  arg.splice(0, 1);
  for (let item of arg) {
    console.log(item);
  }
}

function ignoreFirst(...arg) {
  let i = arg.length;
  console.log(arg.splice(1, i));
}



ignoreFirst('1세대', '2세대', '3세대');
ignoreFirst('곰팡이', '강아지', '고양이');
ignoreFirst(20, 9, 18, 19, 30, 34, 40);