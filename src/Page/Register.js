import React from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import discaunt2 from '../Image/discaunt2.jpg'
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom';


export const Register = () => {
  return (
    <Row className='loginregister_container'>
    <Col lg={6}>
        <div className='loginRegister_img'>
            <img src={discaunt2} alt='img'/>
        </div>
    </Col>
    <Col lg={6} className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
        <Form className='login_register_form'>
            <div className='Form_text'>
            <h1>Create an account</h1>
            <span>Enter your details below</span>
            </div>

            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                <Col sm="10">
                <Form.Control type="text" placeholder="Name" />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                <Col sm="10">
                <Form.Control type="text" placeholder="Email or Phone number" />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                <Col sm="10">
                    <Form.Control type="password" placeholder="Password" />
                </Col>
            </Form.Group>
            <div className='Footer_register_form d-flex justify-content-center align-items-center'>
                <Button variant="danger">Create Account</Button>
                <Button className="Google_register"variant="Light"><FcGoogle /> Sign up with Google</Button>
                <span className='mt-3'>Already have account ? <Link to='/login'>Login</Link></span>
            </div>
        </Form>
    </Col>
</Row>
  )
}
