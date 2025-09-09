import React from 'react'
import { motion } from 'framer-motion'
import { AlertTriangle, DollarSign, Package, TrendingUp } from 'lucide-react'

import Header from '../components/common_components/Header'
import StatCards from '../components/common_components/StatCards'
import ProductTable from '../components/products/ProductTable'
import SalesTrendChart from "../components/products/SalesTrendChart"
import CategoryDistributionChart from '../components/overview/CategoryDistributionChart'

const ProductsPage = () => {
  return (
    <div className='flex-1 overflow-auto relative z-10 bg-gray-900'>
      <Header title="Products" />
      

            {/* STAT DATA  */}
      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        <motion.div
            className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-7"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
        >
            <StatCards name="Total Products" icon={Package} value="4,321" color="#6366f1" />
            <StatCards name="Top Selling" icon={TrendingUp} value="69" color="#10b981" />
            <StatCards name="Low Stock" icon={AlertTriangle} value="32" color="#f59e0b" />
            <StatCards name="Total Revenue" icon={DollarSign} value="$654,310" color="#ef4444" />
        </motion.div>

        
            {/* PRODUCT TABLE */}

        <ProductTable />


            {/* CHARTS */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <SalesTrendChart />
          <CategoryDistributionChart/>
        </div>


      </main>
    </div>

  )
}

export default ProductsPage