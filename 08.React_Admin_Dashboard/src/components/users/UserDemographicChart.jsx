import React from 'react'
import { motion } from 'framer-motion'
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts'

const COLORS= ['#8884d8', "#82ca9d", "#ffc658", "#ff8042", "#0088fe"];

const User_Demographic_Data = [
  { name: "18-24", value: 20},
  { name: "25-34", value: 30},
  { name: "35-44", value: 25},
  { name: "45-54", value: 15},
  { name: "55+", value: 10},
];


const UserDemographicChart = () => {
  return (
    <motion.div
      className='bg-gray-800 bg-opacity-50 shadow-lg backdrop-blur-md rounded-xl p-5 lg:col-span-2 border border-gray-700'
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.8, delay: 1.2 }}
    >
      <h2 className='text-xl font-semibold mb-4 text-gray-100'>
        User Demographics
      </h2>

      <div style={{width: "100%", height: 300}}>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={User_Demographic_Data}
              cx={"50%"}
              cy={"50%"}
              outerRadius={100}
              fill='#8884d8'
              labelLine={false}
              dataKey="value"
              label= {({name, percent})=> `${name} ${(percent * 100).toFixed(0)}%`}
            >
              {User_Demographic_Data.map((items, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>

            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31, 45, 55, 0.8)",
                borderColor: "#4b5563"
              }}
              itemStyle={{ color: "#e5e7eb" }}
            />
            <Legend/>
          </PieChart>
        </ResponsiveContainer>
      </div>
    
    </motion.div>
  )
}

export default UserDemographicChart