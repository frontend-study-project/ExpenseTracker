import React, { useState } from "react";
import "./App.css";
import { Container, Flex, Text, VStack, Box } from "@chakra-ui/react";
import List from "./components/List";
import GraphItem from "./components/GraphItem";
import AddItem from "./components/AddItem";
import DateSelect from "./components/DateSelect";

function App() {
  const [items, setItems] = useState([]);
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
        <DateSelect
          startDate={startDate}
          endDate={endDate}
          setStartDate={setStartDate}
          setEndDate={setEndDate}
        />
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
