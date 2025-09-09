import React from "react";

import Header from "../components/common_components/Header";
import StatCards from "../components/common_components/StatCards";
import SaleOverviewChart from "../components/overview/SaleOverviewChart";
import CategoryDistributionChart from "../components/overview/CategoryDistributionChart";
import SalesChannelChart from "../components/overview/SalesChannelChart";

import { motion } from "framer-motion";
import { BarChart2, ShoppingBag, Users, Zap } from "lucide-react";


const OverviewPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10 bg-gray-900">
      <Header title="Overview" />

      
      {/* STAT DATA  */}
      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-7"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCards name="Total Sales" icon={Zap} value="$13,459" color="#6366f1" />
          <StatCards name="New Users" icon={Users} value="1,987" color="#8b5cf6" />
          <StatCards name="Total Products" icon={ShoppingBag} value="5,678" color="#ec4899" />
          <StatCards name="Conversion Rate" icon={BarChart2} value="14.9%" color="#10b981" />

        </motion.div>


        {/* CHARTS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <SaleOverviewChart />
          <CategoryDistributionChart />
          <SalesChannelChart />
        </div>
      </main>
    </div>
  );
};

export default OverviewPage;
