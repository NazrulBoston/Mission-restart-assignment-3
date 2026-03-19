import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const RatingsChart = ({ ratings }) => {
  // Show 5 star at top
  const data = [...ratings].reverse();

  return (
    <div className="w-full h-[250px] mt-8">
      <h2 className="text-xl font-semibold mb-4">Ratings</h2>

      <ResponsiveContainer>
        <BarChart data={data} layout="vertical">
          
          {/* Hide X axis numbers (optional) */}
          <XAxis type="number" />

          {/* Show star labels */}
          <YAxis type="category" dataKey="name" />

          <Tooltip />

          {/* Orange bars */}
          <Bar
            dataKey="count"
            fill="#FF7A00"
            radius={[0, 10, 10, 0]}
            barSize={20}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RatingsChart;