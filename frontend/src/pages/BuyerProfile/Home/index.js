import React, { useState, useEffect } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';
import Swal from 'sweetalert2'

import './buyerProfile.css'

import BuyerAuth from "../../../services/buyerAuth.service";
import CartService from "../../../services/cart.service";
import ReviewService from '../../../services/review.service';
import CartItemService from '../../../services/cartItem.service'
import ItemService from '../../../services/item.service'

export default function Home() {
    document.body.style.overflow = "visible";
    const [buyer, setBuyer] = useState({});
    const [onGoingCarts, setOnGoingCarts] = useState([]);
    const [deliveredCarts, setDelivered] = useState([]);
    const [reviews, setReviews] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [item, setItem] = useState({});

    const [showOnGoingCarts, setShowOnGoingCarts] = useState(false);
    const handleCloseOnGoingCarts = () => setShowOnGoingCarts(false);
    const handleShowOnGoingCarts = () => setShowOnGoingCarts(true);

    const [showDelivered, setShowDelivered] = useState(false);
    const handleCloseDelivered = () => setShowDelivered(false);
    const handleShowDelivered = () => setShowDelivered(true);

    const [showReviews, setShowReviews] = useState(false);
    const handleCloseReviews = () => setShowReviews(false);
    const handleShowReviews = () => setShowReviews(true);

    const [showCartItems, setShowCartItems] = useState(false);
    const handleCloseCartItems = () => setShowCartItems(false);
    const handleShowCartItems = () => setShowCartItems(true);

    const [showItem, setShowItem] = useState(false);
    const handleCloseShowItem = () => setShowItem(false);
    const handleShowShowItem = () => setShowItem(true);

    //get reviews posted by buyer
    useEffect(() => {
        ReviewService.getByUserID(sessionStorage.getItem("user-id")).then(
            (response) => {
                setReviews(response.data);
                console.log(reviews, 'reviews');
            },
            (error) => {
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                    error.message ||
                    error.toString();
            });
    }, []);

    //get ongoing carts
    useEffect(() => {
        CartService.getByBuyerIDAndNotDelivered(sessionStorage.getItem("user-id")).then(
            (response) => {
                setOnGoingCarts(response.data);
                console.log(onGoingCarts, 'ongoing');
            },
            (error) => {
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                    error.message ||
                    error.toString();
            });
    }, []);

    //get delivered carts
    useEffect(() => {
        CartService.getByBuyerIDAndDelivered(sessionStorage.getItem("user-id")).then(
            (response) => {
                setDelivered(response.data);
                console.log(deliveredCarts, 'delivered');
            },
            (error) => {
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                    error.message ||
                    error.toString();
            });
    }, []);

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

    //detele cart
    async function deleteCart(cartId) {
        Swal.fire({
            title: 'Are you sure?',
            text: "Do you want to Cancel the order?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Cancel Order!',
            cancelButtonText: 'No!',
        }).then((result) => {
            if (result.isConfirmed) {
                CartService.remove(cartId).then(
                    (response) => {
                        console.log(response.data);
                    },
                    (error) => {
                        console.log(error);
                    }
                );

                Swal.fire(
                    'Cancelled!',
                    'This Order has been Cancelled !!.',
                    'success'
                ).then(() => {
                    CartService.getByBuyerIDAndNotDelivered(sessionStorage.getItem("user-id")).then(
                        (response) => {
                            setOnGoingCarts(response.data);
                            console.log(onGoingCarts, 'ongoing');
                        },
                        (error) => {
                            (error.response &&
                                error.response.data &&
                                error.response.data.message) ||
                                error.message ||
                                error.toString();
                        });
                })
            }
        })
    }

    //view review description
    async function viewDescription(text) {
        Swal.fire({
            title: 'Review Description',
            text: text,
            icon: 'info',
            confirmButtonText: 'Ok',
        })
    }

    //delete review
    async function deleteReview(reviewId) {
        Swal.fire({
            title: 'Are you sure?',
            text: "Do you want to delete this review?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Delete!',
            cancelButtonText: 'No!',
        }).then((result) => {
            if (result.isConfirmed) {
                ReviewService.remove(reviewId).then(
                    (response) => {
                        console.log(response.data);
                    },
                    (error) => {
                        console.log(error);
                    }
                );

                Swal.fire(
                    'Deleted!',
                    'This review has been deleted.',
                    'success'
                ).then(() => {
                    ReviewService.getByUserID(sessionStorage.getItem("user-id")).then(
                        (response) => {
                            setReviews(response.data);
                            console.log(reviews, 'reviews');
                        },
                        (error) => {
                            (error.response &&
                                error.response.data &&
                                error.response.data.message) ||
                                error.message ||
                                error.toString();
                        });
                })
            }
        })
    }

    //view Item
    async function viewItem(itemId) {
        //get item details
        ItemService.get(itemId).then(
            (response) => {
                setItem(response.data);
                console.log(item, 'item');
                handleShowShowItem();
            }
        );
    }

    async function viewCartItems(cartId) {
        CartItemService.getByCartID(cartId).then(
            (response) => {
                setCartItems(response.data);
                console.log(cartItems, 'cartItems');
                handleShowCartItems();
            },
            (error) => {
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                    error.message ||
                    error.toString();
            });
    }

    return (
        <>
            {/* Show Item Modal */}
            <Modal
                show={showItem}
                onHide={handleCloseShowItem}
                backdrop="static"
                keyboard={false}
                size="lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title>{item.brand} {item.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col> <img className="itemimgprofile" alt="..." src={item.image} /></Col>
                        <Col>
                            <h3>{item.brand}</h3>
                            <h3>{item.name}</h3>
                            <h3>Rs. {item.price}.00</h3>
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseShowItem}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* show cart items */}
            <Modal
                show={showCartItems}
                onHide={handleCloseCartItems}
                backdrop="static"
                keyboard={false}
                size="xl"
            >
                <Modal.Header closeButton>
                    <Modal.Title>Cart Items</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Brand</th>
                                <th>Name</th>
                                <th>Quantity</th>
                                <th>Unit Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.map((cartItem) => (
                                <tr>
                                    <td><img src={cartItem.itemimage} alt='...' style={{ height: '100px', width: '100px' }} /></td>
                                    <td>{cartItem.itembrand}</td>
                                    <td>{cartItem.itemName}</td>
                                    <td>{cartItem.quantity}</td>
                                    <td>Rs. {cartItem.quantity * cartItem.itemPrice}.00</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseCartItems}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* Ongoing Order View Modal */}
            <Modal
                show={showOnGoingCarts}
                onHide={handleCloseOnGoingCarts}
                backdrop="static"
                keyboard={false}
                size="lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title>Ongoing Orders</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th style={{ width: '20%' }}>Placed Date</th>
                                <th style={{ width: '20%' }}>Order Status</th>
                                <th style={{ width: '20%' }}>Total Price</th>
                                <th style={{ width: '20%' }} >View Order</th>
                                <th style={{ width: '20%' }}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {!onGoingCarts.length ? (
                                <td colSpan='5' style={{ textAlign: 'center' }}>
                                    No Orders
                                </td>
                            ) : (
                                onGoingCarts.map((order) => (
                                    <tr key={order._id}>
                                        <td>
                                            {new Date(order.createdOn).toLocaleDateString()}
                                        </td>
                                        <td>
                                            {order.status}
                                        </td>
                                        <td>Rs. {order.totalPrice.toFixed(2)}</td>
                                        <td>
                                            <Button variant='success' onClick={() => viewCartItems(order._id)}>View Order</Button>
                                        </td>
                                        <td>
                                            <Button variant='danger' onClick={() => deleteCart(order._id)}>Cancel</Button>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </Table>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseOnGoingCarts}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* Completed Order View Modal */}
            <Modal
                show={showDelivered}
                onHide={handleCloseDelivered}
                backdrop="static"
                keyboard={false}
                size="lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title>Completed Orders</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th style={{ width: '20%' }}>Completed Date</th>
                                <th style={{ width: '20%' }}>Order Status</th>
                                <th style={{ width: '20%' }}>Total Price</th>
                                <th style={{ width: '20%' }} >View Order</th>
                            </tr>
                        </thead>
                        <tbody>
                            {!deliveredCarts.length ? (
                                <td colSpan='5' style={{ textAlign: 'center' }}>
                                    No Orders
                                </td>
                            ) : (
                                deliveredCarts.map((order) => (
                                    <tr key={order._id}>
                                        <td>
                                            {new Date(order.placedDate).toLocaleDateString()}
                                        </td>
                                        <td>
                                            {order.status}
                                        </td>
                                        <td>Rs. {order.totalPrice.toFixed(2)}</td>
                                        <td>
                                            <Button variant='success' onClick={() => viewCartItems(order._id)}>View Order</Button>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </Table>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseDelivered}>
                        Close
                    </Button>
                    <Button variant="primary">Understood</Button>
                </Modal.Footer>
            </Modal>

            {/* Reviews View Modal */}
            <Modal
                show={showReviews}
                onHide={handleCloseReviews}
                backdrop="static"
                keyboard={false}
                size="lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title>Reviews Posted</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th style={{ width: '20%' }}>Posted Date</th>
                                <th style={{ width: '20%' }}>View Item</th>
                                <th style={{ width: '20%' }}>View Description</th>
                                <th style={{ width: '20%' }}>Rating</th>
                                <th style={{ width: '20%' }}>Delete Review</th>
                            </tr>
                        </thead>
                        <tbody>
                            {!reviews.length ? (
                                <td colSpan='5' style={{ textAlign: 'center' }}>
                                    No Reviews Posted
                                </td>
                            ) : (
                                reviews.map((review) => (
                                    <tr key={review._id}>
                                        <td>
                                            {new Date(review.createdOn).toLocaleDateString()}
                                        </td>
                                        <td>
                                            <Button variant="primary" onClick={() => viewItem(review.itemID)}>View Item</Button>{' '}
                                        </td>
                                        <td>
                                            <Button variant="info" onClick={() => viewDescription(review.description)}>View Details</Button>{' '}
                                        </td>
                                        <td>
                                            {review.rating}/5
                                        </td>
                                        <td>
                                            <Button variant="danger" onClick={() => deleteReview(review._id)}>Delete</Button>{' '}
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </Table>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseReviews}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

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
                                    <h1>{onGoingCarts.length}</h1>
                                    <p><Button variant="primary" onClick={handleShowOnGoingCarts}>View Orders</Button></p>
                                </div>
                            </Col>
                            <Col>
                                <div className='box'>
                                    <h4>Number of Completed Orders</h4>
                                    <h1>{onGoingCarts.length}</h1>
                                    <p><Button variant="primary" onClick={handleShowDelivered}>View Orders</Button></p>
                                </div>
                            </Col>
                        </Row>
                        <br />
                        <Row>
                            <Col>
                                <div className='box'>
                                    <h4>Number of Reviews Posted</h4>
                                    <h1>{reviews.length}</h1>
                                    <p><Button variant="primary" onClick={handleShowReviews}>View Posted Reviews</Button></p>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        </>
    )
}
