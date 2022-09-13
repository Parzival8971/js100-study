// Q 문장이 입력되면 거꾸로 출력하는 프로그램을 만들어 봅시다.
입출력

입력 : 거꾸로
출력 : 로꾸거

// Answer
//Omuing
const reverse = "개발자까지3개월"
const reverseSort = reverse.split('').reverse().join('')
console.log(reverseSort)

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