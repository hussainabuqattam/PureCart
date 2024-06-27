import React, { useEffect, useState } from "react";
import { Alert, Button, Col, Form, Row } from "react-bootstrap";
import discaunt2 from "../Image/discaunt2.jpg";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { InfinitySpin } from "react-loader-spinner";
import { useAuthContext } from "../hooks/useAuthContext";
export const Login = () => {
  const [email, setloginemail] = useState();
  const [password, setloginpassword] = useState();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { dispatch } = useAuthContext();
  useEffect(() => {
    let timer;
    if (success) {
      timer = setTimeout(() => {
        // Perform navigation logic here after 5 seconds
        navigate("/");
      }, 5000); // 5000 milliseconds = 5 seconds

      return () => clearTimeout(timer); // Clear the timeout if component unmounts before 5 seconds
    }
  }, [success, navigate]);
  const handleForgotPasswordClick = () => {
    setLoading(true);
    setTimeout(() => {
      // Navigate to the forgot password page or perform other actions
      window.location.href = "http://localhost:8000/password/forgot";
    }, 1000);
  };
  const submit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8000/user/login", {
        email,
        password,
      });
      console.log("Result", res.data);
      if (res.status === 201) {
        setSuccess(true);
        setLoading(true);
        localStorage.setItem("token", res.data.token);
        dispatch({ type: "LOGIN", payload: res.data.other });
        console.log(res.data.token);
      } else {
        console.log(res.data.meesage);
        setError(res.data.message);
      }
    } catch (error) {
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
      {loading && (
        <div
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "#fff",
            zIndex: "1000",
            position: "absolute",
          }}
        >
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
            <h1>Login to PureCart</h1>
            <span>Enter your details below</span>
          </div>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Col sm="10">
              <Form.Control
                type="email"
                onChange={(e) => {
                  setloginemail(e.target.value);
                }}
                placeholder="Enter your email"
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
                onChange={(e) => {
                  setloginpassword(e.target.value);
                }}
                placeholder="Enter your Password"
              />
            </Col>
          </Form.Group>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <div className="Footer_login_form d-flex justify-content-between align-items-center">
            <Button type="submit" variant="danger">
              Log In
            </Button>
            <a
              style={{ textDecoration: "none" }}
              href="http://localhost:8000/password/forgot"
              onClick={handleForgotPasswordClick}
            >
              <span>Forgget Password ?</span>
            </a>
          </div>
        </Form>
      </Col>
    </Row>
  );
};
