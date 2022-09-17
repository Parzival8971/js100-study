// Q set은 어떻게 만드나요?

// 다음 중 set을 만드는 방법으로 올바른 것을 모두 고르시오.
// 1)  var x = {1, 2, 3, 5, 6, 7};
// 2)  var x = {};
// 3)  var x = new Set('javascript');
// 4)  var x = new Set(range(5));
// 5)  var x = new Set();

// Answer
//Omuing 5번
const lists = [1, 2, 3, 4, 5, 5, 5, 6];
let setValue = new Set(lists);
console.log(setValue);

//sjshin

// 🌸 sePark 🌸
// 3, 5

//kh
// 3, 5
