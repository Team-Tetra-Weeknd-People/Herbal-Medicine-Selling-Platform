import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
//import Row from 'react-bootstrap/Row';
//import Col from 'react-bootstrap/Col';

import './contactUs.css'

export default function contactUs() {
    return (
        <>
        <div className='c_container'>
                <Form>
                    <Form.Group className="mb-3" controlId="formUP">
                        <Form.Label className='label_c'>CONTACT US</Form.Label>
                        <br></br>
                        <Form.Control type="text" className='name' placeholder="name" />
                        <br></br>
                        <Form.Control type="email" className='email' placeholder="E-mail" />
                        <br></br>
                        <Form.Control type="text" className='contact' placeholder="Contact Number" />
                        <br></br>
                        <Form.Control type="text" className='contact' placeholder="Contact Number" />
                    </Form.Group>

                    <Button type="submit" className="button1">
                        Submit
                    </Button>
                </Form>
            </div>

        </>
    )
}