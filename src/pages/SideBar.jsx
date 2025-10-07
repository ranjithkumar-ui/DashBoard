import React from 'react';

const SideBar = ({ index, setindex }) => {

    const fontColor = {
        color: 'red',
        borderLeft: '2px solid red',
        fontWeight: 'bold'
    }

    return (
        <div className="sidebar">
            <ul className="m-1 my-4">
                <li
                    className='nav-link p-2 my-3'
                    style={index === 0 ? fontColor : {}}
                    onClick={() => setindex(0)}
                >
                    <a href="#" className="">
                        <i className="bi bi-columns-gap me-3"></i> Dashboard
                    </a>
                </li>
                <li
                    className='nav-link p-2 my-3'
                    style={index === 1 ? fontColor : {}}
                    onClick={() => setindex(1)}
                >
                    <a href="#" className="">
                        <i className="bi bi-person me-3"></i> Customer
                    </a>
                </li>
                <li
                    className='nav-link p-2 my-3'
                    style={index === 2 ? fontColor : {}}
                    onClick={() => setindex(2)}
                >
                    <a href="#" className="">
                        <i className="bi bi-currency-rupee me-3"></i>
                        <select className="">
                            <option>Loan</option>
                            <option>Home</option>
                            <option>Business</option>
                        </select>
                    </a>
                </li>
                <li
                    className='nav-link p-2 my-3'
                    style={index === 3 ? fontColor : {}}
                    onClick={() => setindex(3)}
                >
                    <a href="#" className="">
                        <i className="bi bi-bank me-3"></i>
                        <select className="">
                            <option>Accounts</option>
                            <option>Personal</option>
                            <option>EMI</option>
                        </select>
                    </a>
                </li>
                <li
                    className='nav-link p-2 my-3'
                    style={index === 4 ? fontColor : {}}
                    onClick={() => setindex(4)}
                >
                    <a href="#" className="">
                        <i className="bi bi-gear me-3"></i> Settings
                    </a>
                </li>
            </ul>
        </div >
    );
};

export default SideBar;
