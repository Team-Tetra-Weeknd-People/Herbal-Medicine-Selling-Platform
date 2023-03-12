import "../styles/sudul/Navbar.css";
import "../styles/sudul/Home.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbarx from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { LinkContainer } from "react-router-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
// import auth from "../firebase";
// import { signOut } from "firebase/auth";

function Navbar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();

  const logo = "https://firebasestorage.googleapis.com/v0/b/beheth-kade-6ds3w9c.appspot.com/o/asserts%2Flogo%20(transparent).png?alt=media&token=78d6bc1e-59bb-461c-b32e-cd278ebab61a"

  function view() {
    if (sessionStorage.getItem("ID") === null) {
      return (
        <div>
          <Button className="whitebtn">
            Register
          </Button>
          
          <Button className="whitebtn" onClick={handleShow}>
            Login
          </Button>
        </div>
      );
    } else {
      return (
        <Link to={`/clientDashboard/${sessionStorage.getItem("ID")}`}>
          <Button className="whitebtn">Profile</Button>
        </Link>
      );
    }
  }

  // loggin in user in backend
  // useEffect(() => {
  //   if (user) {
  //     axios
  //       .post("http://localhost:8070/client/login", {
  //         email,
  //         password: password,
  //       })
  //       .then((client) => {
  //         sessionStorage.setItem("ID", client.data._id);
  //         return navigate(`/ClientDashboard/${client.data._id}`);
  //       })
  //       .catch((err) => {
  //         alert("Login unsuccessful");
  //         console.log(err);
  //       });
  //   }
  // }, [user]);

  return (
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
            <Nav.Link as={Link} to="/flights" className="navlink">
              Drugs
            </Nav.Link>
            <Nav.Link as={Link} to="/hotels" className="navlink">
              Beauty
            </Nav.Link>
            <Nav.Link as={Link} to="/taxis" className="navlink">
              Supplements
            </Nav.Link>
            <Nav.Link as={Link} to="/packages" className="navlink">
              Sports
            </Nav.Link>
          </Nav>
          {view()}

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Customer Login</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form
                onSubmit={async (e) => {
                  e.preventDefault();

                  //   signInWithEmailAndPassword(email, password);
                }}
              >
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    autoFocus
                    onChange={(e) => {
                      //     setEmail(e.target.value);
                    }}
                    required
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter your password"
                    onChange={(e) => {
                      //  setPassword(e.target.value);
                    }}
                    required
                  />

                  <Button type="submit" className="blackbtn">
                    Login
                  </Button>
                </Form.Group>
                {/* <div className="btnContainerlosgin">
                  {loading ? (
                    <Button type="submit" className="blackbtn">
                      Loading ...
                    </Button>
                  ) : (
                    <Button type="submit" className="blackbtn">
                      Login as a User
                    </Button>
                  )}

                  {gLoading ? (
                    <span className="blackbtn">
                      <img
                        className="googleIcon"
                        src="https://i.ibb.co/XzVFGzb/google.png"
                        alt=""
                      />
                      Loading...
                    </span>
                  ) : (
                    <span
                      className="blackbtn"
                      onClick={() => {
                        signInWithGoogle();
                      }}
                    >
                      <img
                        className="googleIcon"
                        src="https://i.ibb.co/XzVFGzb/google.png"
                        alt=""
                      />
                      Continue with Google
                    </span>
                  )} */}

                {/* <div id="googlelogin"></div>
                  
                <GoogleLogin
                    clientId={clientId}
                    buttonText="Sign in with Google"
                    onSuccess={onSuccess}
                    onFailure={onFailure}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={true}
                /> */}
                {/* </div> */}
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <div style={{}}>
                <h4>Other Logins</h4>
                <Link to={"/financeDashboard"}>
                  <button className="blackbtn">Login as a Seller</button>
                </Link>
                <Link to={"/editorDashboard"}>
                  <button className="blackbtn">Login as an Admin</button>
                </Link>
              </div>
            </Modal.Footer>
          </Modal>
        </Navbarx.Collapse>
      </Container>
    </Navbarx>
  );
}



export default Navbar;