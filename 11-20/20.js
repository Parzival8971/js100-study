// Q 몫과 나머지
// 공백으로 구분하여 두 숫자가 주어집니다.
// 두번째 숫자로 첫번째 숫자를 나누었을 때 그 몫과 나머지를 공백으로 구분하여 출력하세요.
입출력
// 입력 : 10 2
// 출력 : 5 0

// Answer
//Omuing
const nums = ["7", "2"];
let valueFirst = Math.floor(parseInt(nums[0],10)/parseInt(nums[1],10))
console.log(valueFirst)
let valueSecond = parseInt(nums[0],10)%parseInt(nums[1],10)
console.log(valueFirst, valueSecond)

//sjshin


// 🌸 sePark 🌸
function devide(a, b) {
  let quotient = a / b;
  let remainder = a % b;
  console.log(quotient, remainder)
}
devide(10 , 2)