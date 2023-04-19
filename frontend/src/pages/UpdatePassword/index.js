import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
//import Row from 'react-bootstrap/Row';
//import Col from 'react-bootstrap/Col';

import './UpdatePassword.css'

export default function UpdatePass() {
    return (
        <>
            <div className='upcontainer'>
                <Form>
                    <Form.Group className="mb-3" controlId="formUP">
                        <Form.Label className='label'>Update Password</Form.Label>
                        <br></br>
                        <Form.Control type="text" className='password' placeholder="Enter New Password" />
                        {/* <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text> */}
                        <br></br>
                        <Form.Control type="text" className='password' placeholder="Confirm Password" />
                    </Form.Group>

                    <Button type="submit" className="button">
                        Submit
                    </Button>
                </Form>
            </div>
        </>
    )
}