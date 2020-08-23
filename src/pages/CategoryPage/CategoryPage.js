import React,{useState, Fragment} from "react";
import "./CategoryPage.css"
import BreadcrumbHeader from "../../components/BreadcrumbHeader/BreadcrumbHeader";
import SearchBar from "../../components/SearchBar/SearchBar";
import DetailedProductCard from "../../components/DetailedProductCard/DetailedProductCard";
import HeroBanner from "../../components/HeroBanner/HeroBanner";

function CategoryPage() {
    const [products, setProducts] = useState([1,1,1,1,1,1,1,1,1]);
    return(
        <Fragment>
            <BreadcrumbHeader />

            <div className="app-container">
                <div className="homepage">
                    <div className="top-page-title">
                        <p className="top-page-title-text">Ends today</p>
                    </div>
                    <HeroBanner/>
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
                </div>
            </div>

        </Fragment>
    )
}

export default CategoryPage;