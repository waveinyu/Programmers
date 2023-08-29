// https://school.programmers.co.kr/learn/courses/30/lessons/120808

// 기약분수 만들기
// : 분자와 분모의 최대공약수로 약분, 보통 유클리드 호제법이 효율적

// - 최소공배수(Lowest Common Divisor, LCD) lcm(a, b) 혹은 [a, b]
// - 최대공약수(Greatest Common Divisor, GCD) gcd(a, b) 혹은 (a, b)
// - 유클리드 호제법(최대공약수)
//   a > b, a와 b를 서로 나눌 때 나누어진다면 b는 최대 공약수

// function solution(denum1, num1, denum2, num2) {
//   let result = [];
//   let d = denum1 * num2 + denum2 * num1;
//   let n = num1 * num2;
//   const getGCD = (a, b) => (b === 0 ? a : getGCD(b, a % b));
//   const gcd = getGCD(d, n);
//   return (result = [d / gcd, n / gcd]);
// }
// console.log(solution(1, 2, 3, 4));

/* // https://school.programmers.co.kr/learn/courses/30/lessons/120809
// map 함수 이용 :  배열.map((요소, 인덱스, 배열) => { return 요소 });
// 배열 안의 요소를 1대1로 짝지어주는 것
function solution(num) {
  const result = num.map((n) => n * 2);
  return result;
}

const solution2 = (numbers) => numbers.map((number) => number * 2);
console.log(solution2([1, 2, 3, 4, 5]));

function solution3(numbers) {
  return numbers.reduce((a, b) => [...a, b * 2], []);
}
console.log(solution3([1, 2, 3, 4, 5])); */

/* // https://school.programmers.co.kr/learn/courses/30/lessons/120811
// 오름차순 후 배열의 길이 / 2 의 나머지, 반올림한 수의 -1번째 요소 리턴
function solution(arr) {
  arr.sort((a, b) => a - b);
  const mid = Math.round(arr.length / 2);
  return arr[mid - 1];
}
console.log(solution([1, 2, 7, 10, 11]));
 */

/* // https://school.programmers.co.kr/learn/courses/30/lessons/120813
// 홀수 추출 후 오름차순 정렬
function solution(n) {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 1) {
      arr.push(i);
    }
  }
  return arr;
}
console.log(solution(10));
 */

// https://school.programmers.co.kr/learn/courses/30/lessons/120812#
function solution(array) {
  var answer = 0;
  if (array.length === 1) return array[0];

  console.log(array);
  console.log("array 요소의 최대값", Math.max.apply(null, array)); // 제약조건
  let result = new Array(Math.max.apply(null, array) + 1).fill(0);
  console.log("빈도수 담은 배열 result", result);
  console.log(result.length);

  for (let i = 0; i < array.length; i++) {
    // 제약조건 0
    console.log("before :::: ", result[array[i]]);
    result[array[i]]++;
    console.log("after :::: ", result[array[i]]);
  }
  console.log("누적빈도수 값을 담은 result", result);
  let cnt = 0;
  for (let i = 0; i < result.length; i++) {
    if (result[i] === Math.max.apply(null, result)) {
      cnt++;
      if (cnt === 2) return -1;
    }
  }
  return result.indexOf(Math.max.apply(null, result));
}
console.log(solution([1, 2, 3, 3, 3, 4]));

// result = [1, 1, 3, 1]
// result = [1, 3, 1, 1, 3] ----> -1
// let cnt = 0
// for (let i = 0; i < result.length; i++){
// if(result[i] === Math.max.apply(null, result)){
//     cnt++
// }
// }
