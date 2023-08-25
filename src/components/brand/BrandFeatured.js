import React from 'react'
import { Row ,Container } from 'react-bootstrap'
import brand1 from "../../assits/images/brand1.png";
import brand2 from "../../assits/images/brand2.png";
import brand3 from "../../assits/images/brand3.png";
import { BrandCard } from './BrandCard';
import { SubTitle } from '../uitilty/SubTitle';
export const BrandFeatured = ({title ,btntitle ,linktext} ) => {
    return (
        <Container>
            <SubTitle title={title} btntitle={btntitle}  linktext={linktext}  />
            <Row className='my-1 d-flex justify-content-between'>
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
