import React, { useEffect, useState } from "react";
import "./App.css";
import { VStack } from "@chakra-ui/react";
import "react-datepicker/dist/react-datepicker.css";

import AddItem from "./components/AddItem";
import DateSelect from "./components/DateSelect";
import GraphItem from "./components/GraphItem";
import List from "./components/List";
import { useDispatch, useSelector } from "react-redux";
import { expense } from "./utils/data/expense";
import { minus, plus } from "./redux/user";

function App() {
  const [items, setItems] = useState(expense);
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const today = new Date();
  const [startDate, setStartDate] = useState(
    new Date(today.getFullYear(), today.getMonth())
  );
  const [endDate, setEndDate] = useState(new Date());

  useEffect(() => {
    console.log(count);
  });
  return (
    <div className="App">
      <div>
        <button onClick={() => dispatch(minus())}>-</button>
        Value: {count}
        <button onClick={() => dispatch(plus())}>+</button>
      </div>
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
          startDate={startDate}
          endDate={endDate}
          setStartDate={setStartDate}
          setEndDate={setEndDate}
        />

        {/*
         * author : 조영호
         * function : 통계 도넛차트 Components
         */}
        <GraphItem items={items} startDate={startDate} endDate={endDate} />

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
