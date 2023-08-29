// https://school.programmers.co.kr/learn/courses/30/lessons/12915
function solution(strings, n) {
    var answer = [];
    
    strings.sort()
    
    strings.sort((a, b) => {
        return a.charCodeAt(n) - b.charCodeAt(n)
    })
    
    return answer = strings 
}