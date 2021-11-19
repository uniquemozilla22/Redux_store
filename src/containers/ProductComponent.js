import React from 'react'
import { useSelector } from 'react-redux'

const ProductComponent = () => {

    const product = useSelector((state)=>state.allProducts.products)
    console.log(product)
    const {id , title} =product[0]
    return (
        <div className="four-column wide">
            <div className="ui link-cards">
                <div className="cards">
                    <div className="image"></div>
                    <div className="content">{title+id}</div>
                    <dic className="header">{title}</dic>
                </div>
            </div>
        </div>
    )
}

export default ProductComponent
