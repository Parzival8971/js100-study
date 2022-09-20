// Q 몫과 나머지
// 공백으로 구분하여 두 숫자가 주어집니다.
// 두번째 숫자로 첫번째 숫자를 나누었을 때 그 몫과 나머지를 공백으로 구분하여 출력하세요.
입출력;
// 입력 : 10 2
// 출력 : 5 0

// Answer
//// 🙈 Oum 1 - 2회독 중
// const nums = ["7", "2"];
// let valueFirst = Math.floor(parseInt(nums[0], 10) / parseInt(nums[1], 10));
// console.log(valueFirst);
// let valueSecond = parseInt(nums[0], 10) % parseInt(nums[1], 10);
// console.log(valueFirst, valueSecond);

//😎 sjshin
// const numset = [10, 2];
// const quotientValue = numset[0]/numset[1] //몫
// const restValue = numset[0]%numset[1]  //나머지
// console.log(quotientValue, restValue) // 5 0

// 🌸 sePark 🌸
// function devide(a, b) {
//   let quotient = a / b;
//   let remainder = a % b;
//   console.log(quotient, remainder);
// }
// devide(10, 2);

// YS.kim
// const mokNamuge = (first, second) => {
//   console.log(first / second + " " + (first % second));
// };

// mokNamuge(10, 2);
// kh
// const n = prompt("두 숫자를 입력하세요.").split(" ");
// console.log(`${Math.floor(parseInt(n[0]) / parseInt(n[1]))} ${parseInt(n[0]) % parseInt(n[1])}`);
