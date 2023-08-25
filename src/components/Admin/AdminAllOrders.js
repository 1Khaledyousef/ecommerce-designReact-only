import React from 'react'
import { Row } from 'react-bootstrap'
import AdminAllOrdersItem from './AdminAllOrdersItem'

export const AdminAllOrders = () => {
    return (
        <div>
            <div className='admin-content-text'>ادارة جميع الطلبات</div>
            <Row>
                <AdminAllOrdersItem/>
                <AdminAllOrdersItem/> 
                <AdminAllOrdersItem/>
                <AdminAllOrdersItem/>
                <AdminAllOrdersItem/>

            </Row>
        </div>

    )
}
