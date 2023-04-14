/* eslint-disable no-lone-blocks */
import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import './sellerItems.css'

export default function Items() {
    return (
        <>
            <div className="sellerItems">
                <h1>Items By You</h1>
                <Swiper
                    // install Swiper modules
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={4}
                    navigation
                    pagination={{ clickable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    <SwiperSlide>
                        <Card className="profile" style={{ width: '18rem' }}>
                            <Card.Img className="profileimg" variant="top" src="" />
                            <Card.Body>
                                <Card.Title>Title</Card.Title>
                                <Card.Text>
                                    <h6>
                                        Email
                                    </h6>
                                    <h6>
                                        Cno
                                    </h6>
                                </Card.Text>
                                <p><Button variant="primary">Update Profile</Button></p>
                                <p><Button variant="danger">Security Details</Button></p>
                            </Card.Body>
                        </Card>
                    </SwiperSlide>
                    
                </Swiper>
                <br/>
                <p><a href = "/itemsBySeller"><Button variant="primary">View All Items</Button></a></p>
            </div>
        </>
    )
}


{/* <SwiperSlide>
    <Card className="profile" style={{ width: '18rem' }}>
        <Card.Img className="profileimg" variant="top" src="" />
        <Card.Body>
            <Card.Title>Title</Card.Title>
            <Card.Text>
                <h6>
                    Email
                </h6>
                <h6>
                    Cno
                </h6>
            </Card.Text>
            <p><Button variant="primary">Update Profile</Button></p>
            <p><Button variant="danger">Security Details</Button></p>
        </Card.Body>
    </Card>
</SwiperSlide> */}