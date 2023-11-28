## [K번째 수](https://school.programmers.co.kr/learn/courses/30/lessons/42748)

- 2023.08.20 테스트 4, 5만 통과
    
    ```jsx
    function solution(array, commands) {
        var answer = [];
        let tempArray = []
    
        for (let i = 0; i < commands.length; i++){
            let newArray = [...array]
            let firstIdx = commands[i][0] - 1
            let lastIdx = commands[i][1] - 1
            let findingIdx = commands[i][2] - 1 
            
            if (firstIdx !== lastIdx) {
                tempArray = newArray.splice(firstIdx, lastIdx).sort((a, b)=>a - b)
                answer.push(tempArray[findingIdx])
            } else {
                tempArray = newArray.splice(firstIdx, 1).sort((a, b)=>a - b)
                answer.push(tempArray[findingIdx])
            }
       }
        return answer;
    }
    ```
    

---

```jsx
function solution(array, commands) {
  let answer = [];
    
  for (const command of commands) {
    let setArray = array.slice(command[0] - 1, command[1]).sort((a, b) => a - b);
    answer.push(setArray[command[2] - 1]);
  }
    
  return answer;
}
```

1. splice와 slice의 차이를 몰랐다.. **splice는 원본 배열 자체를 수정하고, slice는 원본 배열을 수정하지 않는다.**
2. 뭔가 이상하다고 찾아보게 된 건, for of문으로 좀 더 단순하게 코드를 작성하면서 되짚어봤는데도 결과가 어제와 똑같았기 때문이다. 그럼 내가 작성한 반복문 자체에는 (일단)문제가 없어보였는데, 어디서 문제일까 해서 이번엔 문제 검색을 해봤다. 그랬더니 나와 같이 푼 사람과의 차이가 메서드라는 걸 알게 됐다.