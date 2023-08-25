import React from 'react'
import { ProductCard } from './ProductCard'
import { Container, Row } from 'react-bootstrap'
import { SubTitle } from '../uitilty/SubTitle'
 export const ProductCardContainer = ({ title, btntitle, linktext}) => {
    return (

        <Container>
            <SubTitle title={title} btntitle={btntitle}  linktext={linktext} />
            <Row className='d-flex justify-content-between mt-4 my-2'>
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </Row>
        </Container>
    )
}
