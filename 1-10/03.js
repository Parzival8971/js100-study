// Q 다음 출력 값으로 올바른 것은?
var arr = [100, 200, 300];
console.log(typeof arr);
// 1)  undefined
// 2)  string
// 3)  number
// 4)  object

// Answer
//Omuing_ver1
// undefined, string, number 는 모두 기본 자료형(primitive type) 입니다.

// sjshin_ver1
// 4. object
// interface ArrayType { arr : num []; }
// const arr = [100, 200, 300];

//sePark 
// Array(배열)는 object의 특수한 형태이기 때문에 typeof 함수의 값으로는 object가 나온다
// 배열인지 확인 하기 위해서는 isArray() 함수를 사용하여야 하며, boolean 값으로 여부를 판단할 수 있다.