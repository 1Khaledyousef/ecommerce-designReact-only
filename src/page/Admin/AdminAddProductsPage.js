import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { AdminSideBar } from '../../components/Admin/AdminSideBar'
import AdminAddProducts from '../../components/Admin/AdminAddProducts'
const AdminAddProductsPage = () => {
    return (
        <Container >
            <Row className='py-3'>
                <Col sm="12" xs="12" md="2">
                    <AdminSideBar />
                </Col>

                <Col sm="12" xs="12" md="10">
                    <AdminAddProducts />
                </Col>
            </Row>
        </Container>
    )
}

export default AdminAddProductsPage
