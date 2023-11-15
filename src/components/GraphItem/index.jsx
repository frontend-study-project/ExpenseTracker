import ReactApexChart from "react-apexcharts";
const GraphItem = ({ items }) => {
  // 도넛차트 데이터!!
  const donutData = {
    series: items.map((item) => item.amount),
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
      labels: items.map((item) => item.category),
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
