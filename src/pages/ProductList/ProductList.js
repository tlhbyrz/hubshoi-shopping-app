import React,{useState, Fragment} from "react";
import "./ProductList.css"
import SeeOfferCard from "../../components/SeeOfferCard/SeeOfferCard";
import BreadcrumbHeader from "../../components/BreadcrumbHeader/BreadcrumbHeader";
import ImageCarousel from "../../components/ImageCarousel/ImageCarousel";
import SearchBar from "../../components/SearchBar/SearchBar";
import DetailedProductCard from "../../components/DetailedProductCard/DetailedProductCard";
import ProductPagination from "../../components/ProductPagination/ProductPagination";
import BottomPagination from "../../components/BottomPagination/BottomPagination";

function ProductList() {
    const [products, setProducts] = useState([1,1,1,1,1,1,1,1,1]);
    return(
        <Fragment>
            <SeeOfferCard />

            <BreadcrumbHeader />

            <div className="app-container">
                <div className="homepage">
                    <ImageCarousel />
                </div>
            </div>

            <SearchBar/>


            <div className="app-container">
                <div className="homepage">
                    {
                        products.map((product, index) => (
                            <DetailedProductCard key={index}/>
                        ))
                    }

                    <BottomPagination/>
                </div>
            </div>

        </Fragment>
    )
}

export default ProductList;