import "./barchartBox.scss";
import { ResponsiveContainer, BarChart, Bar, Tooltip } from "recharts";
type Props = {
  title: string;
  color: string;
  dataKey: string;
  chartData: object[];
};
const BarchartBox = (props: Props) => {
  return (
    <div className="barchartBox">
      <h1>{props.title}</h1>
      <div className="chart">
        <ResponsiveContainer width="100%" height={150}>
          <BarChart data={props.chartData}>
            <Tooltip
              contentStyle={{ background: "#2a3447", borderRadius: "5px" }}
              labelStyle={{ display: "none" }}
              cursor={{ fill: "none" }}
            />
            <Bar dataKey={props.dataKey} fill={props.color} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BarchartBox;
