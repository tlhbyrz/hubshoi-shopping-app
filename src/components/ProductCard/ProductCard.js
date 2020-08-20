import React from "react";
import "./ProductCard.css"
import {Link} from "react-router-dom";


function ProductCard() {
    return (
        <div className="product-card">
            <img src={"https://www.biobizz.com/wp-content/uploads/2019/07/Bio%C2%B7pH-Product-Page-900x604.jpg"}
                 className="product-img"   />
                 <h5>Black Roze</h5>
                <p>Lorem ipsum dolor sit amet, consectetur.</p>
                <p className="add-to-card-button">Sepete Ekle</p>
        </div>
    )
}

export default ProductCard