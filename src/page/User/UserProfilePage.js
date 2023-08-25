import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import UserSideBar from '../../components/User/UserSideBar'
import UserProfile from '../../components/User/UserProfile';
const UserProfilePage = () => {
    return (
        <Container >
            <Row className='py-3'>
                <Col sm="12" xs="12" md="2">
                    <UserSideBar />
                </Col>

                <Col sm="12" xs="12" md="10">
                    <UserProfile />
                </Col>
            </Row>
        </Container>
    )
}
export default UserProfilePage
