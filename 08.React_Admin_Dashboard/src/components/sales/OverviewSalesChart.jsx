import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AreaChart, Area, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis, Legend } from 'recharts';


const Monthly_Sales_Data = [
  {month : "Jan", Sales: 4000},
  {month : "Feb", Sales: 3000},
  {month : "Mar", Sales: 5000},
  {month : "Apr", Sales: 4500},
  {month : "May", Sales: 6000},
  {month : "Jun", Sales: 5500},
  {month : "Jul", Sales: 7000},
]

const OverviewSalesChart = () => {
  const [SelectedTimeRange, setSelectedTimeRange] = useState("This Quarter");

  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 shadow-lg backdrop-blur-md rounded-xl p-5 text-center lg:col-span-2 border border-gray-700"
      initial={{ opacity: 0,  y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2,  delay: 0.2 }}
    >
      <div className='flex items-center justify-between mb-6'>
        <h2 className='text-xl font-semibold mb-4 text-gray-100'>
          Sales Overview
        </h2>

        <select
          className='bg-gray-700 text-white rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-600'
          value={SelectedTimeRange}
          onChange={(e) => setSelectedTimeRange(e.target.value)}
        >
          <option>This Week</option>
          <option>This Month</option>
          <option>This Quarter</option>
          <option>This Year</option>
        </select>
      </div>


      <div className='w-full h-80'>
        <ResponsiveContainer>
          <AreaChart data={Monthly_Sales_Data}>
            <CartesianGrid strokeDasharray='3 3' stroke='#374151' />
            <XAxis dataKey="month" stroke='#9ca3af' />
            <YAxis stroke='#9ca3af' />
            <Tooltip 
              contentStyle={{
                backgroundColor: "rgba(31, 41, 55, 0.8) ",
                borderColor: "#4b5563",
              }}
              itemStyle={{color: "#e5e7eb"}}
            />
            <Area type="monotone" dataKey="Sales" stroke='#8b5cf6' fill='#8b5cf6' fillOpacity={0.3}/>
          <Legend/> 
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}

export default OverviewSalesChart;
