// Q 다음 소스 코드를 완성하여 날짜와 시간을 출력하시오.
var year = '2019';
var month = '04';
var day = '26';
var hour = '11';
var minute = '34';
var second = '27';

var result = //빈칸을 채워주세요
console.log(result);

출력
2019/04/26 11:34:27

// Answer
//Omuing_ver1
var result = year.concat('/', month, '/', day, ' ', hour, ':', minute, ':', second);
// 허허... 그냥 이렇게 때려버린다구? 쉽고 아주 좋아!! 캬컄

//sjshin_ver1
var result = year+"/"+month+"/"+day+" "+hour+":"+minute+":"+second   //'2019/04/26 11:34:27'

//sjshin_ver2
var result = year.concat("/",month,"/",day," ",hour,':',minute,":",second)   //'2019/04/26 11:34:27'
//배열에서 concat : 기존 배열에 추가할 요소(맨뒤에 합쳐짐)를 넣어 새로운 배열을 반환하는 메소드


//🌸 sePark 🌸
let result = `${year}/${month}/${day} ${hour}:${minute}:${second}`;
console.log(result)

//kh
const result = year.concat('/', month, '/', day, ' ', hour, ':', minute, ':', second);