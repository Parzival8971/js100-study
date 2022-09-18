// Q sort 구현하기
// 민주는 체육부장으로 체육시간이 되면 반 친구들이 제대로 키 순서대로 모였는지를 확인해야 한다. 그런데 요즘 민주는 그것이 너무 번거롭게 느껴져 한 번에 확인하고 싶어한다. 

// 민주를 위해 키가 주어지면 순서대로 제대로 섰는지 확인하는 프로그램을 작성해보자.
// (키는 공백으로 구분하여 입력됩니다.)

// 입출력
// 입력 : 176 156 155 165 166 169
// 출력 : NO
// 입력 : 155 156 165 166 169 176
// 출력 : YES

// Answer 
//Omuing
const unsorted = "176 156 155 165 166 169 95"
let sorted = "";
sorted = (unsorted.split(" ").sort((a,b)=>{
  return a - b;
})).join(" ")
console.log(sorted)
if(unsorted === sorted) {
  console.log("Yes")
} else {
  console.log("No")
}

//sjshin


// 🌸 sePark 🌸
//풀이 1
// function sortHeight(heights) {
//   let arrHeights = heights.split(" ")
//    for(let i = 0; i < arrHeights.length; i++){
//     let a = Number(arrHeights[0])
//     if(Number(arrHeights[i]) < Number(arrHeights[i+1])){
//       a = Number(arrHeights[i+1])
//     }else {
//       return "No"
//      }
//     return "Yes"
//   }
// }
// console.log(sortHeight("176 156 155 165 166 169"));
// console.log(sortHeight("155 156 165 166 169 176"));

//풀이2
// function sortHeight(heights) {
//   let arrHeights = heights.split(" ");
//   let right = [...arrHeights].sort((a,b) => {
//     return a-b
//   })
//   if(JSON.stringify(arrHeights) === JSON.stringify(right)){
//     return "Yes"
//   }else {
//     return "No"
//   }
// }
// console.log(sortHeight("176 156 155 165 166 169"));
// console.log(sortHeight("155 156 165 166 169 176"));