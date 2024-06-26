import React from 'react'
import { Col, Image, Row } from 'react-bootstrap'
import craem from '../Image/craem.jpeg'

export const ShowProduct = () => {
  return (
     <Row>
        <Col>
          <Image src={craem} className='Image_Show'fluid />
        </Col>
     </Row>
)
}
