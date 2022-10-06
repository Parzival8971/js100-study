// Q 반장 선거
// 새 학기를 맞아 호준이네 반은 반장 선거를 하기로 했습니다.
// 그런데 표를 하나씩 개표하는 과정이 너무 번거롭게 느껴진 당신은 학생들이 뽑은 후보들을 입력받으면 뽑힌 학생의 이름과 받은 표 수를 출력하는 프로그램을 작성하기로 하였습니다.

// 입력
// 원범 원범 혜원 혜원 혜원 혜원 유진 유진
// 출력
// 혜원(이)가 총 4표로 반장이 되었습니다.

// Answer
//// 🙈 Oum 1 회독중 어려움;;
// const array = ['원범', '원범', '혜원', '혜원', '혜원','혜원', '유진', '유진']
// let result = {};
// let winner = "";

// for(let index in array) {
//   let value = array[index]
//   result[value] = result[value] === undefined ? 1 : result[value] + 1;
// }

// console.log(result)
// winner = Object.keys(result).reduce((a, b) => {
//   console.log(a, b)
//   return result[a] > result[b] ? a : b
// });

// console.log(winner)
// console.log(`${winner}(이)가 총 ${result[winner]}표로 반장이 되었습니다.`)

//😎 sjshin
// const arr = ['원범', '원범', '혜원', '혜원', '혜원','혜원', '유진', '유진'];
// // 배열을 객체로 가공 {'원범':2, '혜원':4, '유진':2} 이런 식으로
// let result = {};
// let winner = "";
// //for in문을 이용해 arr를 반복하면서 키와 값(value)을 만들어주는 것
// for(let index in arr) {
//   let val = arr[index];
//   result[val] = result[val] === undefined ? 1 : result[val] = result[val] + 1;
// }
// // index = arr의 갯수만큼 반복 value에 '원범'을 시작으로 아래 함수를 실행
// console.log(result); //{ '원범': 2, '혜원': 4, '유진': 2 }
// // Object.keys(result); //[ '원범', '혜원', '유진' ]
// winner = Object.keys(result).reduce(function(a, b){
//   console.log(a ,b);
//   return result[a] > result[b] ? a : b
// });

// console.log(winner);
// console.log(`${winner}가 총 ${result[winner]}표로 반장이 되었습니다.`);

// //reduce는 배열의 메소드인데, 매개변수로 함수를 갖는다.
// //첫번째 순환에서 a는 원범이 되고, b는 혜원이된다. 첫번째 순환의 결과로 a가 혜원이 되면서 중첩.
// //두번째 순환에서 a는 혜원이되고, b는 유진이 된다. 두번째 순환의 결과로 a 혜원이 a로 중첩 되면서 순환 종료.
// //reduce method 어려워ㅠㅠ

// 🌸 sePark 🌸
//나의 최선..
// function compare(names) {
//   let arrNames = names.split(' ')
//   let result = {};
//   arrNames.forEach(name => {
//     result[name] = (result[name] || 0)+1;
//   })

//  let numbers = Object.values(result)
//  let max = Math.max(...numbers)
//  let result2 = Object.keys(result).find(key => result[key] === max)
//   return `${result2}(이)가 총 ${max}표로 반장이 되었습니다.`

// }
//  console.log(compare("원범 원범 혜원 혜원 혜원 혜원 유진 유진"))
