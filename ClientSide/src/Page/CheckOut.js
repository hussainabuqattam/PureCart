import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import camera from '../Image/camera.webp'
import barfan from '../Image/barfan.webp'
import house from '../Image/house.webp'


export const CheckOut = () => {
  return (
    <Container>
           <Row className='checkout_container'>
              <Col lg={7}>
                <h1 className='mb-4'>Billing Details</h1>
                <Form className='Billing_form'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text"/>
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="formBasicEmail">
                        <Form.Label>Country</Form.Label>
                        <Form.Control type="text"/>
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="formBasicEmail">
                        <Form.Label>City</Form.Label>
                        <Form.Control type="text"/>
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="formBasicEmail">
                        <Form.Label>Apartment, floor, etc</Form.Label>
                        <Form.Control type="text"/>
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email"/>
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="formBasicEmail">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control type="text"/>
                    </Form.Group>

                    <Form.Group className="mb-3 check_billing" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Save this information for faster check-out next time" />
                    </Form.Group>

                </Form>
              </Col>
              <Col lg={4} className='checkout_product_details'>
              <div className='Billing_Details d-flex justify-content-between'>
                <div className='Billing_product d-flex'>
                    <img src={barfan}/>
                    <h4>LCD Monitor</h4>
                </div>
                <p className='mt-2'>$650</p>
              </div>

              <div className='Billing_Details mt-5 d-flex justify-content-between'>
                <div className='Billing_product d-flex'>
                    <img src={house}/>
                    <h4>H1 Gamepad</h4>
                </div>
                <p className='mt-2'>$1100</p>
              </div>
              <div className='d-flex justify-content-between mt-4'>
                <div>
                    <h5>Subtotal:</h5>
                </div>
                <p className='mt-2'>$1750</p>
              </div>
              <hr className='m-0'/>
              <div className='d-flex justify-content-between mt-4'>
                <div>
                    <h5>Shipping:</h5>
                </div>
                <p className='mt-2'>Free</p>
              </div>
              <hr className='m-0'/>
              <div className='d-flex justify-content-between mt-4'>
                <div>
                    <h5>Total:</h5>
                </div>
                <p className='mt-2' style={{fontWeight: '700'}}>$1750</p>
              </div>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="Radio" label="Bank" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="Radio" label="Cash on delivery" />
              </Form.Group>

              <Form.Group controlId="validationCustom01" className='d-flex'>
                <Form.Control
                required
                type="text"
                placeholder="Coupon Code"
                className='coupon_input'
                />
                <Button className='coupon_button'>Apply Coupon</Button>
            </Form.Group>  
            <Button className='coupon_button mt-4 m-0'>Place Order</Button>
              </Col>
           </Row>
    </Container>
)
}
