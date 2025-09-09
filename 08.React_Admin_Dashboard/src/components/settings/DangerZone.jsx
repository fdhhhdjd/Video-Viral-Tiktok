import React, { useState } from 'react';
import { Trash2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DangerZone = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();

    const handleDeleteClick = () => {
        setIsModalOpen(true); 
    };

    const handleConfirmDelete = () => {
        setIsModalOpen(false); 

        // Show toast notification
        toast.success("Your Account Has Been Successfully Deleted.", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            transition: Bounce,
            theme: "light",
        });
        

        // Delay navigation to ensure the toast is displayed
        setTimeout(() => {
            navigate('/'); 
        }, 3000); 
    };

    const handleCancelDelete = () => {
        setIsModalOpen(false); 
    };

    return (
        <>
            <motion.div
                className='bg-red-900 bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg p-6 border border-red-700 mb-3'
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
            >
                <div className='flex items-center mb-4'>
                    <Trash2 className='text-red-400 mr-3' size={24} />
                    <h2 className='text-xl font-semibold text-gray-100'>Danger Zone</h2>
                </div>

                <p className='text-gray-300 mb-4'>
                    Deleting your account will permanently remove all account data and content. Please confirm if you wish to proceed, as this action cannot be undone.
                </p>
                <button
                    className='bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded transition duration-300'
                    onClick={handleDeleteClick}
                >
                    Delete Account
                </button>

                
                {/* Confirmation Modal */}
                {isModalOpen && (
                    <motion.div
                        className="fixed inset-0 bg-gray-800 bg-opacity-30 flex items-center justify-center z-50"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0, duration: 0.5 }}
                    >
                        <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-sm w-full text-center">
                            <h3 className="text-lg font-semibold text-red-200 mb-4">
                                Are you sure you want to delete your account?
                            </h3>
                            <p className="text-red-300 mb-6">
                                This action is irreversible and will permanently delete your account.
                            </p>
                            <div className="flex justify-center space-x-4">
                                <button
                                    className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded"
                                    onClick={handleConfirmDelete}
                                >
                                    Yes, Delete
                                </button>
                                <button
                                    className="bg-gray-300 hover:bg-gray-400 text-red-800 font-semibold py-2 px-4 rounded"
                                    onClick={handleCancelDelete}
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </motion.div>

            {/* Toast Container */}
            <ToastContainer />
        </>
    );
};

export default DangerZone;
