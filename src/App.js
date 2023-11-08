import React, { useState } from 'react';
import './App.css';
import { VStack } from '@chakra-ui/react';
import ReactApexChart from 'react-apexcharts';
import 'react-datepicker/dist/react-datepicker.css';

import DateSelect from './components/DateSelect';
import List from './components/List';
import AddItem from './components/AddItem';

function App() {
  const [items, setItems] = useState([
    { id: 0, category: '식비', description: 'apple', amount: 5000, date: '2020-01-01' },
    { id: 1, category: '식비', description: 'banana', amount: 5000, date: '2020-01-02' },
    { id: 2, category: '식비', description: 'orange', amount: 15000, date: '2020-01-01' },
    { id: 3, category: '식비', description: 'grape', amount: 20000, date: '2020-05-01' },
    { id: 4, category: '쇼핑', description: 'shoes', amount: 25000, date: '2020-05-01' },
    { id: 5, category: '쇼핑', description: 'shoes', amount: 25000, date: '2023-05-01' },
    { id: 6, category: '쇼핑', description: 'shoes', amount: 25000, date: '2023-11-04' },
    { id: 7, category: '쇼핑', description: 'shoes', amount: 25000, date: '2023-11-05' },
    { id: 8, category: '쇼핑', description: 'shoes', amount: 25000, date: '2023-11-06' },
  ]);

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const format = val => `₩ ` + val;
  const parse = val => val.replace(/^\₩/, '');
  const [value, setValue] = useState('0');

  // 도넛차트 데이터!!
  const donutData = {
    series: [40, 20, 10, 25, 5],
    options: {
      chart: {
        type: 'donut',
      },
      legend: {
        position: 'bottom',
      },
      responsive: [
        {
          breakpoint: 480,
        },
      ],
      plotOptions: {
        pie: {
          donut: {
            labels: {
              show: true,
              total: {
                showAlways: true,
                show: true,
                label: 'Monthly',
                fontSize: '12px',
                color: 'red',
              },
              value: {
                fontSize: '22px',
                show: true,
                color: 'blue',
              },
            },
          },
        },
      },
      labels: ['Food Expenses', 'Shopping', 'Hobby', 'Transportation Expenses', 'Insurance Cost'],
      title: {
        text: 'Expense Details',
        align: 'center',
      },
    },
  };

  return (
    <div className="App">
      <VStack maxW="500px" m="30px auto" p="50px 40px" borderRadius="30px" spacing="30px" bg="white" boxShadow="lg">
        {/* 데이터 추가 컴포넌트 */}
        <AddItem format={format} parse={parse} value={value} setValue={setValue} />

        {/* 날짜 기간 컴포넌트 */}
        <DateSelect startDate={startDate} endDate={endDate} setStartDate={setStartDate} setEndDate={setEndDate} />

        <div id="chart">
          <ReactApexChart options={donutData.options} series={donutData.series} type="donut" width="400" />
        </div>

        {/* 데이터 리스트 컴포넌트 */}
        <List items={items} setItems={setItems} startDate={startDate} endDate={endDate} />
      </VStack>
    </div>
  );
}

export default App;
