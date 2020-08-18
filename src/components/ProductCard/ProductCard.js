import React from "react";
import "./ProductCard.css"


function ProductCard() {
    return (
        <div className="product-card">
            <img src={"https://www.biobizz.com/wp-content/uploads/2019/07/Bio%C2%B7pH-Product-Page-900x604.jpg"}
                 className="product-img"   />
                 <h5>Black Roze</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, excepturi.</p>
                <button>Sepete Ekle</button>
        </div>
    )
}

export default ProductCard