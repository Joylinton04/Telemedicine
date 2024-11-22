import React, { PureComponent } from 'react';
import { BarChart, Bar, ResponsiveContainer } from 'recharts';


const PatientChart = () => {
    const data = [
        {
          name: 'Week 1',
          uv: 3500,
          pv: 2400,
          amt: 2400,
          fill: '#cbd5e1'
        },
        {
          name: 'Week 2',
          uv: 3000,
          pv: 1398,
          amt: 2210,
          fill: '#cbd5e1'
        },
        {
          name: 'Week 3',
          uv: 5000,
          pv: 9800,
          amt: 2290,
          fill: '#3b82f6'
        },
        {
          name: 'Week 4',
          uv: 2780,
          pv: 3908,
          amt: 2000,
          fill: '#cbd5e1'
        },
      ];

    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart height={50} data={data}>
          <Bar dataKey="uv" fill="fill" />
        </BarChart>
      </ResponsiveContainer>
    );
}

export default PatientChart;
