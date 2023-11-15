import React, { useState } from "react";
import "./App.css";
import { VStack } from "@chakra-ui/react";
import "react-datepicker/dist/react-datepicker.css";

import DateSelect from "./components/DateSelect";
import List from "./components/List";
import AddItem from "./components/AddItem";
import GraphItem from "./components/GraphItem";

function App() {
  const [items, setItems] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [filterData, setFilterData] = useState([]);
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
        <AddItem items={items} setItems={setItems} />
      </VStack>
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
         * author : 조영호
         * function : 날짜 기간 Components
         */}
        <DateSelect
          items={items}
          setFilterData={setFilterData}
          startDate={startDate}
          endDate={endDate}
          setStartDate={setStartDate}
          setEndDate={setEndDate}
        />

        {/*
         * author : 조영호
         * function : 통계 도넛차트 Components
         */}
        <GraphItem items={filterData} />

        {/*
         * author : 고정인
         * function : 추가된 Item 리스트 Components
         */}
        <List
          filterData={filterData}
          setFilterData={setFilterData}
          startDate={startDate}
          endDate={endDate}
        />
      </VStack>
    </div>
  );
}

export default App;
