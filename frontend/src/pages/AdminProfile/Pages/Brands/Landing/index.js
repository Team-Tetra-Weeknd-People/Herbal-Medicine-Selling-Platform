/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import Swal from 'sweetalert2'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { storage } from "../../../../../firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';


import './BrandLanding.css'

import BrandService from '../../../../../services/brand.service';

export default function Landing() {

    document.body.style.overflow = "visible";

    const [brands, setBrands] = useState([]);
    const [imageBrand, setImageBrand] = useState("");

    //brand validation
    const BrandSchema = Yup.object().shape({
        name: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
    });

    const [showAdd, setShowAdd] = useState(false);
    const handleCloseAdd = () => setShowAdd(false);
    const handleShowAdd = () => setShowAdd(true);

    //get all brands
    useEffect(() => {
        BrandService.getAll().then(
            (response) => {
                setBrands(response.data);
                console.log(brands, 'brands');
            },
            (error) => {
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                    error.message ||
                    error.toString();
            });
    }, []);

    //delete brand
    const deleteBrand = (id) => {
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
                BrandService.remove(id).then(
                    (response) => {
                        console.log(response.data);
                        BrandService.getAll().then(
                            (response) => {
                                setBrands(response.data);
                                console.log(brands, 'brands');
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

    //add new brand
    async function addBrand(values) {
        const storageRef = ref(storage, `brands/${Image.name + v4()}`);

        await uploadBytes(storageRef, imageBrand)
            .then(() => {
                console.log("uploaded");
            })
            .catch((err) => {
                console.log(err);
            });

        await getDownloadURL(storageRef)
            .then((url) => {
                console.log(url);
                const data = {
                    name: values.name,
                    image: url,
                };

                BrandService.create(data).then((response) => {
                    console.log(response.data);
                    BrandService.getAll().then(
                        (response) => {
                            setBrands(response.data);
                            console.log(brands, 'brands');
                            handleCloseAdd();
                            Swal.fire(
                                'Success!',
                                'New Brand has been added !!',
                                'success'
                            )
                        },
                        (error) => {
                            (error.response &&
                                error.response.data &&
                                error.response.data.message) ||
                                error.message ||
                                error.toString();
                        });
                });
            })
            .catch((err) => {
                console.log(err);
            });
    }

    return (

        <>
            <Modal
                show={showAdd}
                onHide={handleCloseAdd}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add New Brand</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Formik
                        initialValues={{
                            name: '',
                        }}

                        validationSchema={BrandSchema}

                        onSubmit={(values) => {
                            addBrand(values);
                        }}>
                        {({ errors, touched }) => (
                            <Form>
                                <div className="form-group">
                                    <label htmlFor="name">Brand Name</label>
                                    <Field name="name" style={{ width: '25rem' }} type="text" className={'form-control' + (errors.name && touched.name ? ' is-invalid' : '')} />
                                    <div className="invalid-feedback">{errors.name}</div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="image">Brand Image</label>
                                    <input type="file" style={{ width: '25rem' }} className="form-control" id="image" onChange={(e) => setImageBrand(e.target.files[0])} />
                                </div>
                                <br />
                                <div className="form-group">
                                    <button type="submit" className="btn btn-primary mr-2">Submit</button>
                                </div>
                            </Form>
                        )}
                    </Formik>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseAdd}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

            <br /><br /><br /><br /><br />
            <div className="brandLanding">
                <div className="btnRibbon">
                    <br />
                    <p><Button variant="primary" onClick={handleShowAdd}>Add New Brand</Button></p>
                </div>
                <div className="BrandSet">
                    {brands.map((brand) => (
                        <Card className="brandCard" style={{ width: '16rem' }} key={brand._id}>
                            <Card.Img className="brandImg" variant="top" src={brand.image} />
                            <Card.Body>
                                <Card.Title>{brand.name}</Card.Title>
                                <Button variant="success">Edit</Button>{' '}
                                {/* delete button */}
                                <Button variant="danger" onClick={() => deleteBrand(brand._id)}>Delete</Button>
                            </Card.Body>
                        </Card>
                    ))}
                </div>
            </div>

        </>


    )
}
