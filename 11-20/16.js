// Q 문장이 입력되면 거꾸로 출력하는 프로그램을 만들어 봅시다.
입출력;

입력: 거꾸로;
출력: 로꾸거;

// Answer
//Omuing
const reverse = "개발자까지3개월";
const reverseSort = reverse.split("").reverse().join("");
console.log(reverseSort);

//sjshin

//🌸 sePark 🌸
// 풀이 1
// function reverseWord(word) {
//   let arr = [];
//   for(let j = word.length; j > 0; j--){
//     arr.push(word.slice(j-1, j));
//   }
//   console.log(arr.join(''))
// }
// reverseWord("거꾸로")

//풀이 2
//성훈님 풀이 참고, split은 값을 배열로 반환한다!
// function reverseWord(word) {
//   console.log(word.split('').reverse().join(''))
// }
// reverseWord("거꾸로")

// YS.kim
// const method1 = (name) => {
//   console.log(name.split("").reverse().join(""));
// };

// method1("거꾸로");

// const method2 = (name) => {
//   let result = "";
//   for (let i = name.length; i > 0; i--) {
//     result += name.slice(i - 1, i);
//   }
//   console.log(result);
// };

// method2("거꾸로");
