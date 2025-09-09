import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Eye, Search, X } from 'lucide-react';

const Order_Data = [
    { id: "ORD001", customer: "Mudassar", total: 235.4, status: "Delivered", date: "2023-07-01" },
    { id: "ORD002", customer: "Danish", total: 412.0, status: "Processing", date: "2023-07-02" },
    { id: "ORD003", customer: "Ayesha", total: 162.5, status: "Shipped", date: "2023-07-03" },
    { id: "ORD004", customer: "Hassan", total: 750.2, status: "Pending", date: "2023-07-04" },
    { id: "ORD005", customer: "Sarah", total: 95.8, status: "Delivered", date: "2023-07-05" },
    { id: "ORD006", customer: "Zainab", total: 310.75, status: "Processing", date: "2023-07-06" },
    { id: "ORD007", customer: "Rizwan", total: 528.9, status: "Shipped", date: "2023-07-07" },
    { id: "ORD008", customer: "Kiran", total: 189.6, status: "Delivered", date: "2023-07-08" },
    { id: "ORD009", customer: "Ali", total: 675.0, status: "Pending", date: "2023-07-09" },
    { id: "ORD010", customer: "Sara", total: 225.4, status: "Delivered", date: "2023-07-10" },
    { id: "ORD011", customer: "Kamran", total: 330.6, status: "Processing", date: "2023-07-11" },
    { id: "ORD012", customer: "Farah", total: 480.0, status: "Shipped", date: "2023-07-12" },
    { id: "ORD013", customer: "Usman", total: 560.2, status: "Delivered", date: "2023-07-13" },
    { id: "ORD014", customer: "Asma", total: 310.5, status: "Pending", date: "2023-07-14" },
    { id: "ORD015", customer: "Bilal", total: 745.8, status: "Processing", date: "2023-07-15" },
    { id: "ORD016", customer: "Imran", total: 420.0, status: "Shipped", date: "2023-07-16" },
    { id: "ORD017", customer: "Nida", total: 250.7, status: "Delivered", date: "2023-07-17" },
    { id: "ORD018", customer: "Hamza", total: 555.3, status: "Pending", date: "2023-07-18" }
];

const OrdersTable = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredOrders, setFilteredOrders] = useState(Order_Data);
    const [currentPage, setCurrentPage] = useState(1);
    const [showModal, setShowModal] = useState(false);
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [updatedStatus, setUpdatedStatus] = useState("");
    const itemsPerPage = 6;

    // Calculate total pages
    const totalPages = Math.ceil(filteredOrders.length / itemsPerPage);

    // Handle Search
    const SearchHandler = (e) => {
        const term = e.target.value.toLowerCase();
        setSearchTerm(term);
        const filtered = Order_Data.filter(order =>
            order.customer.toLowerCase().includes(term)
        );
        setFilteredOrders(filtered);
        setCurrentPage(1);
    };

    // Pagination
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    const getCurrentPageOrders = () => {
        const start = (currentPage - 1) * itemsPerPage;
        return filteredOrders.slice(start, start + itemsPerPage);
    };

    // Open modal and set selected order
    const handleOpenModal = (order) => {
        setSelectedOrder(order);
        setUpdatedStatus(order.status);
        setShowModal(true);
    };

    // Update order status
    const handleSaveStatus = () => {
        setFilteredOrders(prevOrders =>
            prevOrders.map(order =>
                order.id === selectedOrder.id ? { ...order, status: updatedStatus } : order
            )
        );
        setShowModal(false);
    };

    return (
        <motion.div
            className='bg-gray-800 bg-opacity-50 shadow-lg backdrop-blur-md rounded-xl p-5 border border-gray-700 mb-6 relative z-10'
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
        >

            {/* Header and Search */}
            <div className='flex justify-between items-center mb-6'>
                <h2 className='text-xl font-semibold text-gray-100'>Orders List</h2>

                <div className='relative flex items-center'>
                    <Search className='absolute left-3 text-gray-400 sm:left-2.5 top-2.5' size={20} />
                    <input
                        type="text"
                        placeholder='Search Product...'
                        className='bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-blue-500'
                        onChange={SearchHandler}
                        value={searchTerm}
                    />
                </div>

            </div>

            {/* TABLE */}
            <div className='overflow-x-auto' style={{ minHeight: '400px' }}>
                <table className='min-w-full divide-y divide-gray-400'>
                    <thead>
                        <tr>
                            <th className='px-6 py-3 text-left text-sm font-medium text-gray-300 uppercase tracking-wider'>Order ID</th>
                            <th className='px-6 py-3 text-left text-sm font-medium text-gray-300 uppercase tracking-wider'>Customer</th>
                            <th className='px-6 py-3 text-left text-sm font-medium text-gray-300 uppercase tracking-wider'>Total</th>
                            <th className='px-6 py-3 text-left text-sm font-medium text-gray-300 uppercase tracking-wider'>Status</th>
                            <th className='px-6 py-3 text-left text-sm font-medium text-gray-300 uppercase tracking-wider'>Date</th>
                            <th className='px-6 py-3 text-left text-sm font-medium text-gray-300 uppercase tracking-wider'>Action</th>
                        </tr>
                    </thead>

                    <tbody className='divide-y divide-gray-500'>
                        {getCurrentPageOrders().map((order) => (
                            <motion.tr
                                key={order.id}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1.1, delay: 0.2 }}
                            >
                                <td className='px-6 py-4 whitespace-nowrap'>
                                    <div className='text-sm font-semibold text-gray-100 tracking-wider'>{order.id}</div>
                                </td>
                                <td className='px-6 py-4 whitespace-nowrap'>
                                    <div className='text-sm text-gray-300'>{order.customer}</div>
                                </td>
                                <td className='px-6 py-4 whitespace-nowrap'>
                                    <div className='text-sm text-gray-300'>{order.total.toFixed(2)}</div>
                                </td>
                                <td className='px-6 py-4 whitespace-nowrap'>
                                    <span className={`px-3 inline-flex rounded-full text-xs leading-5 font-semibold ${order.status === "Delivered" ? "bg-green-700 text-green-100" : order.status === "Shipped" ? "bg-blue-700 text-blue-100" : order.status === "Processing" ? "bg-yellow-700 text-yellow-100" : "bg-red-700 text-red-100"}`}>
                                        {order.status}
                                    </span>
                                </td>
                                <td className='px-6 py-4 whitespace-nowrap'>
                                    <div className='text-sm text-gray-300'>{order.date}</div>
                                </td>
                                <td className='px-6 py-4 whitespace-nowrap'>
                                    <button onClick={() => handleOpenModal(order)}>
                                        <Eye className='text-blue-500 cursor-pointer' size={20} />
                                    </button>
                                </td>
                            </motion.tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Eye edit Modal */}
            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <motion.div
                        className="bg-gray-800 rounded-lg shadow-lg p-6 w-full max-w-xl"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div>
                            <h1 className="text-2xl font-semibold text-gray-100 mb-5 tracking-wider">
                                Update Status for:
                            </h1>
                            <label className="text-sm text-gray-300">Customer's Name</label>
                            <h2 className="text-lg font-normal mb-4 max-w-[16rem] px-4 py-2 bg-gray-700 text-white rounded-md">
                                {selectedOrder.customer}
                            </h2>
                        </div>

                        {/* Responsive grid layout for dropdown */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div className="flex flex-col space-y-1">
                                <label className="text-sm text-gray-300">Current Order Status</label>
                                <select
                                    className=" max-w-xl px-4 py-2 bg-gray-700 text-white rounded-md"
                                    value={updatedStatus}
                                    onChange={(e) => setUpdatedStatus(e.target.value)}
                                >
                                    <option value="Pending">Pending</option>
                                    <option value="Processing">Processing</option>
                                    <option value="Shipped">Shipped</option>
                                    <option value="Delivered">Delivered</option>
                                </select>
                            </div>
                        </div>

                        <div className="flex justify-end mt-5 space-x-2">
                            <button
                                onClick={() => setShowModal(false)}
                                className="bg-gray-600 hover:bg-red-500 text-gray-100 px-4 py-2 rounded-md"
                            >
                                <X size={22} />
                            </button>
                            <button
                                onClick={handleSaveStatus}
                                className="bg-blue-600 hover:bg-blue-800 text-white text-md px-3 py-3 rounded-md w-32"
                            >
                                Save Changes
                            </button>
                        </div>
                    </motion.div>
                </div>
            )}


            {/* Enhanced Pagination Controls */}
            <div className='flex flex-col md:flex-row justify-between mt-4 space-x-2 items-center'>
                <div className='flex items-center'>
                    <button
                        onClick={() => paginate(currentPage - 1)}
                        disabled={currentPage === 1}
                        className={`text-sm px-3 py-1 border rounded-md ${currentPage === 1 ? 'text-gray-400 border-gray-600' : 'text-gray-100 border-gray-300 hover:bg-gray-300 hover:text-gray-800'}`}
                    >
                        <ChevronLeft size={18} />
                    </button>
                    <span className='mx-2 text-sm font-medium text-gray-100'>Page {currentPage} of {totalPages}</span>
                    <button
                        onClick={() => paginate(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className={`text-sm px-3 py-1 border rounded-md ${currentPage === totalPages ? 'text-gray-400 border-gray-600' : 'text-gray-100 border-gray-300 hover:bg-gray-300 hover:text-gray-800'}`}
                    >
                        <ChevronRight size={18} />
                    </button>
                </div>

                <div className='text-sm font-medium text-gray-300 tracking-wider mt-5 md:mt-0'>Total Orders: {filteredOrders.length}</div>
            </div>
        </motion.div>
    );
};

export default OrdersTable;
