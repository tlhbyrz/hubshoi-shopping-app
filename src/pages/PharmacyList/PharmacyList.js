import React,{Fragment, useState} from "react";
import SeeOfferCard from "../../components/SeeOfferCard/SeeOfferCard";
import SearchBar from "../../components/SearchBar/SearchBar";
import PharmacyProduct from "../../components/PharmacyProduct/PharmacyProduct";

function PharmacyList() {
    const [pharmacies, setPharmacies] = useState([1,1,1,1,1,1,1,1,1]);

    return(
        <Fragment>
            <SeeOfferCard />
            <SearchBar topMargin={"0px"}/>

            <div className="app-container">
                <div className="homepage mt-5">
                    {
                        pharmacies.map((pharmacy,index) => (
                            <PharmacyProduct key={index}/>
                        ))
                    }
                </div>
            </div>

        </Fragment>
    )
}

export default PharmacyList;