// Q 자바스크립트 객체를 다음과 같이 만들었다.
//출력값을 입력하시오. (출력값은 공백을 넣지 않습니다. )

var d = {
  height: 180,
  weight: 78,
  weight: 84,
  temperature: 36,
  eyesight: 1,
  example: 24,
};

// Answer
// 🙈 Oum 1 - 2회독 중
console.log(d["weight"]); // []대괄호 접근은 ''를 써줘야 함. 이 부분 좀 헷갈림
console.log(d[example]); // 왼쪽 처럼 접근불가능 ''로 감싸줘야함. 저것은 변수명 접근임

//sjshin
console.log(d["weight"]); //84 각괄호접근자! ''따옴표 생략하면 안됩니다.
console.log(d.weight); //84 접접근자 ''따옴표 생략

//🌸 sePark 🌸
//weight는 84가 나온다! 마지막에 할당해분 값!

// YS.kim
// 84
