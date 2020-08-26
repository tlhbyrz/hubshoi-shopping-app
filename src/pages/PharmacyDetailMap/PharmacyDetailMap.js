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
                <div className="pharmacy-map-location-section">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3009.4284814835873!2d29.088418315662725!3d41.03775802555852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDAyJzE1LjkiTiAyOcKwMDUnMjYuMiJF!5e0!3m2!1str!2str!4v1598421112334!5m2!1str!2str"
                        width="600" height="450" frameBorder="0" allowFullScreen=""
                        aria-hidden="false" tabindex="0"></iframe>
                </div>
            </div>
        </Fragment>
    )
}

export default PharmacyDetailMap;