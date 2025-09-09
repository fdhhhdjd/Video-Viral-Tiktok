import { Lock } from 'lucide-react'
import React, { useState } from 'react'
import SettingSection from './SettingSection'
import ToogleSwitch from './ToogleSwitch'


const Security = () => {

    const [twoFactor, setTwoFactor] = useState(true);

    return (
        <SettingSection icon={Lock} title={"Security"}>
            <ToogleSwitch
                Label={"Two Factor Authentication"}
                isOn={twoFactor}
                onToggle={() => setTwoFactor(!twoFactor)}
            />

            <button className='bg-indigo-600 hover:bg-indigo-800 text-white font-semibold py-2 px-6 rounded transition duration-300 w-full sm:w-auto'>
                Change Password
            </button>
        </SettingSection>
    )
}

export default Security