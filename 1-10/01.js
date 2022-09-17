// Q 배열에서 400, 500를 삭제하는 code를 입력하라
const nums = [100, 200, 300, 400, 500];

// Answer
// 🙈 Oum 1 - 2회독 중
const newArray = nums.slice(0, 3); // 기존배열은 보존, 새로운 배열을 반환함, 인덱스가 0부터 3까지 복사(3은 제외)
console.log(nums.splice(0, 3)); // 기존 배열을 변형시킴
console.log(newArray);

//sjshin_ver1
nums.pop();
nums.pop();
console.log(nums);

//sjshin_ver2
const nums2 = nums.slice(0, 3);
console.log(nums2); // [ 100, 200, 300 ]
console.log(nums); //[ 100, 200, 300, 400, 500 ]

//sjshin_ver3
const nums3 = nums.splice(0, 3);
console.log(nums3); //[ 100, 200, 300 ]
console.log(nums); //[ 400, 500 ]

//🌸 sePark 🌸
console.log(nums.slice(0, 3)); //원본 배열에 영향을 주지 않는다
console.log(nums.splice(0, 3)); // 원본 대열의 값도 변하고, splice한 값도 변수에 지정하여 반환 받을 수 있다

//kh
nums.splice(3, 5);
console.log(nums);
