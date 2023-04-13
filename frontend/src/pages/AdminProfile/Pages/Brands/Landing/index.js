/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import './BrandLanding.css'

import BrandService from '../../../../../services/brand.service';

export default function Landing() {

    document.body.style.overflow = "visible";

    const [brands, setBrands] = useState([]);

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


    return (
        <>
            <br /><br /><br /><br /><br />
            <div className="brandLanding">
                <div className="btnRibbon">
                    <br />
                    <p><Button variant="primary">Add New Brand</Button></p>
                </div>

                <div className="BrandSet">
                    {brands.map((brand) => (
                        <Card className="brandCard" style={{ width: '18rem' }}>
                            <Card.Img className="brandImg" variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>{brand.name}</Card.Title>
                                <Button variant="success">Edit</Button>{' '}
                                <Button variant="danger">Delete</Button>{' '}
                            </Card.Body>
                        </Card>
                    ))}

                </div>

            </div>
        </>
    )
}
