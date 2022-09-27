// Q 구구단 출력하기
// 1~9까지의 숫자 중 하나를 입력하면 그 단의 구구단 결과를 한 줄에 출력하는 프로그램을 작성하세요.

// 입출력
// 입력 : 2
// 출력 : 2 4 6 8 10 12 14 16 18

// Answer
//// 🙈 Oum 1 회독중
// const num = 2;
// let result = "";
// for(let i=0; i<9; i++) {
// 	result = result + num * (i+1) + " ";
// }
// console.log(result)

//😎 sjshin
// const gugudan = (num) => {
//   let result = "";
//   for(let i=1; i<10; i++) {
//     result += num*i+" ";
//   }
//     result = result.slice(0,-1);
//   return result;
// }
// gugudan(4) //'4 8 12 16 20 24 28 32 36'
// gugudan(9) //'9 18 27 36 45 54 63 72 81'

// 🌸 sePark 🌸
// function toTimesTable(a) {
//   let result = "";
// 	for(let i = 1; i < 10; i++){
// 		result += a * i + " "
// 	}
//   result = result.slice(0, -1)
// 	return result
// }

// console.log(toTimesTable(2))
