import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const FinancialChart = () => {
    const data = [
        {name: 'Page A',uv: 4000,pv: 400,amt: 1400,fill: "#3b82f6"},
        {name: 'Page B',uv: 3000,pv: 798,amt: 810,fill:'#facc15 '},
    ];

    return (
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <Bar dataKey="pv" fill="fill" background={{ fill: '#dbeafe' }} />
          </BarChart>
        </ResponsiveContainer>
      );
}

export default FinancialChart;
