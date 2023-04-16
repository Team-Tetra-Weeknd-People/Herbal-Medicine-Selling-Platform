import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
//import Row from 'react-bootstrap/Row';
//import Col from 'react-bootstrap/Col';

import './ForgotPassword.css'

export default function UpdatePass() {
    return (
        <>
            <div className='fcontainer'>
                <Form>
                    <Form.Group className="mb-3" controlId="formUP">
                        <Form.Label className='label'>Forgot Password</Form.Label>
                        <br></br>
                        <div className='pwcontainer'>
                            <Form.Control type="text" className='password' placeholder="Enter New Password" />
                        </div>
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                        <br></br>
                    </Form.Group>

                    <Button type="submit" className="button">
                        Submit
                    </Button>
                </Form>
            </div>
        </>
    )
}