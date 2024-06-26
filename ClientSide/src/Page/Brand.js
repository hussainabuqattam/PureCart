import React from 'react'
import { Container } from 'react-bootstrap'
import { ProductTitle } from '../Component/ProductTitle'
import { Categories } from '../Component/Categories'
import { Pagination } from '../Component/Pagination'

export const Brand = () => {
  return (
    <Container>
    <ProductTitle text={'Brands'}/>
       <Categories/>
       <Pagination/>
    </Container>
  )
}
