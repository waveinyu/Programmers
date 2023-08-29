// https://school.programmers.co.kr/learn/courses/30/lessons/42748
function solution(array, commands) {
  let answer = [];
  for (const command of commands) {
    let setArray = array.slice(command[0] - 1, command[1]).sort((a, b) => a - b);
    answer.push(setArray[command[2] - 1]);
  }
  return answer;
}
