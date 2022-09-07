// Q 영하네 반은 국어, 수학, 영어 시험을 보았습니다. 영하는 친구들의 평균 점수를 구해주기로 했습니다.
// 공백으로 구분하여 세 과목의 점수가 주어지면 전체 평균 점수를 구하는 프로그램을 작성하세요. 
// 단, 소숫점 자리는 모두 버립니다.

// Answer
//Omuing 0
const scores = ["70", "82", "95"]
let sum = 0;
for(let i=0; i<scores.length; i++) {
  sum = sum + parseInt(scores[i], 10);
}
console.log(Math.floor(sum/scores.length));
//Omuinge 답안
const scores = prompt().split(' ')
console.log(scores)
let sum = 0;
for(let i=0; i<scores.length; i++) {
  sum = sum + parseInt(scores[i], 10);
}
console.log(Math.floor(sum/scores.length));

//sjshin




//🌸 sePark 🌸
// function average(sub1, sub2, sub3) {
//   let sum = sub1 + sub2 + sub3
//   console.log(Math.floor(sum / 3))
// }

// average(78, 35, 23) => 45
// average(89, 98, 45) => 77