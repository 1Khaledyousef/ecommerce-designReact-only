import React from 'react'
import { CategoryHeader } from '../Auth/Category/CategoryHeader'
import SearcCountResult from '../../components/uitilty/SearcCountResult'
import { Col, Container, Row } from 'react-bootstrap'
import SideFilter from '../../components/uitilty/SideFilter'
import { ProductCardContainer } from '../../components/Products/ProductCardContainer'
import { Pagination } from '../../components/uitilty/Pagination'
export const ShopProductPage = () => {
    return (
        <div style={{ minHeight: 700, }}>
            <CategoryHeader />
            <Container>
                <SearcCountResult title='الاكثر مبيعا ' />
                <Row className='d-flex flex-row'>
                    <Col sm="2" xs="3" md="2" className='d-flex'>
                        <SideFilter />
                    </Col>
                    <Col sm="10" xs="9" md="10">
                        <ProductCardContainer title="" btntitle="" />
                    </Col>
                </Row>
                <Pagination />
            </Container>
        </div>
    )
}

 