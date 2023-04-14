import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../../itemSellerPages.css'

export default function Landing() {
    return (
        <>
            <br /><br /><br /><br /><br />
            <div className='sellerItemRow'>
                <Row>
                    <Col sm={4}>
                        <Button variant="primary">Add New Item</Button>
                    </Col>
                    <Col sm={8}>
                        <Form className = "SearchForm">
                            <Form.Group className="mb-1" controlId="formBasicEmail">
                                <Form.Control className = "searchInput" type="text" placeholder="Search Items" />
                                <Button variant="primary" type="submit">
                                Submit
                            </Button>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
            </div>

            <div className='sellerItemsPage'>

            </div>
        </>
    )
}
