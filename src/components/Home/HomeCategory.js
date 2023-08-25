import React from 'react'
import { SubTitle } from '../uitilty/SubTitle'
import { Container, Row } from 'react-bootstrap'
import { CategoryCard } from '../category/CategoryCard';
import clothe from "../../assits/images/clothe.png";
import cat2 from "../../assits/images/cat2.png";
import labtop from "../../assits/images/labtop.png";
import sale from "../../assits/images/sale.png";
import pic from "../../assits/images/pic.png";
 export const HomeCategory = ({title,btntitle,linktext}) => {
    return (
        <Container>
            <SubTitle title={title} btntitle={btntitle}   linktext ={`${linktext}`} />
            <Row className='my-2 d-flex justify-content-between'>
                <CategoryCard title="اجهزة منزلية" img={clothe} background="#F4DBA4" />
                <CategoryCard title="اجهزة منزلية" img={cat2} background="#F4DBA4" />
                <CategoryCard title="اجهزة منزلية" img={labtop} background="#0034FF" />
                <CategoryCard title="اجهزة منزلية" img={sale} background="#F4DBA4" />
                <CategoryCard title="اجهزة منزلية" img={clothe} background="#FF6262" />
                <CategoryCard title="اجهزة منزلية" img={pic} background="#F4DBA4" />
            </Row>
        </Container>

    )
}
