import React, { useState } from "react";
import "./App.css";
import { VStack } from "@chakra-ui/react";
import "react-datepicker/dist/react-datepicker.css";

import DateSelect from "./components/DateSelect";
import List from "./components/List";
import AddItem from "./components/AddItem";
import GraphItem from "./components/GraphItem";

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

  const [realItems, setRealItems] = useState([]);

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const format = (val) => `₩ ` + val;
  const parse = (val) => val.replace(/^\₩/, "");
  const [value, setValue] = useState("0");

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
        {/*
         * author : 이수찬
         * function : Item 추가 Components
         */}
        <AddItem
          format={format}
          parse={parse}
          value={value}
          setValue={setValue}
          realItems={items}
          setRealItems={setRealItems}
        />

        {/*
         * author : -
         * function : 날짜 기간 Components
         */}
        <DateSelect
          startDate={startDate}
          endDate={endDate}
          setStartDate={setStartDate}
          setEndDate={setEndDate}
        />

        {/*
         * author : 조영호
         * function : 통계 도넛차트 Components
         */}
        <GraphItem />

        {/*
         * author : 고정인
         * function : 추가된 Item 리스트 Components
         */}
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
