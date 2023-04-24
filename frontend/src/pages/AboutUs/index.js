import React from 'react'
//import Button from 'react-bootstrap/Button';
//import Form from 'react-bootstrap/Form';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import "../../styles/chanudi/aboutUs.css";

import './AboutUs.css'

import Navbar from '../../components/navbar';

export default function aboutUs() {
    return (
        <>
            <Navbar />
            <br/><br/><br/><br/>
            <div className='maincontainer'>
                <div className='container_about'>
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://firebasestorage.googleapis.com/v0/b/beheth-kade-6ds3w9c.appspot.com/o/asserts%2Felegant-skin-care-banner-design.jpg?alt=media&token=97855a08-a2a7-467e-ad76-e41d8b436021"
                                alt="First slide"
                            />
                            {/* <Carousel.Caption>
                                <h3>First slide label</h3>
                            </Carousel.Caption> */}
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://firebasestorage.googleapis.com/v0/b/beheth-kade-6ds3w9c.appspot.com/o/asserts%2FMicrosoftTeams-image%20(1).png?alt=media&token=aad374ed-8c06-4de9-8073-b6b1f2c4b520"
                                alt="Second slide"
                            />

                            {/* <Carousel.Caption>
                                <h3>Second slide label</h3>
                            </Carousel.Caption> */}
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://firebasestorage.googleapis.com/v0/b/beheth-kade-6ds3w9c.appspot.com/o/asserts%2Felegant-skin-care-banner-design%20(2).jpg?alt=media&token=82066f32-1fc9-4653-a6ff-877de6d62ed9"
                                alt="Third slide"
                            />

                            {/* <Carousel.Caption>
                                <h3>Third slide label</h3>
                            </Carousel.Caption> */}
                        </Carousel.Item>
                    </Carousel>

                    <div className='container_des'>
                        <Card className='Aboutcard'>
                            <Card.Header className='header1'>ABOUT US</Card.Header>
                            <Card.Body>
                                <Card.Title className='title'>Who We Are?</Card.Title>
                                <Card.Text className='text'>
                                    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa

                                </Card.Text>
                            </Card.Body>
                        </Card>

                    </div>
                </div>
            </div>
        </>
    )
}