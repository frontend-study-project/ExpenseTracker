import ReactApexChart from "react-apexcharts";
import { useSelector } from "react-redux";
import { filterByDate } from "../../utils/function/filterByDate";
import { useEffect, useState } from "react";
import { groupByCategory } from "../../utils/function/groupByCategory";

const GraphItem = ({ startDate, endDate }) => {
  const items = useSelector((state) => state.items.items);
  const data = groupByCategory(filterByDate(items, [startDate, endDate]));

  useEffect(() => {
    console.log(items);
    console.log("도넛 그래프에 온 데이터:", data);
  }, [data]);

  // 도넛차트 데이터
  const donutData = {
    series: data.map((item) => item.amount),

    options: {
      chart: {
        type: "donut",
        height: 1000,
        width: 1000,
      },
      legend: {
        position: "bottom",
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
                label: "지출내역",
                fontSize: "12px",
                color: "red",
              },
              value: {
                fontSize: "22px",
                show: true,
                color: "blue",
              },
            },
          },
        },
      },
      labels: data.map((item) => item.category),
      title: {
        text: "지출 상세 내역",
        align: "center",
      },
    },
  };
  return (
    <div id="chart">
      <ReactApexChart
        options={donutData.options}
        series={donutData.series}
        type="donut"
        width="400"
      />
    </div>
  );
};
export default GraphItem;
