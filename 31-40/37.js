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
//아...뭐지......?? 흠

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
