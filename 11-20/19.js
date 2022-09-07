// Q 제곱을 구하자
// 공백으로 구분하여 두 숫자 a와 b가 주어지면, a의 b승을 구하는 프로그램을 작성하세요.

// Answer
//Omuing 0
const num = ["2", "6"]
console.log(Math.pow(parseInt(num[0],10),parseInt(num[1],10)))
//Omuing 1
function free(a,b) {
  let result = 1;
  for(let i=0; i<b; i++) {
    result = result * a
  }
  console.log(result)
}
free(2, 6)

//sjshin