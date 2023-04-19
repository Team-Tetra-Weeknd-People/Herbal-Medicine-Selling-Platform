import React, { useState, useEffect } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from "react-bootstrap/Modal";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Swal from 'sweetalert2';
import jwt_decode from "jwt-decode";
import { Link } from "react-router-dom";

import './ItemOneLanding.css'

import ItemService from '../../../services/item.service'
import BuyerAuth from "../../../services/buyerAuth.service";

export default function Landing(props) {

  //login validation
  const loginSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email')
      .required('Required'),
    password: Yup.string()
      .min(8, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
  });

  const [showLoginBuyer, setShowLoginBuyer] = useState(false);
  const handleCloseLoginBuyer = () => setShowLoginBuyer(false);
  const handleShowLoginBuyer = () => setShowLoginBuyer(true);;

  const { itemID } = props;
  const [item, setItem] = useState({});

  //get one item details
  useEffect(() => {
    ItemService.get(itemID)
      .then((response) => {
        setItem(response.data)
      })
      .catch((error) => {
        console.log(error);
      });
  }, [])

  document.title = item.name;

  function handleToken(token) {
    //decode token
    const decodedToken = jwt_decode(token);
    console.log(decodedToken);
    sessionStorage.setItem("auth-token", token);
    sessionStorage.setItem("user-id", decodedToken.id);
    sessionStorage.setItem("verification", decodedToken.verified);
    sessionStorage.setItem("brand", decodedToken.brand);
  }

  async function loginBuyer(values) {
    const data = {
      email: values.email,
      password: values.password,
    }

    BuyerAuth.login(data)
      .then((res) => {
        sessionStorage.setItem("user-type", res.data.user);
        handleToken(res.data.token);
        Swal.fire({
          icon: 'success',
          title: 'Successful',
          text: 'Login Successfully!',
          footer: '<a href="/buyerProfile">Go to your profile</a>'
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.reload();
          }
        })
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Please Check Your Email & Password!!',
          footer: 'Your Credentails Are Invalid!!'
        }).then((result) => {
          if (result.isConfirmed) {
          }
        })
      });
  }

  function handleAddCart() {
    if (!sessionStorage.getItem('user-type')) {
      Swal.fire(
        'Error',
        'You Need To Login as a Buyer To Add Items To The Cart',
        'error'
      );
      handleShowLoginBuyer();
    }
    else {
      alert('Added Cart');
    }
  }

  function handleAddReview() {
    if (!sessionStorage.getItem('user-type')) {
      Swal.fire(
        'Error',
        'You Need To Login as a Buyer To Add Reviews',
        'error'
      );
      handleShowLoginBuyer();
    }
    else {
      alert('Added Reviews');
      handleShowLoginBuyer();
    }
  }

  function handlePage(){
    window.location.href = `/brands/${item.brand}`;
  }

  return (
    <>

      {/* buyer login modal */}
      <Modal
        show={showLoginBuyer}
        onHide={handleCloseLoginBuyer}
        backdrop="static"
        keyboard={false}
        size="m">
        <Modal.Header closeButton>
          <Modal.Title>Buyer Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Formik
            initialValues={{
              email: 'notRandula98@gmail.com',
              password: 'QWERTY123',
            }}
            validationSchema={loginSchema}
            onSubmit={values => {
              console.log(values);
              loginBuyer(values);
            }
            }
          >
            {({ errors, touched }) => (
              <Form>
                {/* email */}
                <div className="form-group col-md-6">
                  <label htmlFor="empNo">Buyer Email</label>
                  <Field name="email" type="text" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
                  <div className="invalid-feedback">{errors.email}</div>
                </div>

                {/* password */}
                <div className="form-group col-md-6">
                  <label htmlFor="empNo">Buyer Password</label>
                  <Field name="password" type="password" className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')} />
                  <div className="invalid-feedback">{errors.password}</div>
                </div>

                <br />
                {/* submit button */}
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            )}

          </Formik>
        </Modal.Body>
      </Modal>

      <br /><br /><br /><br />
      <div className="ItemOneLanding">
        <Row>
          <Col sm={4} className='TopLeft'>
            <Row>
              <img className="itemimg" alt="..." src={item.image} />
            </Row>
            <Row style={{ marginTop: '1rem' }}>
              <h3>{item.brand}</h3>
              <h3>Rs. {item.price}.00</h3>
            </Row>
          </Col>
          <Col sm={8} className='TopRight'>
            <Row style={{ height: '80px', width: '90%', margin: '0px auto' }}>
              <Card>
                <Card.Body style={{ borderRadius: '10rem' }}><h1>{item.name}</h1></Card.Body>
              </Card>
            </Row>
            <Row className="itemDesc">
              <h3>{item.description}</h3>
            </Row>
            <Row className="itemReview">
              <Row>

              </Row>
              <Row>
                <Col className='BottomLeft'><Button variant="primary" onClick={() => handleAddReview()}>Add a Review</Button>{' '}</Col>
              </Row>
            </Row>
          </Col>
        </Row>
        <Row>
        <Col sm={4} className='BottomLeft'>
        <Button variant="primary" onClick={() => handleAddCart()}>Add To Cart</Button>{' '}<br/><br/>
        <Button variant="primary" onClick={() => handlePage()}>View Items By This Brand</Button>{' '}
        </Col>
        </Row>
      </div>
    </>
  )
}
