import React, {Fragment, useState} from "react";
import ImageCarousel from "../../components/ImageCarousel/ImageCarousel";
import LargeProductCard from "../../components/LargeProductCard/LargeProductCard";
import SearchBar from "../../components/SearchBar/SearchBar";
import DetailedProductCard from "../../components/DetailedProductCard/DetailedProductCard";
import BreadcrumbHeader from "../../components/BreadcrumbHeader/BreadcrumbHeader";
import PharmacyTopBanner from "../../components/PharmacyTopBanner/PharmacyTopBanner";

function Pharmacy() {
    const [offers, setOffers] = useState([1,1]);
    const [products, setProducts] = useState([1,1,1,1,1,1]);
    return(
        <Fragment>
            <BreadcrumbHeader/>
            <div className="app-container">
                <div className="homepage">
                    <PharmacyTopBanner/>
                    <ImageCarousel />

                    {
                        offers.map((offer, index) => (
                            <LargeProductCard key={index}/>
                        ))
                    }
                </div>
            </div>

            <SearchBar />

            <div className="app-container">
                <div className="homepage mt-5">
                    {
                        products.map((product, index) => (
                            <DetailedProductCard key={index} comingFrom="offer"/>
                        ))
                    }
                </div>
            </div>
        </Fragment>
    )
}

export default Pharmacy;