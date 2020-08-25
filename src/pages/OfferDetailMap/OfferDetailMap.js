import React,{Fragment} from "react";
import "./OfferDetailMap.css"
import MapPageHeader from "../../components/MapPageHeader/MapPageHeader";
import OfferLeftWithoutImg from "../../components/OfferLeftWithoutImg/OfferLeftWithoutImg";

function OfferDetailMap() {
    return(
        <Fragment>
            <MapPageHeader/>
            <div className="offer-detail-map-section">
                <OfferLeftWithoutImg/>
                <div className="offer-detail-map-location-section"></div>
            </div>
        </Fragment>
    )
}

export default OfferDetailMap;