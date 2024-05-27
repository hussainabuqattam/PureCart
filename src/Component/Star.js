import React from 'react'
import { BsStar } from "react-icons/bs";

export const Star = () => {
const stars = Array(5).fill(null)

  return (
    <>
    {
        stars.map((_, index) => (
           <span style={{marginRight: '5px'}}>
             <BsStar key={index}/>
           </span>
       ))
   }  
  </>)
}
