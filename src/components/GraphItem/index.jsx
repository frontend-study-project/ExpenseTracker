import ReactApexChart from "react-apexcharts";
import {
  filterByDate,
  groupByDate,
  sortByDate,
} from "../../utils/function/filterByDate";
import { useCallback, useEffect, useState } from "react";
const GraphItem = ({ items, startDate, endDate }) => {
  const [donut, setDonut] = useState([]);
  const data = filterByDate(sortByDate(groupByDate(items)), [
    startDate,
    endDate,
  ]);
  const newmakeArray = useCallback(() => {
    let amountArray = [];
    data.map((item) =>
      item.contents.map((sub) => amountArray.push(sub.amount))
    );
    return amountArray;
  }, []);

  const fetchData = useCallback(() => {
    const newArray = newmakeArray();
    console.log(newArray);
    setDonut([...newArray]);
  }, [newmakeArray]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    console.log(data);
    console.log(data.map((item) => item.contents.map((sub) => sub.amount)));
  }, [data]);
  // 도넛차트 데이터
  const donutData = {
    series: data.map((item) => item.contents.map((sub) => sub.amount)),
    // series: donut.map((item) => item),
    // {
    //   data:
    //     data.length > 0
    //       ? data.map((item) => item.contents.map((sub) => sub.amount))
    //       : null,
    // },

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
                label: "Monthly",
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
      labels: data.map((item) => item.contents.map((sub) => sub.category)),
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
