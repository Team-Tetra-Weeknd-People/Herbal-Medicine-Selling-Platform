import React, { useState, useEffect } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import './buyerProfile.css'

import BuyerAuth from "../../../services/buyerAuth.service";

export default function Home() {
    document.body.style.overflow = "visible";
    const [buyer, setBuyer] = useState({});

    //get seller details
    useEffect(() => {
        BuyerAuth.getCurrentUser(sessionStorage.getItem("user-id")).then(
            (response) => {
                setBuyer(response.data);
                console.log(buyer, 'seller');
            },
            (error) => {
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                    error.message ||
                    error.toString();
            });
    }, []);

    return (
        <>
            <br /><br /><br /><br /><br />
            <div className="Sellerlanding">
                <Row>
                    <Col>
                        <br />
                        <Card className="seller" style={{ width: '30rem' }}>
                            <Card.Img className="sellerimg" variant="top" src={buyer.image} />
                            <Card.Body>
                                <Card.Title>{buyer.firstName} {buyer.lastName}</Card.Title>
                                <Card.Text>
                                    <h6>
                                        {buyer.email} - {buyer.contactNo}
                                    </h6>
                                    <h6>
                                        {buyer.address}
                                    </h6>
                                    <h6>
                                        {buyer.companyAddress}
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
                                    <h4>Number of Ongoing Orders</h4>
                                    <h1>1</h1>
                                    <p><a href="/"><Button variant="primary">Manage Items</Button></a></p>
                                </div>
                            </Col>
                            <Col>
                                <div className='box'>
                                    <h4>Number of Completed Orders</h4>
                                    <h1>2</h1>
                                    <p><Button variant="primary" >Manage Categories</Button></p>
                                </div>
                            </Col>
                        </Row>
                        <br />
                        <Row>
                            <Col>
                                <div className='box'>
                                    <h4>Number of Reviews Posted</h4>
                                    <h1>1</h1>
                                    <p><Button variant="primary">Completed Orders</Button></p>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        </>
    )
}
