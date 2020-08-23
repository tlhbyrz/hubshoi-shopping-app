import React from "react";
import "./ProductDetail.css"
import ProductDetailImg from "../../assets/product-detail.png"

function ProductDetail() {
    return(
        <div className="product-detail-section">
            <div className="product-detail-image-section">
                <img className="product-detail-img" src={ProductDetailImg}/>
            </div>

            <div className="product-detail-info-section">
                <div className="product-detail-text-container">
                    <h4 className="product-detail-title">Buy 1 Get 1 Free</h4>
                    <p className="product-detail-offer-time"> <span>Limited offer time:</span> 15.06.2020 - 31.07.2020</p>
                    <div className="product-detail-price-container">
                        <p>€30</p>
                        <p>€40</p>
                        <p>Save €10</p>
                    </div>
                    <p className="product-detail-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt </p>
                    <button className="product-detail-btn">Available pharmacies (13)</button>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail;