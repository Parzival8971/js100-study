// Q 배열 내장함수를 이용, 다음과 같이 출력하라
const arr = [200, 100, 300];

// 출력값
[200, 100, 10000, 300];

// 🙈 Oum 1 - 2회독 중
arr.splice(2, 0, 10000); // 2번째 인덱스에, 0 삭제하지 않고, 10000을 추가한다
console.log(arr);

// sjshin_ver1
const arr2 = arr.splice(2, 0, 10000);
console.log(arr);

//🌸 sePark 🌸
arr.splice(2, 0, 10000);
console.log(arr);

// YS.kim
const method1 = () => {
  arr.splice(2, 0, 10000);
};
