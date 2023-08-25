import React from 'react'
import { Link } from 'react-router-dom'
export const SubTitle = ({ title, btntitle, linktext }) => {
    return (
        <div className="d-flex justify-content-between pt-4">
            <div className="sub-tile">{title}</div>
            {btntitle ? (
                <Link to={`${linktext}`} style={{textDecoration:'none'}}>
                    <div className="shopping-now">{btntitle}</div>
                </Link>
            ) : null}
        </div>
    )
}
