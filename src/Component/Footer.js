import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

export const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#000', color: '#fff', paddingTop: '70px' }}>
            <Container>
                <Row>
                    <Col md={3}>
                        <h5>Support</h5>
                        <div className='Support_section'>
                            <p>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
                            <p>exclusive@gmail.com</p>
                            <p>+88015-88888-9999</p>
                        </div>
                    </Col>
                    <Col md={3}>
                        <h5>Account</h5>
                        <ul className="list-unstyled">
                            <li><a href="#!" style={{ color: '#fff' }}>My Account</a></li>
                            <li><a href="#!" style={{ color: '#fff' }}>Login / Register</a></li>
                            <li><a href="#!" style={{ color: '#fff' }}>Cart</a></li>
                            <li><a href="#!" style={{ color: '#fff' }}>product</a></li>
                        </ul>
                    </Col>
                    <Col md={3}>
                        <h5>Quick Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="#!" style={{ color: '#fff' }}>Home</a></li>
                            <li><a href="#!" style={{ color: '#fff' }}>Contact</a></li>
                        </ul>
                    </Col>
                    <Col md={3}>
                        <h5>Social</h5>
                        <div className='Social_footer'>
                            <a href="#!" className='Facebook'><FaFacebook size={24} /></a>
                            <a href="#!" className='Twiter'><FaTwitter size={24} /></a>
                            <a href="#!" className='instgram'><FaInstagram size={24} /></a>
                            <a href="#!" className='linked'><FaLinkedin size={24} /></a>
                        </div>
                    </Col>
                </Row>
                <hr style={{ borderColor: '#fff' }} />
                <Row>
                    <Col className="text-center copy_right">
                        <p style={{ margin: '0' }}>&copy; {new Date().getFullYear()} PureCart. All rights reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

