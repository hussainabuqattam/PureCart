import React from 'react'
import { Button, Container, Form } from 'react-bootstrap'

export const EditProfile = () => {
  return (
     <Container className='mt-5 mb-5'>
           <h4 className='mb-4' style={{color: '#db4444'}}>Edit Your Profile</h4>
                <Form className='Billing_form'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text"/>
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="formBasicEmail">
                        <Form.Label>Last name</Form.Label>
                        <Form.Control type="text"/>
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="formBasicEmail">
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="text"/>
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email"/>
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="formBasicEmail">
                        <Form.Label>Password Changes</Form.Label>
                        <Form.Control type="text" placeholder='Current Passwod'/>
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="formBasicEmail">
                        <Form.Control type="text" placeholder='New Passwod'/>
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="formBasicEmail">
                        <Form.Control type="text" placeholder='Confirm New Passwod'/>
                    </Form.Group>
                    <div className='Button_edit_profile d-flex justify-content-end'>
                        <Button className='Cancels'>Cancel</Button>
                        <Button className='Saves'>Save Changes</Button>
                    </div>
                </Form>
     </Container>
)
}
