import "../../styles/sudul/Navbar.css";
import "../../styles/sudul/Home.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbarx from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { LinkContainer } from "react-router-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import axios from "axios";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

export default function Navbar() {

  const navigate = useNavigate();
  const logo = "https://firebasestorage.googleapis.com/v0/b/beheth-kade-6ds3w9c.appspot.com/o/asserts%2Flogo%20(transparent).png?alt=media&token=78d6bc1e-59bb-461c-b32e-cd278ebab61a";

  document.body.style.overflow = "visible";
  const [uploadImage, setUploadImage] = useState("");

  //buyer register validation
  const buyerRegisterSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(5, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    lastName: Yup.string()
      .min(5, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    email: Yup.string()
      .email('Invalid email')
      .required('Required'),
    contactNo: Yup.string()
      .min(10, 'Too Short!')
      .max(10, 'Too Long!')
      .required('Required'),
    address: Yup.string()
      .min(5, 'Too Short!')
      .max(100, 'Too Long!')
      .required('Required'),
    username: Yup.string()
      .min(5, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    password: Yup.string()
      .min(8, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Required'),
  });


  //seller register validation
  const sellerRegisterSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(5, 'Too Short! Enter More Than 5 Characters')
      .max(50, 'Too Long!')
      .required('Required'),
    lastName: Yup.string()
      .min(5, 'Too Short! Enter More Than 5 Characters')
      .max(50, 'Too Long!')
      .required('Required'),
    email: Yup.string()
      .email('Invalid email')
      .required('Required'),
    contactNo: Yup.string()
      .min(10, 'Too Short!')
      .max(10, 'Too Long!')
      .required('Required'),
    address: Yup.string()
      .min(5, 'Too Short! Enter More Than 5 Characters')
      .max(100, 'Too Long!')
      .required('Required'),
    username: Yup.string()
      .min(5, 'Too Short! Enter More Than 5 Characters')
      .max(50, 'Too Long!')
      .required('Required'),
    password: Yup.string()
      .min(8, 'Too Short! Enter More Than 8 Characters')
      .max(50, 'Too Long!')
      .required('Required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Required'),
    companyName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    companyAddress: Yup.string()
      .min(2, 'Too Short!')
      .max(100, 'Too Long!')
      .required('Required'),
  });

  //login validation
  const loginSchema = Yup.object().shape({
    username: Yup.string()
      .min(5, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    password: Yup.string()
      .min(8, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
  });

  const [showRegSelect, setShowRegSelect] = useState(false);
  const handleCloseRegSelect = () => setShowRegSelect(false);
  const handleShowRegSelect = () => setShowRegSelect(true);

  const [showRegSeller, setShowRegSeller] = useState(false);
  const handleCloseRegSeller = () => setShowRegSeller(false);
  const handleShowRegSeller = () => {
    setShowRegSelect(false);
    setShowRegSeller(true);
  };

  const [showRegBuyer, setShowRegBuyer] = useState(false);
  const handleCloseRegBuyer = () => setShowRegBuyer(false);
  const handleShowRegBuyer = () => {
    setShowRegSelect(false);
    setShowRegBuyer(true);
  };

  const [showLoginSelect, setShowLoginSelect] = useState(false);
  const handleCloseLoginSelect = () => setShowLoginSelect(false);
  const handleShowLoginSelect = () => setShowLoginSelect(true);

  const [showLoginSeller, setShowLoginSeller] = useState(false);
  const handleCloseLoginSeller = () => setShowLoginSeller(false);
  const handleShowLoginSeller = () => {
    setShowLoginSelect(false);
    setShowLoginSeller(true);
  };

  const [showLoginBuyer, setShowLoginBuyer] = useState(false);
  const handleCloseLoginBuyer = () => setShowLoginBuyer(false);
  const handleShowLoginBuyer = () => {
    setShowLoginSelect(false);
    setShowLoginBuyer(true);
  };

  const [showLoginAdmin, setShowLoginAdmin] = useState(false);
  const handleCloseLoginAdmin = () => setShowLoginAdmin(false);
  const handleShowLoginAdmin = () => {
    setShowLoginSelect(false);
    setShowLoginAdmin(true);
  };

  function logout() {
    sessionStorage.clear();
    //window.location.href = "/";
  }

  function view() {
    if (sessionStorage.getItem("ID") === null) {
      return (
        <div>
          <Button className="whitebtn" onClick={handleShowRegSelect}>
            Register
          </Button>

          <Button className="whitebtn" onClick={handleShowLoginSelect}>
            Login
          </Button>
        </div>
      );
    } else {
      if (sessionStorage.getItem("user-type").equals("Buyer")) {
        return (
          <div>
            <Button className="whitebtn">
              <Link to="/buyer/profile">
                Profile
              </Link>
            </Button>

            <Button className="whitebtn" onClick={logout}>
              Logout
            </Button>
          </div>
        );
      }
      else if (sessionStorage.getItem("user-type").equals("Seller")) {
        return (
          <div>
            <Button className="whitebtn">
              <Link to="/seller/profile">
                Profile
              </Link>
            </Button>

            <Button className="whitebtn" onClick={logout}>
              Logout
            </Button>
          </div>
        );
      }
      else if (sessionStorage.getItem("user-type").equals("Admin")) {
        return (
          <div>
            <Button className="whitebtn">
              <Link to="/admin/profile">
                Profile
              </Link>
            </Button>

            <Button className="whitebtn" onClick={logout}>
              Logout
            </Button>
          </div>
        );
      } if (sessionStorage.getItem("user-type").equals("buyer")) {
        return (
          <div>
            <Button className="whitebtn">
              <Link to="/buyer/profile">
                Profile
              </Link>
            </Button>

            <Button className="whitebtn" onClick={logout}>
              Logout
            </Button>
          </div>
        );
      }
      else if (sessionStorage.getItem("user-type").equals("seller")) {
        return (
          <div>
            <Button className="whitebtn">
              <Link to="/seller/profile">
                Profile
              </Link>
            </Button>

            <Button className="whitebtn" onClick={logout}>
              Logout
            </Button>
          </div>
        );
      }
      else if (sessionStorage.getItem("user-type").equals("admin")) {
        return (
          <div>
            <Button className="whitebtn">
              <Link to="/admin/profile">
                Profile
              </Link>
            </Button>

            <Button className="whitebtn" onClick={logout}>
              Logout
            </Button>
          </div>
        );
      }
    }
  }

  return (

    <>
      {/* reg select modal */}
      <Modal
        show={showRegSelect}
        onHide={handleCloseRegSelect}
        backdrop="static"
        keyboard={false}
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>Select Registration User Type</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title>Register as a Seller</Card.Title>
                  <Card.Text>
                    To sell your products by posting on Beheth Kade, you need to register as a seller.
                  </Card.Text>
                  <Button variant="primary" onClick={handleShowRegSeller}>Register as a Seller</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title>Register as a Buyer</Card.Title>
                  <Card.Text>
                    To buy the products you need on Beheth Kade, you need to register as a buyer.
                  </Card.Text>
                  <Button variant="primary" onClick={handleShowRegBuyer}>Register as a Buyer</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseRegSelect}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* seller register modal */}
      <Modal
        show={showRegSeller}
        onHide={handleCloseRegSeller}
        backdrop="static"
        keyboard={false}
        size="m"
      >
        <Modal.Header closeButton>
          <Modal.Title>Register as a Seller</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Formik
            initialValues={{
              firstName: '',
              lastName: '',
              email: '',
              contactNo: '',
              address: '',
              username: '',
              password: '',
              confirmPassword: '',
              companyName: '',
              companyAddress: '',
            }}
            validationSchema={sellerRegisterSchema}
            onSubmit={values => {
              // same shape as initial values
              console.log(values);
            }}
          >
            {({ errors, touched }) => (
              <Form>
                {/* firstName */}
                <div className="form-group col-md-6">
                  <label htmlFor="empNo">Seller First Name</label>
                  <Field name="firstName" type="text" className={'form-control' + (errors.firstName && touched.firstName ? ' is-invalid' : '')} />
                  <div className="invalid-feedback">{errors.firstName}</div>
                </div>

                {/* lastName */}
                <div className="form-group col-md-6">
                  <label htmlFor="empNo">Seller Last Name</label>
                  <Field name="lastName" type="text" className={'form-control' + (errors.lastName && touched.lastName ? ' is-invalid' : '')} />
                  <div className="invalid-feedback">{errors.lastName}</div>
                </div>

                {/* email */}
                <div className="form-group col-md-6">
                  <label htmlFor="empNo">Seller Email</label>
                  <Field name="email" type="text" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
                  <div className="invalid-feedback">{errors.email}</div>
                </div>

                {/* contactNo */}
                <div className="form-group col-md-6">
                  <label htmlFor="empNo">Seller Contact No</label>
                  <Field name="contactNo" type="text" className={'form-control' + (errors.contactNo && touched.contactNo ? ' is-invalid' : '')} />
                  <div className="invalid-feedback">{errors.contactNo}</div>
                </div>

                {/* address */}
                <div className="form-group col-md-6">
                  <label htmlFor="empNo">Seller Address</label>
                  <Field name="address" type="text" className={'form-control' + (errors.address && touched.address ? ' is-invalid' : '')} />
                  <div className="invalid-feedback">{errors.address}</div>
                </div>

                {/* username */}
                <div className="form-group col-md-6">
                  <label htmlFor="empNo">Seller Username</label>
                  <Field name="username" type="text" className={'form-control' + (errors.username && touched.username ? ' is-invalid' : '')} />
                  <div className="invalid-feedback">{errors.username}</div>
                </div>

                {/* password */}
                <div className="form-group col-md-6">
                  <label htmlFor="empNo">Seller Password</label>
                  <Field name="password" type="password" className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')} />
                  <div className="invalid-feedback">{errors.password}</div>
                </div>

                {/* confirmPassword */}
                <div className="form-group col-md-6">
                  <label htmlFor="empNo">Seller Confirm Password</label>
                  <Field name="confirmPassword" type="password" className={'form-control' + (errors.confirmPassword && touched.confirmPassword ? ' is-invalid' : '')} />
                  <div className="invalid-feedback">{errors.confirmPassword}</div>
                </div>

                {/* companyName */}
                <div className="form-group col-md-6">
                  <label htmlFor="empNo">Seller Company Name</label>
                  <Field name="companyName" type="text" className={'form-control' + (errors.companyName && touched.companyName ? ' is-invalid' : '')} />
                  <div className="invalid-feedback">{errors.companyName}</div>
                </div>

                {/* companyAddress */}
                <div className="form-group col-md-6">
                  <label htmlFor="empNo">Seller Company Address</label>
                  <Field name="companyAddress" type="text" className={'form-control' + (errors.companyAddress && touched.companyAddress ? ' is-invalid' : '')} />
                  <div className="invalid-feedback">{errors.companyAddress}</div>
                </div>

                {/* image upload */}
                <div className="form-group col-md-6">
                  <label htmlFor="empNo">Seller Company Logo</label>
                  <br /><br />
                  <input type="file" name="file" onChange={(e) => {
                    setUploadImage(e.target.files[0]);
                  }} />
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

      {/* buyer register modal */}
      <Modal show={showRegBuyer} onHide={handleCloseRegBuyer}>
        <Modal.Header closeButton>
          <Modal.Title>Buyer Registration</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Formik
            initialValues={{
              firstName: '',
              lastName: '',
              email: '',
              contactNo: '',
              address: '',
              username: '',
              password: '',
              confirmPassword: '',
            }}
            validationSchema={buyerRegisterSchema}
            onSubmit={values => {
              console.log(values);
            }
            }
          >
            {({ errors, touched }) => (
              <Form>
                {/* firstName */}
                <div className="form-group col-md-6">
                  <label htmlFor="empNo">Buyer First Name</label>
                  <Field name="firstName" type="text" className={'form-control' + (errors.firstName && touched.firstName ? ' is-invalid' : '')} />
                  <div className="invalid-feedback">{errors.firstName}</div>
                </div>

                {/* lastName */}
                <div className="form-group col-md-6">
                  <label htmlFor="empNo">Buyer Last Name</label>
                  <Field name="lastName" type="text" className={'form-control' + (errors.lastName && touched.lastName ? ' is-invalid' : '')} />
                  <div className="invalid-feedback">{errors.lastName}</div>
                </div>

                {/* email */}
                <div className="form-group col-md-6">
                  <label htmlFor="empNo">Buyer Email</label>
                  <Field name="email" type="text" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
                  <div className="invalid-feedback">{errors.email}</div>
                </div>

                {/* contactNo */}
                <div className="form-group col-md-6">
                  <label htmlFor="empNo">Buyer Contact No</label>
                  <Field name="contactNo" type="text" className={'form-control' + (errors.contactNo && touched.contactNo ? ' is-invalid' : '')} />
                  <div className="invalid-feedback">{errors.contactNo}</div>
                </div>

                {/* address */}
                <div className="form-group col-md-6">
                  <label htmlFor="empNo">Buyer Address</label>
                  <Field name="address" type="text" className={'form-control' + (errors.address && touched.address ? ' is-invalid' : '')} />
                  <div className="invalid-feedback">{errors.address}</div>
                </div>

                {/* username */}
                <div className="form-group col-md-6">
                  <label htmlFor="empNo">Buyer Username</label>
                  <Field name="username" type="text" className={'form-control' + (errors.username && touched.username ? ' is-invalid' : '')} />
                  <div className="invalid-feedback">{errors.username}</div>
                </div>

                {/* password */}
                <div className="form-group col-md-6">
                  <label htmlFor="empNo">Buyer Password</label>
                  <Field name="password" type="password" className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')} />
                  <div className="invalid-feedback">{errors.password}</div>
                </div>

                {/* confirmPassword */}
                <div className="form-group col-md-6">
                  <label htmlFor="empNo">Buyer Confirm Password</label>
                  <Field name="confirmPassword" type="password" className={'form-control' + (errors.confirmPassword && touched.confirmPassword ? ' is-invalid' : '')} />
                  <div className="invalid-feedback">{errors.confirmPassword}</div>
                </div>

                {/* image upload */}
                <div className="form-group col-md-6">
                  <label htmlFor="empNo">Seller Company Logo</label>
                  <br /><br />
                  <input type="file" name="file" onChange={(e) => {
                    setUploadImage(e.target.files[0]);
                  }} />
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

      {/* login select modal */}
      <Modal
        show={showLoginSelect}
        onHide={handleCloseLoginSelect}
        backdrop="static"
        keyboard={false}
        size="xl"
      >
        <Modal.Header closeButton>
          <Modal.Title>Select Login User Type</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title>Login as a Seller</Card.Title>
                  <Card.Text>
                    To sell your products by posting on Beheth Kade, you need to login as a seller.
                  </Card.Text>
                  <Button variant="primary" onClick={handleShowLoginSeller}>Login as a Seller</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title>Login as a Buyer</Card.Title>
                  <Card.Text>
                    To buy the products you need on Beheth Kade, you need to login as a buyer.
                  </Card.Text>
                  <Button variant="primary" onClick={handleShowLoginBuyer}>Login as a Buyer</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title>Login as an Admin</Card.Title>
                  <Card.Text>
                    To manage the orders and other aspects of Beheth Kade, you need to login as an administrator.
                  </Card.Text>
                  <Button variant="primary" onClick={handleShowLoginAdmin}>Login as an Admin</Button>
                </Card.Body>
              </Card>
            </Col>

          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseLoginSelect}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* seller login modal */}
      <Modal show={showLoginSeller} onHide={handleCloseLoginSeller}>
        <Modal.Header closeButton>
          <Modal.Title>Seller Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Formik
            initialValues={{
              username: '',
              password: '',
            }}
            validationSchema={loginSchema}
            onSubmit={values => {
              console.log(values);
            }
            }
          >
            {({ errors, touched }) => (
              <Form>
                {/* username */}
                <div className="form-group col-md-6">
                  <label htmlFor="empNo">Seller Username</label>
                  <Field name="username" type="text" className={'form-control' + (errors.username && touched.username ? ' is-invalid' : '')} />
                  <div className="invalid-feedback">{errors.username}</div>
                </div>

                {/* password */}
                <div className="form-group col-md-6">
                  <label htmlFor="empNo">Seller Password</label>
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

      {/* buyer login modal */}
      <Modal show={showLoginBuyer} onHide={handleCloseLoginBuyer}>
        <Modal.Header closeButton>
          <Modal.Title>Buyer Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Formik
            initialValues={{
              username: '',
              password: '',
            }}
            validationSchema={loginSchema}
            onSubmit={values => {
              console.log(values);
            }
            }
          >
            {({ errors, touched }) => (
              <Form>
                {/* username */}
                <div className="form-group col-md-6">
                  <label htmlFor="empNo">Buyer Username</label>
                  <Field name="username" type="text" className={'form-control' + (errors.username && touched.username ? ' is-invalid' : '')} />
                  <div className="invalid-feedback">{errors.username}</div>
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

      {/* admin login modal */}
      <Modal show={showLoginAdmin} onHide={handleCloseLoginAdmin}>
        <Modal.Header closeButton>
          <Modal.Title>Admin Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Formik
            initialValues={{
              username: '',
              password: '',
            }}
            validationSchema={loginSchema}
            onSubmit={values => {
              console.log(values);
            }
            }
          >
            {({ errors, touched }) => (
              <Form>
                {/* username */}
                <div className="form-group col-md-6">
                  <label htmlFor="empNo">Admin Username</label>
                  <Field name="username" type="text" className={'form-control' + (errors.username && touched.username ? ' is-invalid' : '')} />
                  <div className="invalid-feedback">{errors.username}</div>
                </div>

                {/* password */}
                <div className="form-group col-md-6">
                  <label htmlFor="empNo">Admin Password</label>
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






      {/* Navbar component */}
      <Navbarx className="NavbarCont" expand="lg">
        <Container>
          <Navbarx.Toggle aria-controls="basic-navbar-nav" />
          <Navbarx.Collapse id="basic-navbar-nav" className="NavbarList">
            <LinkContainer to="/" className="NavbarLogo">
              <Navbarx.Brand>
                <img
                  src={
                    logo
                  }
                  alt="heroimg"
                />
              </Navbarx.Brand>
            </LinkContainer>
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/" className="navlink">
                Drugs
              </Nav.Link>
              <Nav.Link as={Link} to="/" className="navlink">
                Beauty
              </Nav.Link>
              <Nav.Link as={Link} to="/" className="navlink">
                Supplements
              </Nav.Link>
              <Nav.Link as={Link} to="/" className="navlink">
                Sports
              </Nav.Link>
            </Nav>
            {view()}

          </Navbarx.Collapse>
        </Container>
      </Navbarx>
    </>
  );
}