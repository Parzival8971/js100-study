// Q quick sort
// 다음 빈 칸을 채워 퀵 정렬을 완성해주세요.
function quickSort(arr){
  if (arr.length <= 1){
    return arr;
  }
  const pivot = arr[0];
  const left = [];
  const right = [];
  for (let i=1; i<arr.length; i++){
    if(/*빈칸을 채워주세요*/){
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return /*빈칸을 채워주세요*/
}
const array = prompt('배열을 입력하세요').split(' ').map(n => parseInt(n, 10));
console.log(quickSort(array));

// Answer
//// 🙈 Oum 1회독 => 풀려면 재귀함수에 대해 알아야함. 아직 못품
const quickSort = (arr) => {
	if(arr.length <= 1 ){
		return arr
  }
  const pivot = arr[0];
  const left = [];
  const right = [];
  
  for(let i=1; i<arr.length; i++) {
    if(arr[i] < pivot) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return quickSort(left).concat(pivot, quickSort(right))
}

const array = [1,3,2,7,5,6,4,8,9,10]
console.log(quickSort(array));
//sjshin

// 🌸 sePark 🌸