import React,{Fragment} from "react";
import "./PharmacyDetailMap.css"
import MapPageHeader from "../../components/MapPageHeader/MapPageHeader";
import MapPharmacyCard from "../../components/MapPharmacyCard/MapPharmacyCard";

function PharmacyDetailMap() {
    return(
        <Fragment>
            <MapPageHeader/>
            <div className="pharmacy-map-section">
                <MapPharmacyCard/>
                <div className="pharmacy-map-location-section"></div>
            </div>
        </Fragment>
    )
}

export default PharmacyDetailMap;