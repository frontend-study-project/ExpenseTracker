import { categoryList } from '../data/categoryList';

/* 카테고리 별 아이콘 */
export const getCategoryIcon = category => {
  const foundObj = categoryList.find(obj => obj.name === category);
  const etcObj = categoryList.find(obj => obj.name === '기타');
  return foundObj ? foundObj.icon : etcObj.icon;
};
