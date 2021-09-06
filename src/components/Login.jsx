import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import { Form, Button } from 'react-bootstrap';

export default function Login() {
    const inputUsername = useRef();
    const inputPassword = useRef();

    return (
        <div className='Login'>
            <div className='Card'>
                <Form className='CardContent'>
                    <h2 className='text-center'>Login to your account</h2>
                    <Form.Group id='username'>
                        <Form.Label className='CardLabel'>Username</Form.Label>
                        <Form.Control type='text' ref={inputUsername} required />
                    </Form.Group>
                    <Form.Group id='password'>
                        <Form.Label className='CardLabel'>Password</Form.Label>
                        <Form.Control type='password' ref={inputPassword} required />
                    </Form.Group>
                    <Button className='SubmitButton' type='submit'>
                        Log in
                    </Button>
                    <p className='LoginLink'>
                        Don't have an account? <Link to='/reactjs-web-app/auth/signup'>Signup</Link>
                    </p>
                </Form>
            </div>
        </div>
    );
}
