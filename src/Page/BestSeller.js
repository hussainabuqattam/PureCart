import React from 'react'
import { Container } from 'react-bootstrap'
import { ProductTitle } from '../Component/ProductTitle'
import { Card_Items } from '../Component/Card'
import { Pagination } from '../Component/Pagination'

export const BestSeller = () => {
  return (
    <Container>
        <ProductTitle text={'Best Seller'}/>
        <Card_Items/>
        <Pagination/>
    </Container>
  )
}
