function solution(babbling) {
  let answer = 0;
  const canPronounce = ["aya", "ye", "woo", "ma"];
  let arr = [...babbling];
  let count = 0;
  for (let i = 0; i < canPronounce.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (canPronounce[i] === arr[j]) {
        console.log(canPronounce[i]);
        count++;
      }
    }
  }
  answer = count;
  return answer;
}

console.log(solution(["aya", "yee", "u", "maa"]));
console.log(solution(["ayaye", "uuu", "yeye", "yemawoo", "ayaayaa"]));

// 1) 제시된 네 가지 발음
// 2) 네 가지 발음을 조합해서 만들 수 있는 발음
// 3) 연속해서 같은 발음은 불가능
