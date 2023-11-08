import React, { useState } from "react";
import "./App.css";
import { Container, Flex, Text, VStack, Box } from "@chakra-ui/react";

import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ko from "date-fns/locale/ko";

import List from "./components/List";
import GraphItem from "./components/GraphItem";
import AddItem from "./components/AddItem";

registerLocale("ko", ko);
function App() {
  const [items, setItems] = useState([
    {
      id: 0,
      category: "식비",
      description: "apple",
      amount: 5000,
      date: "2020-01-01",
    },
    {
      id: 1,
      category: "식비",
      description: "banana",
      amount: 5000,
      date: "2020-01-02",
    },
    {
      id: 2,
      category: "식비",
      description: "orange",
      amount: 15000,
      date: "2020-01-01",
    },
    {
      id: 3,
      category: "식비",
      description: "grape",
      amount: 20000,
      date: "2020-05-01",
    },
    {
      id: 4,
      category: "쇼핑",
      description: "shoes",
      amount: 25000,
      date: "2020-05-01",
    },
    {
      id: 5,
      category: "쇼핑",
      description: "shoes",
      amount: 25000,
      date: "2023-05-01",
    },
    {
      id: 6,
      category: "쇼핑",
      description: "shoes",
      amount: 25000,
      date: "2023-11-04",
    },
    {
      id: 7,
      category: "쇼핑",
      description: "shoes",
      amount: 25000,
      date: "2023-11-05",
    },
    {
      id: 8,
      category: "쇼핑",
      description: "shoes",
      amount: 25000,
      date: "2023-11-06",
    },
  ]);

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <div className="App">
      <VStack
        maxW="500px"
        m="30px auto"
        p="50px 40px"
        borderRadius="30px"
        spacing="30px"
        bg="white"
        boxShadow="lg"
      >
        <AddItem />
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
                      <path
                        strokeLinecap="round"
                        d="M40.04 22v20h-32V22"
                      ></path>
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
            <Box>
              <Text></Text>
            </Box>
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
                      <path
                        strokeLinecap="round"
                        d="M40.04 22v20h-32V22"
                      ></path>
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
        </Container>

        <GraphItem />
        <List
          items={items}
          setItems={setItems}
          startDate={startDate}
          endDate={endDate}
        />
      </VStack>
    </div>
  );
}

export default App;
