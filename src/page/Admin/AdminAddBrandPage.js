import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { AdminSideBar } from '../../components/Admin/AdminSideBar'
import AdminAddBrand from '../../components/Admin/AdminAddBrand'
const AdminAddBrandPage = () => {
    return (
        <Container >
            <div style={{ minHeight: "650px", }} className=''>
                <Row className='py-3' >
                    <Col sm='12' xs=' 12' md='2' >
                        <AdminSideBar />
                    </Col>

                    <Col sm='12' xs='12 ' md='10'>
                        <AdminAddBrand />
                    </Col>

                </Row>



            </div>
        </Container>
    )
}

export default AdminAddBrandPage
