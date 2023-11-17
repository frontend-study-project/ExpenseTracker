/*
 * author : 고정인
 * function : 날짜 그룹화
 */
export const groupByDate = (data) => {
  return data.reduce((acc, cur) => {
    const obj = {};
    const foundIndex = acc.findIndex((v) => v.date === cur.date);
    if (foundIndex < 0) {
      obj.date = cur.date;
      obj.contents = [cur];
      acc.push(obj);
    } else {
      acc[foundIndex].contents.push(cur);
    }
    return acc;
  }, []);
};

/*
 * author : 고정인
 * function : 날짜(기간) 정렬
 */
export const sortByDate = (data) => {
  return data.sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });
};

/*
 * author : 고정인
 * function : 날짜(기간) 필터링
 */
export const filterByDate = (data, dateRange) => {
  return data.filter((v) => {
    const vDate = new Date(v.date);
    return vDate >= dateRange[0] && vDate <= dateRange[1];
  });
};
