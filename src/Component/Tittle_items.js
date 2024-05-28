import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const Tittle_items = ({ text,locations }) => {   
    return (
    <div className='tittle_items d-flex justify-content-between'>
        <h1 className='before_tittle'>{text}</h1>
        <Link to={locations}>
           <Button variant="danger">View All</Button>
        </Link>
    </div>
  )
}


