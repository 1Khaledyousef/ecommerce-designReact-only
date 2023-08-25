import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { AdminSideBar } from '../../components/Admin/AdminSideBar'
import AdminAddCategory from '../../components/Admin/AdminAddCategory'
const AdminAddCategoryPage = () => {
    return (
        <div style={{ minHeight: '608px', }}>
            <Container >
                <Row className='py-3'>
                    <Col sm="12" xs="12" md="2">
                        <AdminSideBar />
                    </Col>

                    <Col sm="12" xs="12" md="10">
                        <AdminAddCategory />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default AdminAddCategoryPage
