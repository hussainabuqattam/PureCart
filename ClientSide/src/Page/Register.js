import React, { useEffect, useState } from "react";
import { Alert, Button, Col, Form, Row } from "react-bootstrap";
import discaunt2 from "../Image/discaunt2.jpg";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { InfinitySpin } from "react-loader-spinner";

export const Register = () => {
  const [name, setname] = useState();
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    let timer;
    if (success) {
      timer = setTimeout(() => {
        // Perform navigation logic here after 5 seconds
        navigate("/login");
      }, 5000); // 5000 milliseconds = 5 seconds

      return () => clearTimeout(timer); // Clear the timeout if component unmounts before 5 seconds
    }
  }, [success, navigate]);

  const submit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8000/user/register", {
        name,
        email,
        password,
      });

      console.log("Response:", res.data); // Log the entire response for debugging

      if (res.status === 201) {
        // Registration successful
        console.log("Registration successful:", res.data);
        setSuccess(true);
        setLoading(true);
        // Optionally, you can redirect to another page or show a success message
      } else {
        // Handle other status codes or error messages
        console.log("Error response:", res.data.message);
        setError(res.data.message); // Set error message received from backend
      }
    } catch (error) {
      // Handle network errors or other exceptions
      if (error.response) {
        console.error("Error:", error.response.data);
        setError(error.response.data.message || "An error occurred."); // Use the specific error message from the API response, if available
      } else if (error.request) {
        console.error("Error:", error.request);
        setError("Network error. Please try again later."); // No response received, handle network issue
      } else {
        console.error("Error:", error.message);
        setError("An error occurred. Please try again later."); // Other errors
      }
    }
  };
  return (
    <Row className="loginregister_container" style={{ position: "relative" }}>
      {loading && success && (
        <div
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "#fff",
            zIndex: "1000",
            position: "absolute",
          }}
        >
          <Alert variant="success" text>
            Your account added successfully
          </Alert>
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <InfinitySpin
              visible={true}
              width="200"
              color="#4fa94d"
              ariaLabel="infinity-spin-loading"
            />
          </div>
        </div>
      )}
      <Col lg={6}>
        <div className="loginRegister_img">
          <img src={discaunt2} alt="img" />
        </div>
      </Col>
      <Col
        lg={6}
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "100vh" }}
      >
        <Form onSubmit={submit} className="login_register_form">
          <div className="Form_text">
            <h1>Create an account</h1>
            <span>Enter your details below</span>
          </div>

          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Col sm="10">
              <Form.Control
                type="text"
                onChange={(e) => setname(e.target.value)}
                placeholder="Name"
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Col sm="10">
              <Form.Control
                type="text"
                onChange={(e) => setemail(e.target.value)}
                placeholder="Email or Phone number"
              />
            </Col>
          </Form.Group>

          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formPlaintextPassword"
          >
            <Col sm="10">
              <Form.Control
                type="password"
                onChange={(e) => setpassword(e.target.value)}
                placeholder="Password"
              />
            </Col>
          </Form.Group>
          {error && (
            <div style={{ color: "red" }} className="error-message">
              {error}
            </div>
          )}
          <div className="Footer_register_form d-flex justify-content-center align-items-center">
            <Button type="submit" variant="danger">
              Create Account
            </Button>
            <Button className="Google_register" variant="Light">
              <FcGoogle /> Sign up with Google
            </Button>
            <span className="mt-3">
              Already have account ? <Link to="/login">Login</Link>
            </span>
          </div>
        </Form>
      </Col>
    </Row>
  );
};
