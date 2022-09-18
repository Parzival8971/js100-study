// Q 제곱을 구하자
// 공백으로 구분하여 두 숫자 a와 b가 주어지면, a의 b승을 구하는 프로그램을 작성하세요.

// Answer
//Omuing 0
const num = ["2", "6"];
console.log(Math.pow(parseInt(num[0], 10), parseInt(num[1], 10)));
//Omuing 1
//// 🙈 Oum 1 - 2회독 중
const num = ["2", "6"];
console.log(Math.pow(parseInt(num[0], 10), parseInt(num[1], 10))); // Math.pow(2,3) 메서드 2의3승
//// 🙈 Oum 1 - 2회독 중
function free(a, b) {
  let result = 1;
  for (let i = 0; i < b; i++) {
    result = result * a;
  }
  console.log(result);
}
free(2, 6);

//sjshin

//🌸 sePark 🌸
// function multiple(a, b) {
//   let num = 1
//   for(let i = 0; i < b; i++){
//     num *= a
//   }
//   console.log(num)
// }
// multiple(2, 6) =>64

// YS.kim
// const jegob = (a, b) => {
//   let result = 1;
//   for (let i = 0; i < b; i++) {
//     result *= a;
//   }
//   console.log(result);
// };

// jegob(2, 10);
// kh
// const n = prompt("두 숫자를 입력하세요.").split(" ");
// console.log(Math.pow(parseInt(n[0]), parseInt(n[1])));
