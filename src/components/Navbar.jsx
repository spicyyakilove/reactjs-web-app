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
                <div className='Authentication'>
                    <Link to='/reactjs-web-app/auth/login'>
                        <Button className='btn btn-secondary btn-sm' style={{ borderRadius: '100px' }}>
                            Log in
                        </Button>
                    </Link>
                    <Link to='/reactjs-web-app/auth/signup'>
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
