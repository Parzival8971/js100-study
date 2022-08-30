// Q 배열에서 400, 500를 삭제하는 code를 입력하라
const nums = [100, 200, 300, 400, 500];

// Answer 0
const newArray = nums.slice(0, 3);
console.log(newArray);
console.log('구분선');

// Answer 1
nums.pop();
nums.pop();
console.log(nums);

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
