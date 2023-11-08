import { PiCoffeeFill } from 'react-icons/pi';
import { BiSolidMoviePlay, BiDotsHorizontalRounded } from 'react-icons/bi';
import { AiFillShopping } from 'react-icons/ai';
import { FaUtensils, FaBus, FaBook, FaHome, FaPhoneAlt, FaGift } from 'react-icons/fa';

export const categoryList = [
  {
    name: '식비',
    icon: FaUtensils,
  },
  {
    name: '간식',
    icon: PiCoffeeFill,
  },
  {
    name: '문화생활',
    icon: BiSolidMoviePlay,
  },
  {
    name: '쇼핑',
    icon: AiFillShopping,
  },
  {
    name: '교통',
    icon: FaBus,
  },
  {
    name: '교육',
    icon: FaBook,
  },
  {
    name: '주거',
    icon: FaHome,
  },
  {
    name: '통신',
    icon: FaPhoneAlt,
  },
  {
    name: '경조사',
    icon: FaGift,
  },
  {
    name: '기타',
    icon: BiDotsHorizontalRounded,
  },
];
