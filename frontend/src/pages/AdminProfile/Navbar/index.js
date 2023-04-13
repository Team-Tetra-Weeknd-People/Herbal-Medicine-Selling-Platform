import "../../../styles/sudul/Navbar.css";
import "../../../styles/sudul/Home.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbarx from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { LinkContainer } from "react-router-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Swal from 'sweetalert2';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { storage } from "../../../firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";

import axios from "axios";

export default function Navbar() {

  const navigate = useNavigate();
  const logo = "https://firebasestorage.googleapis.com/v0/b/beheth-kade-6ds3w9c.appspot.com/o/asserts%2Flogo%20(transparent).png?alt=media&token=78d6bc1e-59bb-461c-b32e-cd278ebab61a";

  document.body.style.overflow = "visible";

  function logout() {
    sessionStorage.clear();
    window.location.href = "/";
  }

  function view() {
      return (
        <div>
          <Button className="whitebtn" onClick={logout}>
            Logout
          </Button>
        </div>
      );
  }

  return (
    <>
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
              {/* <Nav.Link as={Link} to="/" className="navlink">
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
              </Nav.Link> */}
            </Nav>
            {view()}

          </Navbarx.Collapse>
        </Container>
      </Navbarx>
    </>
  );
}