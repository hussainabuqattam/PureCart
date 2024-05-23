import React from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import discaunt2 from '../Image/discaunt2.jpg'
export const Login = () => {
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
            <h1>Login to PureCart</h1>
            <span>Enter your details below</span>
            </div>
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
            <div className='Footer_login_form d-flex justify-content-between align-items-center'>
                <Button variant="danger">Log In</Button>
                <span>Forgget Password ?</span>
            </div>
        </Form>
    </Col>
</Row>
)
}
