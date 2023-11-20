const isSameDay = (date1, date2) => {
  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  );
};

/*
 * author : 고정인
 * function : 날짜(기간) 필터링
 */
export const filterByDate = (data, dateRange) => {
  return data.filter((v) => {
    const vDate = new Date(v.date);

    if (vDate >= dateRange[0] && vDate <= dateRange[1])
      return true;
    else if (isSameDay(vDate, dateRange[0]) || isSameDay(vDate, dateRange[1]))
      return true;

    return false;
  });
};
