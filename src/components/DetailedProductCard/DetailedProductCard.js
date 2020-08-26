import React from "react";
import "./DetailedProductCard.css"
import ProductImg from "../../assets/product.png"
import {useHistory} from "react-router-dom";

function DetailedProductCard({comingFrom}) {
    let history = useHistory();

    function handleNav() {
        if (comingFrom === "product"){
            history.push("productdetail");
        }else if(comingFrom === "offer"){
            history.push("offerdetail");
        }
    }

    return(
        <div className="detailed-product-card" onClick={handleNav}>
            <img src={ProductImg}
                 className="detailed-product-img"   />
            <h5>Buy 1 Get 1 Free</h5>
            <p>Bioderma Hydrabio H2O Micellar Water 100ml.</p>
            <div className="detailed-product-price-container">
                <p>€30</p>
                <p>€40</p>
                <p>Save €10</p>
            </div>
            <div className="detailed-product-news">
                <p><i className="fa fa-clock-o" aria-hidden="true"></i>Last 5 days</p>
                <p><i className="fa fa-map-marker" aria-hidden="true"></i>Available in 13 pharmacies</p>
            </div>
        </div>
    )
}

export default DetailedProductCard;