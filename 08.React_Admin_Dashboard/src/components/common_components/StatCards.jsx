import React from 'react'
import { motion } from 'framer-motion'

const StatCards = ({ name, icon: Icon, value, color }) => {
    return (
        <motion.div
            className='bg-gray-800 bg-opacity-50 backdrop-blur-md overflow-hidden shadow-lg rounded-lg border border-gray-700'
            whileHover={{ y: -6, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)" }}
        >
            <div className='px-4 py-5 sm:p-6'>
                <span className='flex items-center text-sm font-medium text-gray-200'>
                    <Icon
                        size={22}
                        className="mr-2"
                        style={{ color }}
                    />
                    {name}
                </span>
                <p
                    className='mt-2 text-gray-100 font-semibold text-[27px]'
                >
                    {value}
                </p>
            </div>
        </motion.div>
    )
}

export default StatCards