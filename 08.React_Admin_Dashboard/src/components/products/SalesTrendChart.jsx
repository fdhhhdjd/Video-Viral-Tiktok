import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts'
import { motion } from 'framer-motion'


const SalesTrend_Data = [
    { month: "Jan", Sales: 3900 },
    { month: "Feb", Sales: 3000 },
    { month: "Mar", Sales: 5000 },
    { month: "Apr", Sales: 3500 },
    { month: "May", Sales: 6000 },
    { month: "Jun", Sales: 5600 },
    { month: "Jul", Sales: 7300 },

]

const SalesTrendChart = () => {
    return (
        <motion.div
            className='bg-gray-800 bg-opacity-50 shadow-lg backdrop-blur-md rounded-xl p-5 border border-gray-700'
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 0.3 }}
        >
            <h2 className='text-lg font-medium mb-4 text-gray-100'>
                Sales Trend
            </h2>

            <div style={{ width: "100%", height: 300 }}>
                {/* NO SUCH DIFFERENCE  */}

            {/* <div className='h-80'> */}
                <ResponsiveContainer width={'100%'} height={"100%"}>
                    <LineChart data={SalesTrend_Data}>
                        <CartesianGrid strokeDasharray={'3 3'} stroke='#374151' />
                        <XAxis dataKey={"month"} stroke='#9ca3af' />
                        <YAxis stroke='#9ca3af' />
                        <Tooltip
                            contentStyle={{
                                backgroundColor: "rgba(31, 45, 55, 0.8)",
                                borderColor: "4b5563"
                            }}
                            itemStyle={{ color: "#e5e7eb" }}
                        />
                        <Line
                            type="monotone"
                            dataKey='Sales'
                            stroke='#8b5cf6'
                            strokeWidth={2}
                        />
                        <Legend/>
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </motion.div>
    )
}

export default SalesTrendChart