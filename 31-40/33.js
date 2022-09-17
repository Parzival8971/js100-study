// Q 거꾸로 출력하기
// 한 줄에 여러개의 숫자가 입력되면, 역순으로 그 숫자들을 하나씩 출력하는 프로그램을 작성하시오.

// 입출력
// 입력 : 1 2 3 4 5
// 출력 : 5 4 3 2 1
// 입력 : 2 4 6 7 8
// 출력 : 8 7 6 4 2

// Answer
//// 🙈 Oum 1 회독중 어려움 메모
const nums = "1 2 3 4 5"
const array = nums.split(" ").reverse()
console.log(array)
let reverseValue = "";
for(let i =0; i< array.length; i++) {
  reverseValue = reverseValue + array[i] + " "
}
console.log(reverseValue)
//sjshin