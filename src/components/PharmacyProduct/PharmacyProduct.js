import React from "react";
import "./PharmacyProduct.css"
import ProductImg from "../../assets/pharmacy-product.jpg"

function PharmacyProduct() {
    return(
        <div className="pharmacy-product-container">
            <div className="pharmacy-product-card">
                <img className="pharmacy-product-img" src={ProductImg}/>
                <div className="pharmacy-product-info-section">

                    <div className="pharmacy-product-informations">
                        <p className="pharmacy-product-title">La Grande Pharmacie</p>
                        <p className="pharmacy-product-adress">Rue Joffre 1, 4000 Liege</p>
                        <p className="pharmacy-product-phone">Phone: +32 4 223 43 83</p>
                    </div>

                    <div className="pharmacy-product-buttons">
                        <button className="pharmacy-product-button">
                            Explore all offers (13)
                        </button>
                        <button className="pharmacy-product-button active-pharmacy-product">
                            <i className="fa fa-map-marker" aria-hidden="true"></i>View in map
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default PharmacyProduct;