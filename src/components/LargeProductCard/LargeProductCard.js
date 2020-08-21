import React from "react";
import "./LargeProductCard.css"


function LargeProductCard() {
    return (
        <div className="large-product-card">
            <img src={"https://cdn.shopify.com/s/files/1/0242/1866/5056/products/acv_32_side01_1024x1024_402x_1024x1024@2x.jpg?v=1594015117"}
                 className="large-product-img"/>
            <h5>Black Roze</h5>
            <p>Lorem ipsum dolor sit amet, consectetur.</p>
            <p className="add-to-card-button">Sepete Ekle</p>
        </div>
    )
}

export default LargeProductCard