import React, { useState } from 'react'
import SettingSection from './SettingSection'
import { HelpCircle, Plus } from 'lucide-react'
import Facebook from "/src/assests/facebook.svg"
import Google  from "/src/assests/google.webp"
import Twitter  from "/src/assests/x.webp"

const ConnectedAccounts = () => {

    const [connectedAccounts, setConnectedAccounts] = useState([
        {
            id: 1,
            name: "Google",
            connected: true,
            icon: Google
        },
        {
            id: 2,
            name: "Facebook",
            connected: false,
            icon: Facebook
        },
        {
            id: 3,
            name: "Twitter",
            connected: true,
            icon: Twitter
        },
    ]);

    return (
        <SettingSection icon={HelpCircle} title={"Connected Accounts"}>

            {connectedAccounts.map((Account, index) => (
                <div key={Account.id} className='flex Accounts-center justify-between py-3'>
                    <div className='flex gap-1'>
                        <img src={Account.icon} alt="Social Icon" className='size-7 rounded-full object-cover mr-2'/>
                        <span className='text-gray-300'>{Account.name}</span>
                    </div>


                    <button className={`
                        px-3 py-1 rounded text-white transition duration-300
                        ${Account.connected ? "bg-green-600 hover:bg-green-700" : "bg-gray-600 hover:bg-gray-700"}
                    `}
                        onClick={() => {
                            setConnectedAccounts(
                                connectedAccounts.map((acc) => {
                                    if (acc.id === Account.id) {
                                        return {
                                            ...acc,
                                            connected: !acc.connected,
                                        };
                                    }
                                    return acc;
                                })
                            );
                        }}
                    >
                        { Account.connected ? "Connected" : "Connect" }
                    </button>
                </div>
            ))}





            <button className='mt-4 flex items-center text-indigo-400 hover:text-indigo-300 transition duration-200'>
                <Plus size={18} className='mr-2'/> Add Account
            </button>
        </SettingSection>
    )
}

export default ConnectedAccounts