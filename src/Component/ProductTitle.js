import React from 'react'

export const ProductTitle = ({text}) => {
  return (
    <div className='tittle_items d-flex justify-content-between'>
       <h1 className='before_tittle'>{text}</h1>
    </div>
  )
}
