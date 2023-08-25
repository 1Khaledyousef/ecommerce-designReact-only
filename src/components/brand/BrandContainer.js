import React from 'react'
import { BrandCard } from './BrandCard'
import brand1 from "../../assits/images/brand1.png";
import brand2 from "../../assits/images/brand2.png";
import brand3 from "../../assits/images/brand3.png";
import { Container, Row } from 'react-bootstrap';
  export const BrandContainer = ( ) => {
    return (
        <Container>
        <div className="admin-content-text mt-2 ">كل الماركات</div>
        <Row className='my-1 d-flex justify-content-between'>
            <BrandCard img={brand1} />
            <BrandCard img={brand2} />
            <BrandCard img={brand3} />
            <BrandCard img={brand2} />
            <BrandCard img={brand1} />
            <BrandCard img={brand3} />
            <BrandCard img={brand1} />
            <BrandCard img={brand2} />
            <BrandCard img={brand3} />
            <BrandCard img={brand2} />
            <BrandCard img={brand1} />
            <BrandCard img={brand3} />
            <BrandCard img={brand1} />
            <BrandCard img={brand2} />
            <BrandCard img={brand3} />
            <BrandCard img={brand2} />
            <BrandCard img={brand1} />
            <BrandCard img={brand3} />

        </Row>
    </Container>
    )
}

 