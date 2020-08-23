import React from "react";
import "./TrendProduct.css"
import ProductImg from "../../assets/offer-trend.png"


function TrendProduct() {
    return (
        <div className="trend-product-card">
            {/*<img src={"https://www.biobizz.com/wp-content/uploads/2019/07/Bio%C2%B7pH-Product-Page-900x604.jpg"} className="trend-product-img"/>*/}
            <img src={ProductImg} className="trend-product-img"/>
            <h5>Save up to 1/2 price</h5>
            <p className="trend-add-to-card-button">Sepete Ekle</p>
        </div>
    )
}

export default TrendProduct