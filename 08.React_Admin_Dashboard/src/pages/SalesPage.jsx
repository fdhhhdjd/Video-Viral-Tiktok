import React from 'react'
import { motion } from 'framer-motion'
import { CreditCard, DollarSign, ShoppingCart, TrendingUp } from 'lucide-react';

import Header from '../components/common_components/Header'
import StatCards from '../components/common_components/StatCards'

import OverviewSalesChart from '../components/sales/OverviewSalesChart';
import SalesbyCategoryChart from '../components/sales/SalesbyCategoryChart';
import DailySalesTrend from '../components/sales/DailySalesTrend';


const Sales_Stats = {
    totalRevenue: "$1,234,567",
    averageOrderValue: "$78.90",
    conversionRate: "43.67%",
    salesGrowth: "59.3%",
};

const SalesPage = () => {
    return (
        <div className='flex-1 overflow-auto relative z-10 bg-gray-900'>
            <Header title="Sales Dashboard" />

            {/* STAT DATA */}
            <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
                <motion.div
                    className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-7"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <StatCards name="Total Revenue" icon={DollarSign} value={Sales_Stats.totalRevenue} color="#6366f1" />
                    <StatCards name="Avg. Order Value" icon={ShoppingCart} value={Sales_Stats.averageOrderValue} color="#10b981" />
                    <StatCards name="Conversion Rate" icon={TrendingUp} value={Sales_Stats.conversionRate} color="#f59e0b" />
                    <StatCards name="Sales Growth" icon={CreditCard} value={Sales_Stats.salesGrowth} color="#ef4444" />
                </motion.div>

                
                    {/* OVERVIEW CHART OF SALES */}

                <OverviewSalesChart />
                
                    {/* Catagory Sales Chart */}
                
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 mb-7 mt-7'>
                    <SalesbyCategoryChart />
                    <DailySalesTrend />
                </div>  
            </main>
        </div>
    )
}

export default SalesPage