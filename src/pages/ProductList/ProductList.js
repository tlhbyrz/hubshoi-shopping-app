import React,{useState, Fragment} from "react";
import "./ProductList.css"
import SeeOfferCard from "../../components/SeeOfferCard/SeeOfferCard";
import BreadcrumbHeader from "../../components/BreadcrumbHeader/BreadcrumbHeader";
import ImageCarousel from "../../components/ImageCarousel/ImageCarousel";
import SearchBar from "../../components/SearchBar/SearchBar";

function ProductList() {
    return(
        <Fragment>
            <SeeOfferCard />

            <BreadcrumbHeader />

            <div className="app-container">
                <div className="homepage">
                    <ImageCarousel />
                </div>
            </div>

            <SearchBar/>


        </Fragment>
    )
}

export default ProductList;