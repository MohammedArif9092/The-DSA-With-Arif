import React from 'react';
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

interface StatsChartProps {
  data: number[];
}

export const StatsChart: React.FC<StatsChartProps> = ({ data }) => {
  const chartData = data.map((val, idx) => ({
    day: ['M', 'T', 'W', 'T', 'F', 'S', 'S'][idx],
    solved: val
  }));

  const colors = ['#FFDE00', '#FF69B4', '#00BFFF', '#00FF7F', '#9370DB', '#FFDE00', '#FF69B4'];

  return (
    <div className="h-48 w-full mt-4 bg-white border-4 border-black shadow-neo-sm p-2">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={chartData}>
          <XAxis 
            dataKey="day" 
            tick={{ fontFamily: 'Space Mono', fontSize: 12, fill: 'black' }} 
            axisLine={false}
            tickLine={false}
          />
          <Tooltip 
            cursor={{fill: 'transparent'}}
            contentStyle={{ 
              backgroundColor: '#000', 
              color: '#fff', 
              border: 'none', 
              fontFamily: 'Space Mono' 
            }}
          />
          <Bar dataKey="solved" radius={[4, 4, 0, 0]}>
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} stroke="black" strokeWidth={2} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};