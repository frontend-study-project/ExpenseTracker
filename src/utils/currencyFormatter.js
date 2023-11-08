/*
 * author : 고정인
 * function : 3자리 단위 쉼표 구분 함수 ex) 1000000 => 1,000,000
 */
export const currencyFormatter = number => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
