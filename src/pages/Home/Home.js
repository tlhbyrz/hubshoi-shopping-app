import React, {useState} from "react";
import InfoCard from "../../components/InfoCard/InfoCard";
import ProductCard from "../../components/ProductCard/ProductCard";
import TrendProduct from "../../components/TrendProduct/TrendProduct";
import "./Home.css"

function Home() {
    const [cards, setCards] = useState([1,1,1,1,1,1]);
    const [trendCards, setTrendCards] = useState([1,1,1,1]);
    const [loading, setLoading] = useState(true);

    return (
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
    )
}


export default Home