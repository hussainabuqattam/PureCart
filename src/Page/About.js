import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import Abouts from '../Image/About.webp'
import { LiaFacebook } from "react-icons/lia";
import { FaTwitter, FaGooglePlusG  } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";


export const About = () => {
  return (
   <Container className='About_container'>
      <Row>
         <Col lg={6}>
            <h1>Our Story</h1>
            <p>
            is an innovative e-commerce platform designed to provide consumers with a seamless, trustworthy, and enjoyable online shopping experience. Our mission is to become the go-to marketplace for high-quality products, ensuring that every interaction with our brand leaves customers satisfied and eager to return.

            At PureCart, we prioritize customer satisfaction through a carefully curated selection of products, competitive pricing, and exceptional customer service. By leveraging the latest in e-commerce technology, we offer a user-friendly interface, secure payment options, and efficient delivery services, making online shopping not only convenient but also reliable.

            In essence, PureCart is not just an online store; it's a destination where quality meets convenience, setting new standards for what customers can expect from their online shopping experience.
            </p>
         </Col>
         <Col lg={6}>
            <div className='about_img'>
               <img src={Abouts} alt="company"/>
            </div>
         </Col>
      </Row>


      <Row className="heading mt-5">
      <Col md={{ span: 6, offset: 3 }}>
        <h2 className="text-center bottom-line">Meet Our Team</h2>
        <p className="subheading text-center">Creative Nerds</p>
      </Col>
    </Row>

    <Row className="team-row">
      <Col md={4} sm={6} className="team-wrap">
        <div className="team-member text-center">
          <div className="team-img">
            <Image src="http://deothemes.com/envato/enigma/html/img/team_1.jpg" alt="John Marshall" />
            <div className="overlay">
              <div className="team-details text-center">
                <p>
                  Our web design team will spend time with our digital marketing team.
                </p>
                <div className="socials mt-20">
                  <a href="#"><LiaFacebook /></a>
                  <a href="#"><FaTwitter /></a>
                  <a href="#"><FaGooglePlusG /></a>
                  <a href="#"><MdOutlineEmail /></a>
                </div>
              </div>
            </div>
          </div>
          <h6 className="team-title">John Marshall</h6>
          <span>Designer</span>
        </div>
      </Col>

      <Col md={4} sm={6} className="team-wrap">
        <div className="team-member text-center">
          <div className="team-img">
            <Image src="http://deothemes.com/envato/enigma/html/img/team_2.jpg" alt="Steve Roberts" />
            <div className="overlay">
              <div className="team-details text-center">
                <p>
                  Our web design team will spend time with our digital marketing team.
                </p>
                <div className="socials mt-20">
                  <a href="#"><LiaFacebook /></a>
                  <a href="#"><FaTwitter /></a>
                  <a href="#"><FaGooglePlusG /></a>
                  <a href="#"><MdOutlineEmail /></a>
                </div>
              </div>
            </div>
          </div>
          <h6 className="team-title">Steve Roberts</h6>
          <span>Photographer</span>
        </div>
      </Col>

      <Col md={4} sm={6} className="team-wrap">
        <div className="team-member last text-center">
          <div className="team-img">
            <Image src="http://deothemes.com/envato/enigma/html/img/team_3.jpg" alt="Michael Cartney" />
            <div className="overlay">
              <div className="team-details text-center">
                <p>
                  Our web design team will spend time with our digital marketing team.
                </p>
                <div className="socials mt-20">
                  <a href="#"><LiaFacebook /></a>
                  <a href="#"><FaTwitter /></a>
                  <a href="#"><FaGooglePlusG /></a>
                  <a href="#"><MdOutlineEmail /></a>
                </div>
              </div>
            </div>
          </div>
          <h6 className="team-title">Michael Cartney</h6>
          <span>Designer</span>
        </div>
      </Col>
    </Row>
   </Container>
  )
}
