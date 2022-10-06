// Q 오타 수정하기
// 혜원이는 평소 영타가 빠르고 정확한 것을 친구들에게 자랑하고 다녔습니다. 반 친구들이 혜원이의 타자 속도가 빠르다는 것을 모두 알게 되자 혜원이는 모두의 앞에서 타자 실력을 보여주게 됩니다.

// 그런데 막상 보여주려니 긴장이 되서 문장의 모든 e를 q로 잘못 친 것을 발견했습니다.
// 혜원이는 프로그램을 돌려 재빠르게 모든 q를 e로 바꾸는 프로그램을 작성하려고 합니다.

// 문장이 입력되면 모든 q를 e로 바꾸는 프로그램을 작성해 주세요.

// 입출력
// 입력 : querty
// 출력 : euerty
// 입력 : hqllo my namq is hyqwon
// 출력 : hello my name is hyewon

// Answer
//// 🙈 Oum 1 회독중
// const word ="hqllo my namq is hyqwon";
// console.log(word.split("q").join("e"))

//😎 sjshin
//1번째 풀이 : split, join method
// const change = (sentence) => {
//   return sentence.split("q").join("e")
// }

// change("querty"); // 'euerty'
// change("hqllo my namq is hyqwon");  //'hello my name is hyewon'

//2번째 풀이 : replace, replaceAll method
// function change(sentence) {
//   return sentence.replace("q", "e")
// }
// change("querty")
// change("hqllo my namq is hyqwon") //'hello my namq is hyqwon' ?? 왜/?

//replace 메소드는 'hello my namq is hyqwon' 제일 앞에 q만 e로 바뀌고 뒤에 q는 변경이 안되는데 왜일까요?
// replace()방법은 문자열에서 일부 텍스트가 처음 나타나는 경우에만 작동하기 때문에 문자열의 모든 단어를 변경하기 위해서는 replaceAll()을 사용하면 된다.

// function change(sentence) {
//   return sentence.replaceAll("q", "e")
// }
// change("querty")
// change("hqllo my namq is hyqwon") //'hello my name is hyewon'

// 🌸 sePark 🌸
// function modifyWord(words) {
//   var allQ = /q/gi;
//   return words.replace(allQ, "e")
// }

// console.log(modifyWord("querty"))
// console.log(modifyWord("hqllo my namq is hyqwon"))
