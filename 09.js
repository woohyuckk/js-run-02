/**
 * Q: 배열 reduce - 객체 목록 통계
 *
 * - `calculateStatistics` 함수를 작성하세요.
 *   1. users 배열이 [{ age: 10 }, { age: 30 }, ...] 형태라고 가정
 *   2. 평균 나이와 최대 나이를 계산 후 { averageAge, maxAge } 반환
 *   3. reduce를 사용
 *
 * @param {{age:number}[]} users
 * @returns {{ averageAge: number, maxAge: number }}
 */

// TODO: calculateStatistics 함수를 작성하세요.
function calculateStatistics(users) {
  const sumAge = users.reduce((acc,pre)=>{return acc + pre.age} , 0);
  let averageAge = sumAge/users.length;
  // let maxAge = users.sort((a,b) => b.age - a.age )[0];
  let maxAge = users.reduce((acc2,cur2) =>{return Math.max(acc2, cur2)});

  return averageAge,maxAge;
  // TODO
}

// export를 수정하지 마세요.
export { calculateStatistics };
