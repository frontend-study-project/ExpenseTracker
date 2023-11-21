/*
 * author : 고정인
 * function : 카테고리별 그룹화
 */
export const groupByCategory = (data) => {
  return data.reduce((acc, cur) => {
    const obj = {};
    const foundIndex = acc.findIndex((v) => v.category === cur.category);
    if (foundIndex < 0) {
      obj.category = cur.category;
      obj.amount = Number(cur.amount);
      console.log(obj);
      acc.push(obj);
    } else {
      acc[foundIndex].amount += Number(cur.amount);
    }
    return acc;
  }, []);
};
