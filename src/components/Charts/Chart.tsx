import ChartBar from "./ChartBar";
import "../Charts/Chart.css";

const Chart = ({ dataPoints }: any) => {
  const dataPointValues = dataPoints.map((dataPoint: any) => dataPoint.value);
  const totalMaximun = Math.max(...dataPointValues);
  return (
    <div className="chart">
      {dataPoints.map((dataPoint: any) => {
        return (
          <ChartBar
            key={dataPoint.label}
            value={dataPoint.value}
            maxValue={totalMaximun}
            label={dataPoint.label}
          />
        );
      })}
    </div>
  );
};

export default Chart;
