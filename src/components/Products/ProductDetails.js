import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { ProductGallery } from './ProductGallery'
import ProductText from './ProductText'

export const ProductDetails = () => {
    return (
        <div>
            <Row className='d-flex py-3  '>

                <Col  lg="4">
            
                <ProductGallery   />
                </Col>
                <Col  lg="8">
                <ProductText/>
                </Col>
            </Row>
        </div>
    )
}
