import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

export default function Navbar() {
    return (
        <div className='Navbar'>
            <div className='NavContent'>
                <div className='ProjectName'>
                    <Link to='/reactjs-web-app'>
                        <p>PROJECT NAME</p>
                    </Link>
                </div>
                <div className='NavLinks'>
                    <Link to='#'>
                        <Button className='NavLink btn-secondary btn-sm' style={{ opacity: '100% !important' }}>
                            Navbar Item 1
                        </Button>
                    </Link>
                    <Link to='#'>
                        <Button className='NavLink btn-secondary btn-sm' style={{ opacity: '100% !important' }}>
                            Navbar Item 2
                        </Button>
                    </Link>
                    <Link to='#'>
                        <Button className='NavLink btn-secondary btn-sm' style={{ opacity: '100% !important' }}>
                            Navbar Item 3
                        </Button>
                    </Link>
                    <Link to='#'>
                        <Button className='NavLink LastNavLink btn-secondary btn-sm' style={{ opacity: '100% !important' }}>
                            Navbar Item 4
                        </Button>
                    </Link>
                </div>
                <div className='Authentication'>
                    <Link to='#'>
                        <Button className='btn btn-secondary btn-sm' style={{ borderRadius: '100px' }}>
                            Log in
                        </Button>
                    </Link>
                    <Link to='/reactjs-web-app/signup'>
                        <Button
                            className='btn-color btn btn-primary btn-sm'
                            style={{
                                borderRadius: '100px',
                                marginLeft: '15px',
                            }}>
                            Sign up
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
