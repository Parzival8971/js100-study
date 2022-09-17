// Q 대소문자 바꿔서 출력하기
// 문자열이 주어지면 대문자와 소문자를 바꿔서 출력하는 프로그램을 작성하세요.

// 입출력
// 입력 : AAABBBcccddd
// 출력 : aaabbbCCCDDD// Answer

// Answer
// 🙈 Oum 1 회독중
const string = "AAABBBcccddd";
let arrs = [];
for(let i=0; i<string.length; i++) {
  if(string[i] === string[i].toUpperCase()){
    arrs.push(string[i].toLowerCase());
  } else {
    arrs.push(string[i].toUpperCase());
  }
}
console.log(arrs.join(""))
//sjshin