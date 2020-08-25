import React, {useState} from "react";
import "./OfferLeftWithoutImg.css";
import OfferMapCard from "../OfferMapCard/OfferMapCard";

function OfferLeftWithoutImg(props) {
    const [offers, setOffers] = useState([1,1,1,11,1]);

    return(
        <div className="offer-map-card-section">

            <p className="offer-map-card-numbers">43 pharmacies, 232 offers</p>
            <p className="offer-map-card-title">Offers in Liege</p>
            <p className="offer-map-card-link">Change city</p>

            <div className="offer-map-card-search-inputs">
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
                offers.map((offer, index) => (
                    <OfferMapCard key={index}/>
                ))
            }
        </div>
    )
}

export default OfferLeftWithoutImg;