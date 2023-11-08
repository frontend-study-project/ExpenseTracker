/* */
export const groupByDate = data => {
  return data.reduce((acc, cur) => {
    const obj = {};
    const foundIndex = acc.findIndex(v => v.date === cur.date);
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
 * 작성자 : 고정인
 * 기능 : 날짜(기간) 정렬
 */
export const sortByDate = data => {
  return data.sort((a, b) => {
    return new Date(b.Date) - new Date(a.date);
  });
};

export const filterByDate = (data, dateRange) => {
  return data.filter(v => {
    const vDate = new Date(v.date);
    return (
      vDate.getFullYear() >= dateRange[0].getFullYear() &&
      vDate.getFullYear() <= dateRange[1].getFullYear() &&
      vDate.getMonth() >= dateRange[0].getMonth() &&
      vDate.getMonth() <= dateRange[1].getMonth() &&
      vDate.getDate() >= dateRange[0].getDate() &&
      vDate.getDate() <= dateRange[1].getDate()
    );
  });
};
