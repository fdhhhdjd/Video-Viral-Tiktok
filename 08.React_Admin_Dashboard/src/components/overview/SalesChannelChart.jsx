import React from 'react'
import { motion } from 'framer-motion'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, Cell } from 'recharts';


const Sales_Channel_Data = [
    { name: "Website", Value: 53000 },
    { name: "Mobile App", Value: 38200 },
    { name: "Marketplace", Value: 17000 },
    { name: "Social Media", Value: 28700 },
    { name: "Email Marketing", Value: 50000 },
    { name: "Affiliate Marketing", Value: 35000 },
    { name: "Direct Sales", Value: 25000 },
];

const COLORS = ["#6366f1", "#8B5CF6", "#EC4899", "#10B981", "#F59E0B", "#3B82F6", "#6EE7B7" ];




const SalesChannelChart = () => {
    return (
        <motion.div
            className='bg-gray-800 bg-opacity-50 shadow-lg backdrop-blur-md rounded-xl p-5 lg:col-span-2 border border-gray-700'
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
        >
            <h2 className='text-lg font-medium mb-4 text-gray-100'>
                Sales by Channel
            </h2>

            <div className='h-80'>
                <ResponsiveContainer>
                    <BarChart
                        data={Sales_Channel_Data}
                    >
                        <CartesianGrid strokeDasharray='3 3' stroke='#4b5563' />
                        <XAxis dataKey="name" stroke='#9ca3af' />
                        <YAxis stroke='#9ca3af' />
                        <Tooltip
                            contentStyle={{
                                backgroundColor: "rgba(31, 41, 55, 0.8)",
                                borderColor: "#4b5563",
                            }}
                            itemStyle={{ color: "#e5e7eb" }}
                        />
                        <Legend />  {/* if want to remove text {"Value"} at the most bottom the remove this legend  */}
                        <Bar
                            dataKey={"Value"} fill='#8884d8'
                        >
                            {Sales_Channel_Data.map((item, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </motion.div>
    )
}

export default SalesChannelChart