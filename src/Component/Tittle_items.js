import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

export const Tittle_items = ({ text }) => {   
    return (
    <div className='tittle_items d-flex justify-content-between'>
        <h1 className='before_tittle'>{text}</h1>
        <Button variant="danger">View All</Button>
    </div>
  )
}


