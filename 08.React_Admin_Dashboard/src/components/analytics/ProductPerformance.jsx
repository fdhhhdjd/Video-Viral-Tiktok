import { motion } from "framer-motion";
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const Product_Performance_Data = [
  { name: "Product A", Sales: 4000, Revenue: 2650, Profit: 2200 },
  { name: "Product B", Sales: 3000, Revenue: 1398, Profit: 2210 },
  { name: "Product C", Sales: 2000, Revenue: 5500, Profit: 2290 },
  { name: "Product D", Sales: 2780, Revenue: 3908, Profit: 2000 },
  { name: "Product E", Sales: 1890, Revenue: 4800, Profit: 2181 },
];

const ProductPerformance = () => {
  return (
    <motion.div
      className='bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg rounded-xl p-6 border border-gray-700 mt-7'
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: .4 }}
    >
      <h2 className='text-xl font-semibold text-gray-100 mb-4'>
        Product Performance
      </h2>

      
      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <BarChart data={Product_Performance_Data}>
            <CartesianGrid strokeDasharray='3 3' stroke='#374151' />
            <XAxis dataKey='name' stroke='#9CA3AF' />
            <YAxis stroke='#9CA3AF' />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31, 41, 55, 0.8)",
                borderColor: "#4B5563",
              }}
              itemStyle={{ color: "#E5E7EB" }}
            />
            <Legend />
            <Bar dataKey='Sales' fill='#8B5CF6' />
            <Bar dataKey='Revenue' fill='#10B981' />
            <Bar dataKey='Profit' fill='#F59E0B' />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};
export default ProductPerformance;