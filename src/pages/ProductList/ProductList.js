import React,{useState, Fragment} from "react";
import "./ProductList.css"
import SeeOfferCard from "../../components/SeeOfferCard/SeeOfferCard";
import BreadcrumbHeader from "../../components/BreadcrumbHeader/BreadcrumbHeader";

function ProductList() {
    return(
        <Fragment>
            <SeeOfferCard/>

            <BreadcrumbHeader />

        </Fragment>
    )
}

export default ProductList;