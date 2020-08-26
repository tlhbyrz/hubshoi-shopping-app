import React,{Fragment, useState} from "react";
import SeeOfferCard from "../../components/SeeOfferCard/SeeOfferCard";
import SearchBar from "../../components/SearchBar/SearchBar";
import PharmacyProduct from "../../components/PharmacyProduct/PharmacyProduct";
import BottomPagination from "../../components/BottomPagination/BottomPagination";

function PharmacyList() {
    const [pharmacies, setPharmacies] = useState([1,1,1,1,1,1,1,1,1]);

    return(
        <Fragment>
            <SeeOfferCard />
            <SearchBar topMargin={"0px"}/>

            <div className="app-container mb-5">
                <div className="homepage mt-5">
                    {
                        pharmacies.map((pharmacy,index) => (
                            <PharmacyProduct key={index}/>
                        ))
                    }
                </div>
            </div>

            <BottomPagination/>
        </Fragment>
    )
}

export default PharmacyList;