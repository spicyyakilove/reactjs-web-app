import React from 'react';
import './Navbar.css';
import { Button } from 'react-bootstrap';

export default function Navbar() {
    return (
        <div className='Navbar'>
            <div className='NavContent'>
                <div className='ProjectName'>
                    <p>PROJECT NAME</p>
                </div>
                <div className='NavLinks'>
                    <Button className='NavLink btn-secondary btn-sm' style={{ opacity: '100% !important' }}>
                        Navbar Item 1
                    </Button>
                    <Button className='NavLink btn-secondary btn-sm' style={{ opacity: '100% !important' }}>
                        Navbar Item 2
                    </Button>
                    <Button className='NavLink btn-secondary btn-sm' style={{ opacity: '100% !important' }}>
                        Navbar Item 3
                    </Button>
                    <Button className='LastNavLink btn-secondary btn-sm' style={{ opacity: '100% !important' }}>
                        Navbar Item 4
                    </Button>
                </div>
                <div className='Authentication'>
                    <Button className='btn btn-secondary btn-sm' style={{ borderRadius: '100px' }}>
                        Log in
                    </Button>
                    <Button
                        className='btn-color btn btn-primary btn-sm'
                        style={{
                            borderRadius: '100px',
                            marginLeft: '15px',
                        }}>
                        Sign up
                    </Button>
                </div>
            </div>
        </div>
    );
}
