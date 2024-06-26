import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import kitchane from '../Image/kitchane.jpeg'
import clothes from '../Image/clothes.jpeg'
import laptop from '../Image/laptop.jpg'
import whatch from '../Image/whatch.webp'

import { BsStar } from "react-icons/bs";
import { Star } from './Star'

export const Card_Items = () => {
    const stars = Array(5).fill(null)
  return (
    <Row>
        <Col md={3}>
        <Card className='mt-5 product_card'>
            <Card.Img variant="top" src={kitchane} />
             <Card.Body className='Card_Body_style'>
              <Card.Title >Card title</Card.Title>
              <Card.Text className='price_style'>250$</Card.Text>
              <Star/>          
            </Card.Body>
          </Card>
        </Col>

        <Col md={3}>
        <Card className='mt-5 product_card'>
            <Card.Img variant="top" src={clothes} />
             <Card.Body className='Card_Body_style'>
              <Card.Title >Card title</Card.Title>
              <Card.Text className='price_style'>250$</Card.Text>
              <Card.Text className='Star_style'>
                {
                     stars.map((_, index) => (
                        <BsStar key={index} className='mr-3'/>
                    ))
                }
                               
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={3}>
        <Card className='mt-5 product_card'>
            <Card.Img variant="top" src={laptop} />
             <Card.Body className='Card_Body_style'>
              <Card.Title >Card title</Card.Title>
              <Card.Text className='price_style'>250$</Card.Text>
              <Card.Text className='Star_style'>
                {
                     stars.map((_, index) => (
                        <BsStar key={index} className='mr-3'/>
                    ))
                }
                               
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={3}>
        <Card className='mt-5 product_card'>
            <Card.Img variant="top" src={whatch} />
             <Card.Body className='Card_Body_style'>
              <Card.Title >Card title</Card.Title>
              <Card.Text className='price_style'>250$</Card.Text>
              <Card.Text className='Star_style'>
                {
                     stars.map((_, index) => (
                        <BsStar key={index} className='mr-3'/>
                    ))
                }
                               
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
    </Row>
  )
}
