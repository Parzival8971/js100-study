// Q 대문자만 지나가세요
// 진구는 영어 학원 아르바이트를 하고 있습니다.
// 반 아이들은 알파벳을 공부하는 학생들인데 오늘은 대문자 쓰기 시험을 봤습니다.
// 알파벳 하나만을 입력하고 그 알파벳이 대문자이면 YES를 아니면 NO를 출력하는 프로그램을 만들어 주세요.

// Answer
const words = "b";
if (words === words.toUpperCase()) {
  console.log("대문자");
} else {
  console.log("소문자");
}
//sjshin

// 🌸 sePark 🌸
function upper(letter) {
  if (letter === letter.toUpperCase()) {
    console.log("YES");
  } else {
    console.log("NO");
  }
}

upper("c");

//kh
// const word = prompt("문자를 입력하세요.");
// console.log(word === word.toUpperCase() ? "YES" : "NO");
