import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, Clock, DollarSign, ShoppingBag } from 'lucide-react';

import Header from '../components/common_components/Header'
import StatCards from '../components/common_components/StatCards';

import DailyOrdersChart from "../components/orders/DailyOrdersChart"
import StatusDistributionChart from '../components/orders/StatusDistributionChart'
import OrdersTable from '../components/orders/OrdersTable'


const Orders_Stat = {
    totalOrders: "2,521",
    pendingOrders: "341",
    completedOrders: "2,180",
    totalRevenue: "$98,765",
};


const OrdersPage = () => {
    return (
        <div className='flex-1 overflow-auto relative z-10 bg-gray-900'>
            <Header title="Orders Details" />
            
            {/* STAT DATA */}
            <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
                <motion.div
                    className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-7"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <StatCards name="Total Orders" icon={ShoppingBag} value={Orders_Stat.totalOrders} color="#6366f1" />
                    <StatCards name="Pending Orders" icon={Clock} value={Orders_Stat.pendingOrders} color="#10b981" />
                    <StatCards name="Completed Orders" icon={CheckCircle} value={Orders_Stat.completedOrders} color="#f59e0b" />
                    <StatCards name="Total Revenue" icon={DollarSign} value={Orders_Stat.totalRevenue} color="#ef4444" />
                </motion.div>

                
                {/* DAILY ORDERS and ORDER STATUS DISTRIBUTION CHART */}

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 mb-7'>
                    <DailyOrdersChart />
                    <StatusDistributionChart />
                </div>

                {/* ORDERS TABLE */}
                    <OrdersTable/>
            </main>
        </div>
    )
}

export default OrdersPage