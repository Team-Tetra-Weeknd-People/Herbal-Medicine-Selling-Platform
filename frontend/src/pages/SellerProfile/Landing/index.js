import React, { useState, useEffect } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import './SellerLanding.css'

import SellerAuth from '../../../services/sellerAuth.service';

export default function Landing() {
    document.body.style.overflow = "visible";
    const [seller, setSeller] = useState({});

    //get seller details
    useEffect(() => {
        SellerAuth.getCurrentUser(sessionStorage.getItem("user-id")).then(
            (response) => {
                setSeller(response.data);
                console.log(seller, 'seller');
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
                            <Card.Img className="sellerimg" variant="top" src={seller.image} />
                            <Card.Body>
                                <Card.Title>{seller.firstName} {seller.lastName}</Card.Title>
                                <Card.Text>
                                    <h6>
                                        {seller.email} - {seller.contactNo}
                                    </h6>
                                    <h6>
                                        {seller.companyName}
                                    </h6>
                                    <h6>
                                        {seller.companyAddress}
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

                            </Col>
                            <Col>

                            </Col>
                        </Row>
                        <br />
                        <Row>
                            <Col>

                            </Col>
                            <Col>

                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        </>
    )
}
