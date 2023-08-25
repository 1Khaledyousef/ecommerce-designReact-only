import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import UserSideBar from '../../components/User/UserSideBar'
import UserAllOrder from '../../components/User/UserAllOrder'
const UserAllOrdersPage = () => {
    return (
        <Container >
            <Row className='py-3'>
                <Col sm="12" xs="12" md="2">
                    <UserSideBar />
                </Col>

                <Col sm="12" xs="12" md="10">
                    <UserAllOrder />
                </Col>
            </Row>
        </Container>
    )
}


export default UserAllOrdersPage
