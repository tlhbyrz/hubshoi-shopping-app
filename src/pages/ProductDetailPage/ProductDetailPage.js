import React, {Fragment, useState} from "react";
import "./ProductDetailPage.css"
import BreadcrumbHeader from "../../components/BreadcrumbHeader/BreadcrumbHeader";
import ProductDetail from "../../components/ProductDetail/ProductDetail";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import HorizontalOffer from "../../components/HorizontalOffer/HorizontalOffer";
import HorizontalPharmacy from "../../components/HorizontalPharmacy/HorizontalPharmacy";
import DetailedProductCard from "../../components/DetailedProductCard/DetailedProductCard";

function ProductDetailPage() {
    const [products, setProducts] = useState([1,1]);
    const [pharmacies, setPharmacies] = useState([1,1,1]);
    const [similarProducts, setSimilarProducts] = useState([1,1,1,1]);

    return(
        <Fragment>
            <BreadcrumbHeader/>

            <div className="app-container">
                <div className="homepage">
                    <ProductDetail/>

                    <SectionHeader title="Product Details" />
                    <HorizontalOffer/>

                    <SectionHeader title="Available pharmacies (13)" />

                    <div className="offer-pharmacy-search-container">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <button className="btn" type="button" id="button-addon2">
                                    <i className="fa fa-search" aria-hidden="true"></i>
                                </button>
                            </div>
                            <input type="text" className="form-control" placeholder="Search products, discount, etc"
                                   aria-label="Search products, discount, etc" aria-describedby="button-addon2" />
                        </div>

                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Product category"
                                   aria-label="Product category" aria-describedby="button-addon2" />
                            <div className="input-group-append">
                                <button className="btn" type="button" id="button-addon2">
                                    <i className="fa fa-chevron-down" aria-hidden="true"></i>
                                </button>
                            </div>
                        </div>
                    </div>


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

                    <SectionHeader title="Similar products" />
                    {
                        similarProducts.map((similarProd, index) => (
                            <DetailedProductCard key={index}/>
                        ))
                    }
                </div>
            </div>
        </Fragment>
    )
}

export default ProductDetailPage;