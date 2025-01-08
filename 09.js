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
  if (users.length !== 0) {averageAge = 0, maxAge = 0; }  // 걸러야하는 조건 

  const sumAge = users.reduce((acc, pre) => { return acc + pre.age }, 0);
  let averageAge = sumAge / users.length;
  let maxAge;

  maxAge = users.reduce((acc2, cur2) => { return Math.max(acc2, cur2.age) }, Number.NEGATIVE_INFINITY);
  
  return { averageAge, maxAge };
  // TODO
}


/*function func(users) {
  if(users.length === 0) return {averageAge: 0, maxAge: 0};
  const sumAge = users.reduce((acc, user) => acc + user, 0);
  const averageAge = sumAge / users.length;
  const maxAge = users.reduce((acc, user) => Math.max(acc, user), Number.NEGATIVE_INFINITY);
  return { averageAge, maxAge };
}*/

// export를 수정하지 마세요.
export { calculateStatistics };
