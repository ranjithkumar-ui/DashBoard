import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const Head = () => {
    return (
        <>
            <div className="head">
                <h3 className='d-flex p-4'>
                    <div className='text-danger '>
                        <i className="bi bi-list me-4"></i>
                        Pawn Broker's Automation
                    </div>

                    <div className='d-flex ms-auto'>
                        <i className="bi bi-toggle2-on mx-4"></i>

                        <DropdownButton id="dropdown-basic-button" title="thy">
                            <Dropdown.Item href="#/action-1">thy</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">thy</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">thy</Dropdown.Item>
                        </DropdownButton>
                        
                        <i className="bi bi-person-circle mx-4"></i>
                    </div>
                </h3>

            </div>
        </>
    )
}

export default Head