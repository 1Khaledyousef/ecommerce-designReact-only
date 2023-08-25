import React from 'react'
import { CategoryHeader } from '../Auth/Category/CategoryHeader'
import { Container } from 'react-bootstrap'
import { ProductDetails } from '../../components/Products/ProductDetails'
import RateContainer from '../../components/Rate/RateContainer'

export const ProductDetailsPage = () => {
    return (
        <div style={{minHeight:'800px'}}>
            <CategoryHeader />
            <Container>
                <ProductDetails />
                <RateContainer/>
            </Container>
        </div>
    )
}
