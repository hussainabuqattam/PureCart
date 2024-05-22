import React from 'react'
import { Carousel_Img } from '../Component/Carousel'
import { Container } from 'react-bootstrap'
import { Tittle_items } from '../Component/Tittle_items'
import { Card_Items } from '../Component/Card'
import { Categories } from '../Component/Categories'
import { ShowProduct } from '../Component/ShowProduct'
import { Brands } from '../Component/Brands'

export const HomePage = () => {
  return (
    <>
       <Carousel_Img/>
        <Container>
          <Tittle_items text="Best Seller"/>
          <Card_Items/>
          <Tittle_items text="Categories"/>
          <Categories/>
          <ShowProduct/>
          <Tittle_items text="Product"/>
          <Card_Items/>
          <Tittle_items text="Brands"/>
          <Brands/>
        </Container>
    </>
  )
}
