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

// YS.KIM
// 1번째 방법 5칸중 4번째와 5번째에 있으니 1~3번째만 남기기
const method1 = () => {
  return console.log(nums.slice(0, 3));
};

// 2번째 방법 400과 500인 경우 뒤에서 지우기
const method2 = () => {
  let copy = [...nums];
  copy.map((num) => {
    if (num === 400 || num === 500) {
      nums.pop();
    }
  });
};

// 3번째 방법 400과 500이 몇번째 요소에 있는 지 확인하고 그 위치에 해당하는 요소 삭제
const method3 = () => {
  nums.map((num) => {
    if (num == 400 || num == 500) {
      let searchNum = nums.indexOf(num);
      nums.splice(searchNum);
    }
  });
};

// 4번째 방법 filter 메소드사용 (But filter은 원본을 훼손 시키지 않기에 nums에 직접 삭제는 x)
const method4 = () => {
  let a = nums.filter((a) => {
    return !(a == 400 || a == 500);
  });
  console.log(a);
};
//kh
nums.splice(3, 5);
console.log(nums);
