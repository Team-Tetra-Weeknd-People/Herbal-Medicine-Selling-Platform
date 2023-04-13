import React, { useState, useEffect } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


import './Landing.css'

import AdminAuth from '../../../services/adminAuth.service';

export default function Landing() {

    const [admin, setAdmin] = useState({});

    useEffect(() => {
        AdminAuth.getCurrentUser(sessionStorage.getItem("user-id")).then(
            (response) => {
                setAdmin(response.data);
                console.log(admin, 'admin');
            },
            (error) => {
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                    error.message ||
                    error.toString();
            });
    }, [admin]);


    return (
        <div>
            <br /><br /><br /><br /><br />
            <div className='landing'>
                <Row>
                    <Col>
                        <br />
                        <Card className="profile" style={{ width: '30rem' }}>
                            <Card.Img className="profileimg" variant="top" src={admin.image} />
                            <Card.Body>
                                <Card.Title>{admin.firstName} {admin.lastName}</Card.Title>
                                <Card.Text>
                                    <h6>
                                        {admin.email}
                                    </h6>
                                    <h6>
                                        {admin.contactNo}
                                    </h6>
                                </Card.Text>
                                <p><Button variant="primary">Update Profile</Button></p>
                                <p><Button variant="danger">Security Details</Button></p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Row>
                            <Col>
                                <div className='box'>
                                    <h4>Number of Items in the system</h4>
                                    <h1>1</h1>
                                    <p><Button variant="primary">Manage Items</Button></p>
                                </div>
                            </Col>
                            <Col>
                                <div className='box'>
                                    <h4>Number of Categories in the system</h4>
                                    <h1>2</h1>
                                    <p><Button variant="primary">Manage Categories</Button></p>
                                </div>
                            </Col>
                        </Row>
                        <br />
                        <Row>
                            <Col>
                                <div className='box'>
                                    <h4>Number of Pending Orders in the system</h4>
                                    <h1>1</h1>
                                    <p><Button variant="primary">Manage Orders</Button></p>
                                </div>
                            </Col>
                            <Col>
                                <div className='box'>
                                    <h4>Number of Completed Orders in the system</h4>
                                    <h1>2</h1>
                                    <p><Button variant="primary">View Orders</Button></p>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>

        </div>
    )
}
