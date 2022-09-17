// Q 2-gram
// 2-gram이란 문자열에서 2개의 연속된 요소를 출력하는 방법입니다.
// 예를 들어 'Javascript'를 2-gram으로 반복해 본다면 다음과 같은 결과가 나옵니다.

// 입력
// Javascript
// 출력
// J a
// a v
// v a
// a s
// s c
// c r
// r i
// i p
// p t
// 입력으로 문자열이 주어지면 2-gram으로 출력하는 프로그램을 작성해 주세요.

// Answer
//Omuing
const words = "안녕하세용";
for (let i = 0; i < words.length - 1; i++) {
  console.log(words[i], words[i + 1]);
}
//sjshin

// 🌸 sePark 🌸
function twoGram(word) {
  for (let i = 0; i < word.length - 1; i++) {
    console.log(word[i], word[i + 1]);
  }
}
twoGram(Javascript);

//kh
// const word = prompt("단어를 입력하세요.");
// for (i = 0; i < word.length - 1; i++) {
//   console.log(word[i], word[i + 1]);
// }
