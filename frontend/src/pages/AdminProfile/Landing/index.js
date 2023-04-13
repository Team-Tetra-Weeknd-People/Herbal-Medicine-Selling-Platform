/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';


import './Landing.css'

import AdminAuth from '../../../services/adminAuth.service';
import CategoryService from '../../../services/category.service';

export default function Landing() {

    document.body.style.overflow = "visible";
    const [admin, setAdmin] = useState({});
    const [categories, setCategories] = useState([]);

    const [showViewCat, setShowViewCat] = useState(false);

    const handleCloseViewCat = () => setShowViewCat(false);
    const handleShowViewCat = () => setShowViewCat(true);

    //get admin details
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
    }, []);

    //get all categories
    useEffect(() => {
        CategoryService.getAll().then(
            (response) => {
                setCategories(response.data);
                console.log(categories, 'categories');
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
            {/* Category View Modal */}
            <Modal
                show={showViewCat}
                onHide={handleCloseViewCat}
                backdrop="static"
                keyboard={false}
                size="lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title>View Categories</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p><Button variant="primary">Add New Category</Button></p>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Category Name</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {categories.map((category) => (
                                <tr>
                                    <td>{category.name}</td>
                                    <td>
                                        <Button variant="success">Edit</Button>{' '}
                                        <Button variant="danger">Delete</Button>{' '}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseViewCat}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* Base Div */}
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
                                        <p><a href="/adminProfile/items"><Button variant="primary">Manage Items</Button></a></p>
                                    </div>
                                </Col>
                                <Col>
                                    <div className='box'>
                                        <h4>Number of Categories in the system</h4>
                                        <h1>2</h1>
                                        <p><Button variant="primary" onClick={handleShowViewCat}>Manage Categories</Button></p>
                                    </div>
                                </Col>
                            </Row>
                            <br />
                            <Row>
                                <Col>
                                    <div className='box'>
                                        <h4>Number of Brands in the system</h4>
                                        <h1>1</h1>
                                        <p><a href="/adminProfile/brands"><Button variant="primary">Manage Brands</Button></a></p>
                                    </div>
                                </Col>
                                <Col>
                                    <div className='box'>
                                        <h4>Number of Pending Orders in the system</h4>
                                        <h1>2</h1>
                                        <p><a href="/adminProfile/orders"><Button variant="primary">Manage Orders</Button></a></p>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>

            </div>
        </>
    )
}
