function solution(n) {
  let setArray = Array(n)
    .fill(1)
    .map((n, idx) => {
      return n + idx;
    });

  let cnt = 0;
  for (let i = 0; i < setArray.length - 1; i++) {
    if (setArray[i] % 2 !== 0) {
      cnt++;
    }
  }
  return cnt - 1;
}

console.log(solution(10));
