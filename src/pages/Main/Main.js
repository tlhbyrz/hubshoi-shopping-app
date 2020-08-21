import React, {Fragment, useState} from "react";
import SeeOfferCard from "../../components/SeeOfferCard/SeeOfferCard";
import ProductCard from "../../components/ProductCard/ProductCard";
import TrendProduct from "../../components/TrendProduct/TrendProduct";
import LargeProductCard from "../../components/LargeProductCard/LargeProductCard";

function Main() {
    const [cards, setCards] = useState([1,1,1,1,1,1]);
    const [largeCards, setLargeCards] = useState([1,1]);
    const [trendCards, setTrendCards] = useState([1,1,1,1]);
    const [loading, setLoading] = useState(true);

    return (
        <Fragment>
            <SeeOfferCard/>

            <div className="app-container">
                <div className="homepage">
                    {
                        largeCards.map((card, index) => (
                            <LargeProductCard key={index}/>
                        ))
                    }


                    {
                        cards.map((card, index) => (
                            <ProductCard key={index}/>
                        ))
                    }

                    <section className="sub-title">
                        <p className="sub-title-text">Amazing value on our trending products</p>
                    </section>

                    <section className="trend-product-container">
                        {
                            trendCards.map((card, index) => (
                                <TrendProduct key={index}/>
                            ))
                        }
                    </section>

                </div>
            </div>

        </Fragment>
    )
}


export default Main;