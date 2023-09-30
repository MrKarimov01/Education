import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Янв',
    Студенты: 400,
    Факультеты: 300,
    Страны: 160,
    amt: 2400,
    Университеты:100,
  },
  {
    name: 'Мар',
    Студенты: 900,
    Факультеты: 380,
    Страны: 180,
    amt: 2210,
    Университеты:160,
  },
  {
    name: 'Июн',
    Студенты: 700,
    Факультеты: 620,
    Страны: 200,
    amt: 2290,
    Университеты:500,
  },
  {
    name: 'Сен',
    Студенты: 1100,
    Факультеты: 1200,
    Страны: 150,
    amt: 2000,
    Университеты:800,
  },
  {
    name: 'Дек',
    Студенты: 900,
    Факультеты: 700,
    Страны: 250,
    amt: 2181,
    Университеты:600,
  },
];

function Diagnostik_chart() {
  
  return (
    <div className="diagnostikchart">
         <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={"100%"}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Студенты" stroke="#000D7F" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="Факультеты" stroke="#82ca9d" />
          <Line type="monotone" dataKey="Страны" stroke="#FCCA58" />
          <Line type="monotone" dataKey="Университеты" stroke="#EF476F  " />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Diagnostik_chart