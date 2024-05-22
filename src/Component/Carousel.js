import React from 'react'
import { Carousel, Image } from 'react-bootstrap'
import discaunt from '../Image/discaunt.jpg'
import discaunt4 from '../Image/discaunt4.jpg'
import discaunt3 from '../Image/discaunt3.jpg'


export const Carousel_Img = () => {
  return (
    <Carousel data-bs-theme="dark">
    <Carousel.Item className='Carousel_img_container'>
      <img
        className="d-block w-100 Carousel_img"
        src={discaunt3}
        alt="First slide" 
      />
      <Carousel.Caption>
        <h5>First slide label</h5>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>  

    <Carousel.Item className='Carousel_img_container'>
      <img
        className="d-block w-100 Carousel_img"
        src={discaunt4}
        alt="First slide"
      />
      <Carousel.Caption>
        <h5>First slide label</h5>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>

        <Carousel.Item className='Carousel_img_container'>
      <img
        className="d-block w-100 Carousel_img"
        src={discaunt}
        alt="First slide"
      />
      <Carousel.Caption>
        <h5>First slide label</h5>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>  
  </Carousel>
  )
}
