import React from 'react'
import { Container } from 'react-bootstrap'
import { ProductTitle } from '../Component/ProductTitle'
import { Categories } from '../Component/Categories'
import { Pagination } from '../Component/Pagination'
export const CategoriesPage = () => {
  return (
    <Container>
        <ProductTitle text={'Categories'}/>
        <Categories/>
        <Pagination/>
    </Container>
  )
}
