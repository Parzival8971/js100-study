// Q 별 찍기
// 크리스마스 날, 은비는 친구들과 함께 파티를 하기로 했습니다. 그런데, 크리스마스 트리를 사는 것을 깜빡하고 말았습니다. 온 가게를 돌아다녀 봤지만 크리스마스 트리는 모두 품절이었습니다. 하는 수 없이 은비는 프로그래밍으로 트리를 만들기로 합니다. (??? 세상에;;ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ)

입력
5
출력
    *
   ***
  *****
 *******
*********

// Answer
//Omuing_ver1 => 제일 약한 for문 여기는 평생 복습.......
const stack = 5;

for(let i=1; i <= stack; i++) {
  let namus = '';
  for(let k=1; k<=stack-i; k++){
    namus = namus + ' ';
  }
  for(let j=1; j<= i*2-1; j++) {
    namus = namus + '*';
  }
  console.log(namus)
}

//sjshin