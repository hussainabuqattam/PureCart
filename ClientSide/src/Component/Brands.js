import React from 'react'
import camera from '../Image/camera.webp'
import barfan from '../Image/barfan.webp'
import makcub from '../Image/makcub.jpeg'
import house from '../Image/house.webp'

import { Col, Image, Row } from 'react-bootstrap'

export const Brands = () => {
  return (
    <Row className='mt-5 mb-5'>
            <Col lg={6}>
                <div className='brand_cover mb-5'>
                    <Image className="Brand_image" src={camera} fluid />
                </div>
            </Col>
            <Col lg={6}>
                <div>
                    <Row>
                        <Col lg={12} className='median_img'>
                            <Image src={barfan} fluid />
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={6} className='mt-4 small_img'>
                            <Image src={makcub} fluid />
                        </Col>
                        <Col lg={6} className='mt-4 small_img'>
                            <Image src={house} fluid />
                        </Col>
                    </Row>
                </div>
            </Col>
        </Row>

)
}
