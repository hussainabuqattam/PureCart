import React from 'react'
import { Button, Col, Container, FloatingLabel, Form, InputGroup, Row } from 'react-bootstrap'
import { BiEnvelope, BiSolidPhone  } from "react-icons/bi";



export const Contact = () => {
  return (
    <Container>
    <Row className='Contact'>
        <Col lg={4}>
           <div className='information_contact_container'>
                <div className='call_iformation'>
                    <h3><span className='icon_style'><BiSolidPhone /></span> Call to us</h3>
                    <p>we are available 24/7, 7days a week</p>
                    <p>phone: +8801611112222</p>
                </div>
                <hr/>
                <div className='email_iformation'>
                   <h3><span className='icon_style'><BiEnvelope/></span> Write to us</h3>
                    <p>Fill out our form and we will contact you within 24 hours.</p>
                    <p>Emails: hussainabuqattam3@gmail.com</p>
                </div>
           </div>
        </Col>
        <Col lg={8}>
        <Form className='information_contact_container'>
            <Row className="mb-3">
                <Form.Group as={Col} md="4" controlId="validationCustom01">
                <Form.Control
                    required
                    type="text"
                    placeholder="Your Name"
                />
                 </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustom02">
                <Form.Control
                    required
                    type="email"
                    placeholder="Your Email"
                />
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustom02">
                <Form.Control
                    required
                    type="text"
                    placeholder="Your Phone"
                />
                </Form.Group>
      
               </Row>
               <FloatingLabel controlId="floatingTextarea2" label="Comments">
                        <Form.Control
                        as="textarea"
                        placeholder="Leave a comment here"
                        style={{ height: '190px' }}
                        />
                    </FloatingLabel>
                    <div className='d-flex justify-content-end mt-5' >
                       <Button type="submit" variant="danger">Send Message</Button>
                    </div>
            </Form>
        </Col>
    </Row>
</Container>
  )
}
