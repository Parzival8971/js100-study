// Q 배열에서 400, 500를 삭제하는 code를 입력하세요.
var nums = [100, 200, 300, 400, 500];

// Answer 0
var newArray = nums.slice(0, 3);
console.log(newArray);
console.log('구분선')

// Answer 2
nums.pop();
nums.pop();
console.log(nums);
