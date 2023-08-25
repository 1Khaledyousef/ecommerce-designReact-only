
import UserSideBar from '../../components/User/UserSideBar'
import UserFavoriteProduct from '../../components/User/UserFavoriteProduct'
import { Container, Row, Col } from 'react-bootstrap'
const UserFavoriteProductsPage = () => {
    return (
        <Container >
            <Row className='py-3'>
                <Col sm="12" xs="12" md="2">
                    <UserSideBar />
                </Col>

                <Col sm="12" xs="12" md="10">
                    <UserFavoriteProduct />
                </Col>
            </Row>
        </Container>
    )
}

export default UserFavoriteProductsPage
