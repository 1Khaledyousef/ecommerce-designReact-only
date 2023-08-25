import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { AdminSideBar } from '../../components/Admin/AdminSideBar'
import { AdminAllProducts } from '../../components/Admin/AdminAllProducts'

export const AdminAllProductsPage = () => {
    return (

        <div style={{ minHeight: '808px', }}>
            <Container>
                <Row className='py-4'>
                    <Col sm='12' xs=' 12' md='2'    >
                        <AdminSideBar />
                    </Col>
                    <Col sm='12' xs='12 ' md='10'   >
                        <AdminAllProducts />
                    </Col>

                </Row>
            </Container>
        </div>
    )
}
