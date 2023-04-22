/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import CategoryService from '../../../../services/category.service'

import '../../Category.css'

export default function Landing() {

    const [category, setCategory] = useState({})

    //get all categories
    useEffect(() => {
        CategoryService.getAll()
            .then((response) => {
                setCategory(response.data)
            })
            .catch((error) => {
                console.log(error);
            });
    }, [])

    return (
        <>
            <div>
                <br /><br /><br /><br /><br />
                <div className='CategoryLanding'>
                    {!category.length ? (
                        <div className='landing__container'>
                            <h1 className='landing__container__title'>No categories found</h1>
                        </div>
                    ) : (
                        category.map((category) => (
                            <a href={`/categories/${category.name}`} className="content">
                                <Card style={{ width: '18rem', height: '18rem', marginTop: '1rem' }} className="itemCard">
                                    <Card.Img variant="top" style={{ width: '10rem', height: '10rem', margin: '0px auto' }} src={category.image} />
                                    <Card.Body>
                                        <Card.Title style={{ height: '3rem' }}>{category.name}</Card.Title>
                                        <Button variant="primary">View Items</Button>
                                    </Card.Body>
                                </Card>
                            </a>
                        )))
                    }
                </div>
            </div>
        </>
    )
}
