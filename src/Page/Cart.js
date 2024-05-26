import React from 'react'
import { Container, Row, Col, Image, Button, Form, InputGroup } from 'react-bootstrap';

import camera from '../Image/camera.webp'
import House from '../Image/house.webp'



export const Cart = () => {
  return (
    <section className="h-100 h-custom Cart_container">
    <Container className="py-5 h-100">
      <Row className="justify-content-center align-items-center h-100">
        <Col>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Product</th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
                <th scope="col">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="d-flex align-items-center Cart_img">
                    <Image src={camera} rounded style={{ width: "70px" }} alt="Camera" />
                    <div className="flex-column ms-4">
                      <p className="mb-2">Thinking, Fast and Slow</p>
                    </div>
                  </div>
                </td>
                <td>
                  <p className="mb-0" style={{ fontWeight: "500" }}>
                    Digital
                  </p>
                </td>
                <td>
                  <div className="d-flex flex-row align-items-center">
                    <Button variant="link" className="px-2">
                      <i className="fas fa-minus"></i>
                    </Button>
                    <Form.Control type="number" min="0" defaultValue={2} style={{ width: "50px" }} className="form-control-sm" />
                    <Button variant="link" className="px-2">
                      <i className="fas fa-plus"></i>
                    </Button>
                  </div>
                </td>
                <td>
                  <p className="mb-0" style={{ fontWeight: "500" }}>
                    $9.99
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="d-flex align-items-center Cart_img">
                    <Image src={House} rounded style={{ width: "70px" }} alt="House" />
                    <div className="flex-column ms-4">
                      <p className="mb-2">
                        Homo Deus: A Brief History of Tomorrow
                      </p>
                    </div>
                  </div>
                </td>
                <td>
                  <p className="mb-0" style={{ fontWeight: "500" }}>
                    Paperback
                  </p>
                </td>
                <td>
                  <div className="d-flex flex-row align-items-center">
                    <Button variant="link" className="px-2">
                      <i className="fas fa-minus"></i>
                    </Button>
                    <Form.Control type="number" min="0" defaultValue={1} style={{ width: "50px" }} className="form-control-sm" />
                    <Button variant="link" className="px-2">
                      <i className="fas fa-plus"></i>
                    </Button>
                  </div>
                </td>
                <td>
                  <p className="mb-0" style={{ fontWeight: "500" }}>
                    $13.50
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
          <Row>
  <Col md={12} lg={7} className='mt-3'>
    <div className='Coupon_container'>
      <Form.Group controlId="validationCustom01" className='d-flex'>
        <Form.Control
          required
          type="text"
          placeholder="Coupon Code"
          className='coupon_input'
        />
        <Button className='coupon_button'>Apply Coupon</Button>
      </Form.Group>  
    </div>
  </Col>
  <Col md={12} lg={5} className="align-self-end mt-3">
    <div className='card_total'>
      <h3 className='mb-4'>Card Total</h3>
      <div className='Sub_total d-flex justify-content-between'>
        <span>Subtotal:</span>
        <span>750$</span>
      </div>
      <hr/>
      <div className='shipping d-flex justify-content-between'>
        <span>Shipping:</span>
        <span>Free</span>
      </div>
      <hr/>
      <div className='shipping d-flex justify-content-between'>
        <span>Total:</span>
        <span>1750$</span>
      </div>
      <Button className='Checkout_button justify-content-center'>Checkout</Button>
    </div>
  </Col>
</Row>
        </Col>
      </Row>
    </Container>
  </section>
)
}
