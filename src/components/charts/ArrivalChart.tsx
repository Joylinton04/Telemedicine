import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const ArrivalChart = () => {
    const data = [
        {name: 'Jan','Patient In': 300,'Patient Out': 100,amt: 2400,},
        {name: 'Feb','Patient In': 700,'Patient Out': 298,amt: 2210,},
        {name: 'Mar','Patient In': 1000,'Patient Out': 300,amt: 2290,},
        {name: 'Apr','Patient In': 780,'Patient Out': 308,amt: 2000,},
        {name: 'May','Patient In': 890,'Patient Out': 451,amt: 2181,},
        {name: 'June','Patient In': 990,'Patient Out': 300,amt: 2500,},
        {name: 'July','Patient In': 620,'Patient Out': 255,amt: 2100,},
        {name: 'Aug','Patient In': 490,'Patient Out': 200,amt: 2181,},
        {name: 'Sep','Patient In': 1000,'Patient Out': 200,amt: 2500,},
        {name: 'Oct','Patient In': 790,'Patient Out': 500,amt: 2100,},
        {name: 'Nov','Patient In': 990,'Patient Out': 800,amt: 2500,},
        {name: 'Dec','Patient In': 1090,'Patient Out': 790,amt: 2100,},
      ];
return (
    <ResponsiveContainer width="100%" height="100%">
        <LineChart
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
        <CartesianGrid vertical={false} stroke='#f3f4f6'/>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line 
            type="monotone" 
            dataKey="Patient In" 
            stroke="#facc15"
            activeDot={{ r: 8 }} 
            dot={false}
            strokeWidth={2} 
            />
        <Line 
            type="monotone" 
            dataKey="Patient Out" 
            stroke="#22c55e"
            dot={false}
            strokeWidth={2} 
            />
        </LineChart>
    </ResponsiveContainer>
    );
}

export default ArrivalChart;
