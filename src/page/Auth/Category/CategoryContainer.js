import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { CategoryCard } from '../../../components/category/CategoryCard'
import clothe from '../../../assits/images/clothe.png'
import pic from '../../../assits/images/pic.png'
import cat2 from '../../../assits/images/cat2.png'
import sale from '../../../assits/images/sale.png'
import labtop from '../../../assits/images/labtop.png'


export const CategoryContainer = () => {
    return (
        <Container>
            <Row className='my-2 d-flex justify-content-between'>
                <div>التصنيفات</div>
                <CategoryCard title="اجهزة منزلية" img={clothe} background="#F4DBA4" />
                <CategoryCard title="اجهزة منزلية" img={cat2} background="#F4DBA4" />
                <CategoryCard title="اجهزة منزلية" img={labtop} background="#0034FF" />
                <CategoryCard title="اجهزة منزلية" img={sale} background="#F4DBA4" />
                <CategoryCard title="اجهزة منزلية" img={clothe} background="#FF6262" />
                <CategoryCard title="اجهزة منزلية" img={pic} background="#F4DBA4" />
                <CategoryCard title="اجهزة منزلية" img={clothe} background="#F4DBA4" />
                <CategoryCard title="اجهزة منزلية" img={cat2} background="#F4DBA4" />
                <CategoryCard title="اجهزة منزلية" img={labtop} background="#0034FF" />
                <CategoryCard title="اجهزة منزلية" img={sale} background="#F4DBA4" />
                <CategoryCard title="اجهزة منزلية" img={clothe} background="#FF6262" />
                <CategoryCard title="اجهزة منزلية" img={pic} background="#F4DBA4" />
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
