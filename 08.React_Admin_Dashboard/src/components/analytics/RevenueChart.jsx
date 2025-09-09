import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AreaChart, Area, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis, Legend } from 'recharts';


const Analytics_Data = [
    { month: "Jan", Revenue: 4200 , Target: 5000 },
    { month: "Feb", Revenue: 3000 , Target: 3200 },
    { month: "Mar", Revenue: 5500 , Target: 4500 },
    { month: "Apr", Revenue: 4500 , Target: 4200 },
    { month: "May", Revenue: 5500 , Target: 6000 },
    { month: "Jun", Revenue: 4500 , Target: 4800 },
    { month: "Jul", Revenue: 7000 , Target:6500 },
]

const RevenueChart = () => {

    const [SelectedTimeRange, setSelectedTimeRange] = useState("This Quarter");

    return (
        <motion.div
            className="bg-gray-800 bg-opacity-50 shadow-lg backdrop-blur-md rounded-xl p-5 text-center lg:col-span-2 border border-gray-700"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0.2 }}
        >
            <div className='flex items-center justify-between mb-6'>
                <h2 className='text-xl font-semibold mb-4 text-gray-100'>
                    Revenue Vs Targer
                </h2>

                <select
                    className='bg-gray-700 text-white rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-600'
                    value={SelectedTimeRange}
                    onChange={(e) => setSelectedTimeRange(e.Target.value)}
                >
                    <option>This Week</option>
                    <option>This Month</option>
                    <option>This Quarter</option>
                    <option>This Year</option>
                </select>
            </div>

            <div className='w-full h-80'>
                <ResponsiveContainer>
                    <AreaChart data={Analytics_Data}>
                        <CartesianGrid strokeDasharray='3 3' stroke='#374151' />
                        <XAxis dataKey="month" stroke='#9ca3af' />
                        <YAxis stroke='#9ca3af' />
                        <Tooltip
                            contentStyle={{
                                backgroundColor: "rgba(31, 41, 55, 0.8) ",
                                borderColor: "#4b5563",
                            }}
                            itemStyle={{ color: "#e5e7eb" }}
                        />
                        <Legend />
                        <Area type="monotone" dataKey="Revenue" stroke='#8b5cf6' fill='#8b5cf6' fillOpacity={0.3} />
                        <Area type="monotone" dataKey="Target" stroke='#10b981' fill='#10b981' fillOpacity={0.3} />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </motion.div>
    )
}

export default RevenueChart