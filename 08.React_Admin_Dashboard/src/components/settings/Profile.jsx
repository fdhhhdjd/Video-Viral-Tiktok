import React, { useState } from 'react';
import SettingSection from './SettingSection';
import { User, X } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from "/src/assests/Mudassar Nazir.png"

const Profile = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [name, setName] = useState('Mudassar Nazir');
    const [email, setEmail] = useState('mudassarnazir137@gmail.com');
    const [tempName, setTempName] = useState(name);
    const [tempEmail, setTempEmail] = useState(email);

    // Toggle modal visibility
    const openModal = () => {
        setTempName(name);
        setTempEmail(email);
        setIsModalOpen(true);
    };
    const closeModal = () => setIsModalOpen(false);

    // Save changes
    const handleSave = () => {
        setName(tempName);
        setEmail(tempEmail);
        closeModal();
    };

    return (
        <SettingSection icon={User} title="Profile">
            <div className='flex flex-col sm:flex-row items-center mb-6'>
                <img
                    src={Image}
                    alt="Image"
                    className='rounded-full size-28 object-cover mr-4 mb-4 sm:mb-0'
                />
                <div>
                    <h3 className='text-xl font-semibold text-gray-100 mb-1'>{name}</h3>
                    <p className='text-gray-300'>{email}</p>
                </div>
            </div>

            <button
                onClick={openModal}
                className='bg-indigo-600 hover:bg-indigo-800 text-white font-semibold py-2 px-6 rounded transition duration-300 w-full sm:w-auto'
            >
                Edit Profile
            </button>

            {/* Inline Modal for editing profile */}
            {isModalOpen && (
                <motion.div
                    className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0, duration: 0.5 }}
                >
                    <div className="bg-gray-800 p-6 rounded shadow-lg w-11/12 sm:w-2/4 relative">
                        <button
                            onClick={closeModal}
                            className="text-gray-300 hover:text-gray-100 absolute top-4 right-4"
                        >
                            <X/>
                        </button>
                        <h2 className="text-xl font-semibold text-gray-100 mb-4">Edit Profile</h2>
                        <input
                            type="text"
                            value={tempName}
                            onChange={(e) => setTempName(e.target.value)}
                            className="w-full mb-3 p-2 rounded bg-gray-700 text-white outline-none"
                            placeholder="Enter name"
                        />
                        <input
                            type="email"
                            value={tempEmail}
                            onChange={(e) => setTempEmail(e.target.value)}
                            className="w-full mb-3 p-2 rounded bg-gray-700 text-white outline-none"
                            placeholder="Enter email"
                        />
                        <button
                            onClick={handleSave}
                            className='bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded transition duration-300 w-full'
                        >
                            Save Changes
                        </button>
                    </div>
                </motion.div>
            )}
        </SettingSection>
    );
};

export default Profile;
