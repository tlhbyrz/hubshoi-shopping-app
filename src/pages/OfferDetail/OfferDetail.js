import React, {Fragment, useState} from "react";
import "./OfferDetail.css"
import BreadcrumbHeader from "../../components/BreadcrumbHeader/BreadcrumbHeader";
import ProductDetail from "../../components/ProductDetail/ProductDetail";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import HorizontalProduct from "../../components/HorizontalProduct/HorizontalProduct";
import HorizontalOffer from "../../components/HorizontalOffer/HorizontalOffer";
import HorizontalPharmacy from "../../components/HorizontalPharmacy/HorizontalPharmacy";
import TrendProduct from "../../components/TrendProduct/TrendProduct";

function OfferDetail() {
    const [products, setProducts] = useState([1,1]);
    const [pharmacies, setPharmacies] = useState([1,1,1]);
    const [otherOffers, setOtheroffers] = useState([1,1,1,1]);

    return(
        <Fragment>
            <BreadcrumbHeader/>

            <div className="app-container">
                <div className="homepage">
                    <ProductDetail/>

                    <SectionHeader title="Offers" />
                    <HorizontalOffer/>

                    <SectionHeader title="Product Details" />
                    {
                        products.map((product, index) => (
                            <HorizontalProduct key={index}/>
                        ))
                    }

                    <SectionHeader title="Available pharmacies (13)" />
                    {
                        pharmacies.map((pharmacy, index) => (
                            <HorizontalPharmacy key={index}/>
                        ))
                    }

                    <div className="center-content">
                        <button className="see-pharmacy-button">
                            See all pharmacies (13)
                        </button>
                    </div>

                    <SectionHeader title="See other offers" />
                    {
                        otherOffers.map((offer, index) => (
                            <TrendProduct key={index}/>
                        ))
                    }
                </div>
            </div>
        </Fragment>
    )
}

export default OfferDetail;