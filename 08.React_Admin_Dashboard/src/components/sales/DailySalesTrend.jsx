import React from 'react'
import { motion } from 'framer-motion'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Daily_Sales_Data = [
  { name: "Mon", Sales: 800 },
  { name: "Tue", Sales: 1250 },
  { name: "Wed", Sales: 500 },
  { name: "Thu", Sales: 1000 },
  { name: "Fri", Sales: 1300 },
  { name: "Sat", Sales: 1550 },
  { name: "Sun", Sales: 1150 },
];

const DailySalesTrend = () => {
  return (
    <motion.div
      className='bg-gray-800 bg-opacity-50 shadow-lg backdrop-blur-md rounded-xl p-5 border border-gray-700'
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: .7, delay: .7 }}
    >
      <h2 className='text-xl font-semibold mb-4 text-gray-100'>
        Daily Sales Trend
      </h2>

      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <BarChart data={Daily_Sales_Data}>
            <CartesianGrid strokeDasharray="3 3" stroke='#374151' />
            <XAxis dataKey="name" stroke='#9ca3af' />
            <YAxis stroke='#9ca3af' />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31, 41, 55, 0.8)",
                borderColor: "#4b5563",
              }}
              itemStyle={{ color: "#e5e7eb" }}
            />
            <Bar dataKey="Sales" fill='#10b981' />
            <Legend />
          </BarChart>
        </ResponsiveContainer>
      </div>

    </motion.div>
  )
}

export default DailySalesTrend