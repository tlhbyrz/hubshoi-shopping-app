import React from "react";
import "./CategoryCard.css"

function CategoryCard() {
    return(
        <div className="category-card">
            <img src={"https://www.biobizz.com/wp-content/uploads/2019/07/Bio%C2%B7pH-Product-Page-900x604.jpg"}
                 className="category-card-img"   />
            <h6>Black Roze</h6>
        </div>
    )
}

export default CategoryCard;