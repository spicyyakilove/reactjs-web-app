import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import './Signup.css';
import { Form, Button } from 'react-bootstrap';

export default function Signup() {
    const inputUsername = useRef();
    const inputEmail = useRef();
    const inputPassword1 = useRef();
    const inputPassword2 = useRef();

    return (
        <div className='Signup'>
            <div className='Card'>
                <Form className='CardContent'>
                    <h2 className='text-center'>Create account</h2>
                    <Form.Group id='username'>
                        <Form.Label className='CardLabel'>Username</Form.Label>
                        <Form.Control type='text' ref={inputUsername} required />
                    </Form.Group>
                    <Form.Group id='email'>
                        <Form.Label className='CardLabel'>Email</Form.Label>
                        <Form.Control type='email' ref={inputEmail} required />
                    </Form.Group>
                    <Form.Group id='password1'>
                        <Form.Label className='CardLabel'>Password</Form.Label>
                        <Form.Control type='password' ref={inputPassword1} required />
                    </Form.Group>
                    <Form.Group id='password2'>
                        <Form.Label className='CardLabel'>Confirm Password</Form.Label>
                        <Form.Control type='password' ref={inputPassword2} required />
                    </Form.Group>
                    <Button className='SubmitButton' type='submit'>
                        Sign Up
                    </Button>
                    <p className='SignUpLink'>
                        Already have an account? <Link to='/reactjs-web-app/auth/login'>Login</Link>
                    </p>
                </Form>
            </div>
        </div>
    );
}
