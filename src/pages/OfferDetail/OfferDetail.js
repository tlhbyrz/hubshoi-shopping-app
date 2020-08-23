import React, {Fragment} from "react";
import BreadcrumbHeader from "../../components/BreadcrumbHeader/BreadcrumbHeader";
import ProductDetail from "../../components/ProductDetail/ProductDetail";
import HeroBanner from "../../components/HeroBanner/HeroBanner";

function OfferDetail() {
    return(
        <Fragment>
            <BreadcrumbHeader/>

            <div className="app-container">
                <div className="homepage">
                    <ProductDetail/>
                </div>
            </div>

        </Fragment>
    )
}

export default OfferDetail;