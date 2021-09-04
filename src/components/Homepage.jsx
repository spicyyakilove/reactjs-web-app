import React from 'react';
import './Homepage.css';
import { Button } from 'react-bootstrap';

export default function Homepage() {
    return (
        <div className='Homepage'>
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
            <div className='MainBody'>
                <div className='ProjectInfo'>
                    <h2>
                        Praesent nec iaculis
                        <br />
                        diam, et laoreet.
                    </h2>
                    <h4>
                        Maecenas sed nunc sit amet leo auctor et
                        <br />
                        elementum integer dolor urna, pellentesque.
                    </h4>
                </div>
            </div>
        </div>
    );
}
