import React from 'react'
import { ChoosePayMethoud } from '../../components/CheckOut/ChoosePayMethoud'
import { Container } from 'react-bootstrap'

export const ChoosePayMethoudPage = () => {
    return (
        <div style={{minHeight:760,}}>
            <Container>
                <ChoosePayMethoud />
            </Container>
        </div>
    )
}
