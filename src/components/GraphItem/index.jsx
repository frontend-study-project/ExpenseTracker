import React from 'react';
import ReactApexChart from 'react-apexcharts';
import 'react-datepicker/dist/react-datepicker.css';

const GraphItem = () => {
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
    <div id="chart">
      <ReactApexChart options={donutData.options} series={donutData.series} type="donut" width="400" />
    </div>
  );
};
export default GraphItem;
