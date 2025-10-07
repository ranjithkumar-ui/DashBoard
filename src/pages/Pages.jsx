import React, { useState } from 'react';
import SideBar from './SideBar';

const Pages = () => {

    const [index, setindex] = useState(0);

    const renderContent = () => {
        switch (index) {
            case 0:
                return <h2>Welcome to Dashboard</h2>;
            case 1:
                return <h2>Customer Information</h2>;
            case 2:
                return <h2>Loan Details</h2>;
            case 3:
                return <h2>Account Information</h2>;
            case 4:
                return <h2>Settings</h2>;
            default:
                return <h2>Select a menu</h2>;
        }
    };

    return (
        <>
            <div style={{ display: 'flex' }}>
                <SideBar index={index} setindex={setindex} />
                <div style={{ flex: 1, padding: '20px' }}
                    className='pages'
                >
                    {renderContent()}
                </div>
            </div>
        </>
    )
}

export default Pages