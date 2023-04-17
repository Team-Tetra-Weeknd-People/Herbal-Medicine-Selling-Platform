/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';
import { Formik, Form, Field } from 'formik';
import Swal from 'sweetalert2'
import * as Yup from 'yup';

import './Landing.css'

import AdminAuth from '../../../../../services/adminAuth.service';
import CategoryService from '../../../../../services/category.service';

export default function Landing() {

    document.body.style.overflow = "visible";
    const [admin, setAdmin] = useState({});
    const [categories, setCategories] = useState([]);

    const [showViewCat, setShowViewCat] = useState(false);
    const [showAddCat, setShowAddCat] = useState(false);

    const handleCloseViewCat = () => setShowViewCat(false);
    const handleShowViewCat = () => setShowViewCat(true);

    const handleCloseAddCat = () => setShowAddCat(false);
    const handleShowAddCat = () => {
        handleCloseViewCat()
        setShowAddCat(true)
    };

    //category validation schema
    const CategorySchema = Yup.object().shape({
        name: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
    });

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

    //add new category
    async function addCategory(values) {
        const data = {
            name: values.name,
        };

        CategoryService.create(data)
            .then(response => {
                console.log(response.data);
                Swal.fire(
                    'Success!',
                    'New Category has been added !!',
                    'success'
                )
                handleCloseAddCat();
                handleShowViewCat();
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
            })
            .catch(e => {
                console.log(e);
            });
    }

    //delete category
    async function deleteCategory(id) {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Deleted!',
                    'This Brand has been deleted.',
                    'success'
                )
                CategoryService.remove(id).then(
                    (response) => {
                        console.log(response.data);
                        CategoryService.getAll().then(
                            (response) => {
                                setCategories(response.data);
                            },
                            (error) => {
                                (error.response &&
                                    error.response.data &&
                                    error.response.data.message) ||
                                    error.message ||
                                    error.toString();
                            });
                    },
                    (error) => {
                        (error.response &&
                            error.response.data &&
                            error.response.data.message) ||
                            error.message ||
                            error.toString();
                    });
            }
        })

    }


    return (
        <>
            {/* Add Category Modal */}
            <Modal
                show={showAddCat}
                onHide={handleCloseAddCat}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add New Category</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Formik
                        initialValues={{
                            name: '',
                        }}
                        validationSchema={CategorySchema}
                        onSubmit={(values) => {
                            addCategory(values);
                        }}
                    >
                        {({ errors, touched }) => (
                            <Form>
                                <div className="form-group">
                                    <label htmlFor="name">Category Name</label>
                                    <Field name="name" style={{ width: '25rem' }} type="text" className={'form-control' + (errors.name && touched.name ? ' is-invalid' : '')} />
                                    <div className="invalid-feedback">{errors.name}</div>
                                </div>
                                <br />
                                <div className="form-group">
                                    <button type="submit" className="btn btn-primary mr-2">Add</button>
                                </div>
                            </Form>
                        )}
                    </Formik>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseAddCat}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

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
                    <p><Button variant="primary" onClick={handleShowAddCat}>Add New Category</Button></p>
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
                                        <Button variant="danger" onClick={() => deleteCategory(category._id)}>Delete</Button>{' '}
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
                                        <h4>Number of Companies in the system</h4>
                                        <h1>1</h1>
                                        <p><a href="/"><Button variant="primary">Manage Companies</Button></a></p>
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
