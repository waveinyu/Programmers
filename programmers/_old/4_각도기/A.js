// if문로 분기 처리
function solution(angle) {
  let result = 0;
  if (angle < 90) return 1;
  if (angle == 90) return 2;
  if (angle < 180) return 3;
  return 4;
}

// 삼항 연산자
function solution2(angle) {
  return angle < 90 ? 1 : angle == 90 ? 2 : angle < 180 ? 3 : 4;
}

console.log(solution(90));
console.log(solution2(120));
