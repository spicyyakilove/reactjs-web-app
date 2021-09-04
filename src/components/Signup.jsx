import React from 'react';
import './Signup.css';
import { Card, Form, Button } from 'react-bootstrap';

export default function Signup() {
    return (
        <div className='Signup'>
            <Card className='Card'>
                <Card.Body>
                    <h2 className='text-center'>Sign Up</h2>
                    <Form>
                        <Form.Group id='email'>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type='email' required />
                        </Form.Group>
                        <Form.Group id='password1'>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type='password' required />
                        </Form.Group>
                        <Form.Group id='password2'>
                            <Form.Label>Retype Password</Form.Label>
                            <Form.Control type='password' required />
                        </Form.Group>
                        <Button className='btn-color' type='submit'>
                            Sign Up
                        </Button>
                    </Form>
                    <div>Already have an account? Log in</div>
                </Card.Body>
            </Card>
        </div>
    );
}
