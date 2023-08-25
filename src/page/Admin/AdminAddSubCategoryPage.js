import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { AdminSideBar } from '../../components/Admin/AdminSideBar'
import AdminAddSubCategory from '../../components/Admin/AdminAddSubCategory'
const AdminAddSubCategoryPage = () => {
    return (
        <Container >
            <div style={{ minHeight: '808px', }}> 

                <Row className='py-3 '>
                    <Col sm="12" xs="12" md="2">
                        <AdminSideBar />
                    </Col>

                    <Col sm="12" xs="12" md="10">
                        <AdminAddSubCategory />
                    </Col>
                </Row>
                </div>
        </Container>
    )
}

export default AdminAddSubCategoryPage
