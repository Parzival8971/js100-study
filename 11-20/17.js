// Q 유주는 놀이공원 아르바이트 중입니다. 그런데 놀이기구마다 키 제한이 있습니다.
//유주가 담당하는 놀이기구는 키가 150cm 이상만 탈 수 있습니다.
//입력으로 키가 주어지면
//키가 150이 넘으면 YES를 틀리면 NO를 출력하는 프로그램을 작성하세요.

// Answer
//// 🙈 Oum 1 - 2회독 중
const heightUp = [170, 179, 180, 185];
for (let i = 0; i < heightUp.length; i++) {
  if (heightUp[i] >= 180) {
    console.log(i, "번째", "180이 넘으시네요!");
  } else {
    console.log(i, "번째", "하하 우유좀 마셔야겠는걸?");
  }
}
// 일반 답안
const height = prompt("키를 입력하세요.");
if (height >= 150) {
  console.log("YES");
} else {
  console.log("NO");
}
//sjshin

//🌸 sePark 🌸
// function limitHeight(height) {
//   if(height >= 150){
//     console.log('YES')
//   }else {
//     console.log('NO')
//   }
// }

// limitHeight(150) =>'YES'
// limitHeight(130) =>'NO'

// kh
// const n = prompt('키를 입력하세요.');
// console.log(n >= 150 ? 'YES' : 'NO');
