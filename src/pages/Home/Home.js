import React, {useState, Fragment} from "react";
import InfoCard from "../../components/InfoCard/InfoCard";
import ProductCard from "../../components/ProductCard/ProductCard";
import TrendProduct from "../../components/TrendProduct/TrendProduct";

function Home() {
    const [cards, setCards] = useState([1,1,1,1,1,1]);
    const [trendCards, setTrendCards] = useState([1,1,1,1]);
    const [loading, setLoading] = useState(true);

    return (
        <Fragment>
            <InfoCard/>

            <div className="app-container">
                <div className="homepage">
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


export default Home