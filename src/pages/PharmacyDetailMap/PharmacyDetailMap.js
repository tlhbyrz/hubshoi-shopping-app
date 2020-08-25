import React,{Fragment} from "react";
import "./PharmacyDetailMap.css"
import MapPageHeader from "../../components/MapPageHeader/MapPageHeader";

function PharmacyDetailMap() {
    return(
        <Fragment>
            <MapPageHeader/>
            <div className="pharmacy-map-section">
                <div className="pharmacy-map-info-section">
                </div>
                <div className="pharmacy-map-location-section"></div>
            </div>
        </Fragment>
    )
}

export default PharmacyDetailMap;