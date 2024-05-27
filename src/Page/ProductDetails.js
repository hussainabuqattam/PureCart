import React, { useState } from 'react'
import { Col, Row, Container, Card, Form, Button } from 'react-bootstrap'
import camera from '../Image/camera.webp'
import barfan from '../Image/barfan.webp'
import makcub from '../Image/makcub.jpeg'
import house from '../Image/house.webp'
import { Star } from '../Component/Star'
import Checkbox from '@mui/material/Checkbox';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { ButtonGroup, Input, TextField } from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { FcShipped,FcProcess  } from "react-icons/fc";


export const ProductDetails = () => {
const [imgreplace, setimgreplace] = useState(camera)
const [alignment, setAlignment] = React.useState('XS');

const [count, setCount] = useState(1);
const handleChangecounter = (event) => {
  setCount(Math.max(Number(event.target.value), 1));
};

const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  return (
   <Container>
      <Row className='mt-5 mb-5'>
        <Col lg={6}>
            <div className='img_product_details_container d-flex mb-5'>
             <Col md={2}>
                <div className='img_details_container'>
                    <div onClick={() => {setimgreplace(barfan)}} className='small_img_details mt-3 mr-4'>
                        <img  src={barfan} alt='img'/>
                    </div>
                    <div onClick={() => {setimgreplace(makcub)}} className='small_img_details mt-3 mr-4'>
                        <img src={makcub} alt='img'/>
                    </div>
                    <div onClick={() => {setimgreplace(house)}} className='small_img_details mt-3 mr-4'>
                        <img src={house} alt='img'/>
                    </div>
                    <div onClick={() => {setimgreplace(camera)}} className='small_img_details mt-3 mr-4'>
                        <img src={camera} alt='img'/>
                    </div>
                </div>
             </Col>
             <Col md={9}>
                <div className='big_img_details'>
                    <img src={imgreplace} alt='img_big'/>
                </div>
             </Col>
             </div>

        </Col>

        <Col lg={6}>
            <div className='information_details'>
                <h1>Havic HV G-92 Gamepad</h1>
                <Star/>          
                <p className='mt-3 information_price'>$ 192.00</p>
                <p>PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.</p>
                <hr/>
                <div className='colors_section d-flex'>
                    <h5 style={{ marginTop: '5px' }}>
                        Colours: 
                    </h5>
                    <Checkbox defaultChecked style={{ color: 'red', paddingRight: '0px' }}/>
                    <Checkbox defaultChecked style={{ color: '#000', paddingRight: '0px'}} />
                    <Checkbox defaultChecked style={{ color: '#ffc107', paddingRight: '0px'}} />
                </div>
                <div className='size_section d-flex mt-4'>
                    <h5 style={{ marginTop: '5px' }}>
                        Size: 
                    </h5>
                    <ToggleButtonGroup
                    color="primary"
                    value={alignment}
                    exclusive
                    onChange={handleChange}
                    aria-label="Platform"
                    >
                        <ToggleButton value="XS">XS</ToggleButton>
                        <ToggleButton value="S">S</ToggleButton>
                        <ToggleButton value="M">M</ToggleButton>
                        <ToggleButton value="L">L</ToggleButton>
                        <ToggleButton value="XL">XL</ToggleButton>
                    </ToggleButtonGroup>
                </div>
                <div className="d-flex flex-row  align-items-center mt-4">
                <ButtonGroup>
                    <Button 
                    className='counter_button'
                    onClick={() => setCount((prev) => prev - 1)}
                    disabled={count === 1}
                    >
                        <RemoveIcon fontSize="small" />
                        </Button>
                        <input style={{height:'38px', textAlign:'center'}} size="small" onChange={handleChangecounter} value={count} />
                        <Button 
                         className='counter_button_plus'
                         onClick={() => setCount((prev) => prev + 1)}>
                        <AddIcon fontSize="small" />
                        </Button>
                </ButtonGroup>
                <Button className='Buy_button'>Buy Now</Button>
                </div>
            </div>
            <div className='Card_details_delivery '>
                <div className='d-flex'>
                    <div className='icon_details_delivery'>
                       <FcShipped />
                    </div>
                    <div className='inform_details_delivery'>
                        <h4>Free Delivery</h4>
                        <p>Enter your postal code for Delivery Availability</p>
                    </div>
                </div>
                <hr/>
                <div className='d-flex'>
                    <div className='icon_details_delivery'>
                       <FcProcess />
                    </div>
                    <div className='inform_details_delivery'>
                        <h4>Return Delivery</h4>
                        <p>Free 30 Days Delivery Returns. Details</p>
                    </div>
                </div>
            </div>
           
        </Col>
      </Row>

   </Container>
)
}
