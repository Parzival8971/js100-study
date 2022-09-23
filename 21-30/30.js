// Q 문자열 속 문자 찾기
// 문자 pineapple에는 apple이라는 문자가 숨어 있습니다.
// 원범이는 이렇듯 문자열 속에 숨어있는 문자를 찾아보려고 합니다.
// 첫번째 입력에서는 문자열이 입력되고, 두번째에는 찾을 문자가 입력되어야 합니다.
// 그 문자가 시작하는 index를 반환하는 프로그램을 만들어 주세요

// 입력
// pineapple is yummy
// apple
// 출력
// 4

// Answer
//// 🙈 Oum 1 - 2회독 중
// const words = "파인애플은 정말 맛있습니다.";
// const keywords = "애플";
// console.log(words.indexOf(keywords));

// 😎 sjshin
// const index = "펜파인애플애플펜"
// const keyword = "애플"
// console.log(index.indexOf(keyword)); // 3

// 🌸 sePark 🌸
// function find(words, keywords) {
//   return words.indexOf(keywords);
// }

// find("파인애플은 정말 맛있습니다.", "애플");

//kh
// const word = prompt("문자열과 찾을 단어를 입력하세요.").split(" ");
// console.log(word[0].indexOf(word[1]));
