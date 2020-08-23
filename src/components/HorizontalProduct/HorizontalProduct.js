import React from "react";
import "./HorizontalProduct.css"
import ProductImg from "../../assets/product.png"

function HorizontalProduct() {
    return(
        <div className="horizontal-product-card">
            <div className="horizontal-product-image-section">
                <img className="horizontal-product-img"  src={ProductImg}/>
            </div>

            <div className="horizontal-product-info-section">
                <p className="horizontal-product-title">Bioderma Hydrabio H2O Micellar Water 100ml</p>
                <div className="horizontal-product-size-code-section">
                    <p className="horizontal-product-size">100ml</p>
                    <p className="horizontal-product-code">Product code: 2839823</p>
                </div>
                <p className="horizontal-product-link">Product info</p>
                <div className="horizontal-product-price-container">
                    <p>€30</p>
                    <p>€40</p>
                    <p>Save €10</p>
                </div>
            </div>

        </div>
    )
}

export default HorizontalProduct;