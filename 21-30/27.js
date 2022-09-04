// Q 객체 만들기
// 첫번째 입력에서는 학생의 이름이 공백으로 구분되어 입력되고, 
// 두번째에는 그 학생의 수학 점수가 공백으로 구분되어 주어집니다.
// 두 개를 합쳐 학생의 이름이 key이고 value가 수학 점수인 객체를 출력해주세요.

// Answer
//Omuing => 조금 어려운 부분이지만 이해완료! 객체구문
const keys = ['babys', 'johns'];
const values = ['90', '10'];
let obj = {};
for(let i=0; i<keys.length; i++) {
	obj[keys[i]] = values[i]
}
console.log(obj)
// Obj.babys = '90' 처럼 생각하면 됨 

//sjshin