import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { motion } from 'framer-motion'


const Sales_Data = [
    { name: "Aug", Sales: 3000 },
    { name: "Sep", Sales: 3700 },
    { name: "Oct", Sales: 5200 },
    { name: "Nov", Sales: 4600 },
    { name: "Dec", Sales: 5400 },
    { name: "Jan", Sales: 7300 },
    { name: "Feb", Sales: 6100 },
    { name: "Mar", Sales: 5600 },
    { name: "Apr", Sales: 6600 },
    { name: "May", Sales: 6200 },
    { name: "Jun", Sales: 7100 },
    { name: "Jul", Sales: 7700 },
    
]

const SaleOverviewChart = () => {
    return (
        <motion.div
            className='bg-gray-800 bg-opacity-50 shadow-lg backdrop-blur-md rounded-xl p-5 border border-gray-700'
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
        >
            <h2 className='text-lg font-medium mb-4 text-gray-100'>
                Sales Overview
            </h2>

            <div className='h-80'>
                <ResponsiveContainer width={"100%"} height={"100%"}>
                    <LineChart data={Sales_Data}>
                        <CartesianGrid strokeDasharray={'3 3'} stroke='#4b5563' />
                        <XAxis dataKey={"name"} stroke='#9ca3af' />
                        <YAxis stroke='#9ca3af' />
                        <Tooltip
                            contentStyle={{
                                backgroundColor: "rgba(31, 45, 55, 0.8)",
                                borderColor: "#4b5563"
                            }}
                            itemStyle={{ color: "#e5e7eb" }}
                        />
                            <Line
                                type="monotone"
                                dataKey='Sales'
                                stroke='#6366f1'
                                strokeWidth={3}
                                dot={{ fill: '#6366f1', strokeWidth: 2, r: 5 }}
                                activeDot= {{r: 8, strokeWidth: 2}}
                            />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </motion.div>
    )
}

export default SaleOverviewChart