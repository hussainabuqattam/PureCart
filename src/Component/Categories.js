import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { FcIntegratedWebcam } from "react-icons/fc";
import { FcOldTimeCamera,FcMultipleSmartphones,FcClock,FcHeadset,FcMultipleDevices,FcPuzzle} from "react-icons/fc";


export const Categories = () => {
  return (
    <Row>
        <Col  lg={3} md={12} className='service-categories text-xs-center'>
             <Card className="service-card card-inverse">
                <div class="card-block">
                    <span className='icon_categories'><FcOldTimeCamera /></span>
                    <h4 class="card-title">Camera</h4>
                </div>
             </Card>
        </Col>

        <Col  lg={3} md={12} className='service-categories text-xs-center'>
             <Card className="service-card card-inverse">
                <div class="card-block">
                    <span className='icon_categories'><FcMultipleSmartphones /></span>
                    <h4 class="card-title">phone</h4>
                </div>
             </Card>
        </Col>

        <Col  lg={3} md={12} className='service-categories text-xs-center'>
             <Card className="service-card card-inverse">
                <div class="card-block">
                    <span className='icon_categories'><FcClock /></span>
                    <h4 class="card-title">SmartWatch</h4>
                </div>
             </Card>
        </Col>

        <Col  lg={3} md={12} className='service-categories text-xs-center'>
             <Card className="service-card card-inverse">
                <div class="card-block">
                    <span className='icon_categories'><FcHeadset /></span>
                    <h4 class="card-title">HeadPhones</h4>
                </div>
             </Card>
        </Col>

        <Col  lg={3} md={12} className='service-categories text-xs-center'>
             <Card className="service-card card-inverse">
                <div class="card-block">
                    <span className='icon_categories'><FcMultipleDevices /></span>
                    <h4 class="card-title">Computer</h4>
                </div>
             </Card>
        </Col>

        <Col  lg={3} md={12} className='service-categories text-xs-center'>
             <Card className="service-card card-inverse">
                <div class="card-block">
                    <span className='icon_categories'><FcPuzzle /></span>
                    <h4 class="card-title">Gaming</h4>
                </div>
             </Card>
        </Col>
    </Row>
  )
}
