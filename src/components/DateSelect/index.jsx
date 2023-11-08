import { Container, Flex, Button } from "@chakra-ui/react";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ko from "date-fns/locale/ko";
const DateSelect = ({ startDate, endDate, setStartDate, setEndDate }) => {
  registerLocale("ko", ko);
  return (
    <Container>
      <Flex>
        <DatePicker
          showIcon
          dateFormat={"yyyy년 MM월 dd일"}
          locale="ko"
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          selectsStart
          startDate={startDate}
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 50 40"
            >
              <mask id="ipSApplication0">
                <g
                  fill="none"
                  stroke="#fff"
                  strokeLinejoin="round"
                  strokeWidth="4"
                >
                  <path strokeLinecap="round" d="M40.04 22v20h-32V22"></path>
                  <path
                    fill="#fff"
                    d="M5.842 13.777C4.312 17.737 7.263 22 11.51 22c3.314 0 6.019-2.686 6.019-6a6 6 0 0 0 6 6h1.018a6 6 0 0 0 6-6c0 3.314 2.706 6 6.02 6c4.248 0 7.201-4.265 5.67-8.228L39.234 6H8.845l-3.003 7.777Z"
                  ></path>
                </g>
              </mask>
              <path
                fill="currentColor"
                d="M0 0h48v48H0z"
                mask="url(#ipSApplication0)"
              ></path>
            </svg>
          }
        />
        <DatePicker
          locale="ko"
          showIcon
          dateFormat={"yyyy년 MM월 dd일"}
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 50 40"
            >
              <mask id="ipSApplication0">
                <g
                  fill="none"
                  stroke="#fff"
                  strokeLinejoin="round"
                  strokeWidth="4"
                >
                  <path strokeLinecap="round" d="M40.04 22v20h-32V22"></path>
                  <path
                    fill="#fff"
                    d="M5.842 13.777C4.312 17.737 7.263 22 11.51 22c3.314 0 6.019-2.686 6.019-6a6 6 0 0 0 6 6h1.018a6 6 0 0 0 6-6c0 3.314 2.706 6 6.02 6c4.248 0 7.201-4.265 5.67-8.228L39.234 6H8.845l-3.003 7.777Z"
                  ></path>
                </g>
              </mask>
              <path
                fill="currentColor"
                d="M0 0h48v48H0z"
                mask="url(#ipSApplication0)"
              ></path>
            </svg>
          }
        />
      </Flex>
      <Flex textAlign="center" display="flex" justifyContent="center">
        <Button colorScheme="orange" w="50%" size="md" mt="20px">
          검색
        </Button>
      </Flex>
    </Container>
  );
};
export default DateSelect;
