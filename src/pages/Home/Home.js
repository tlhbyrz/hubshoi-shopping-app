import React, {useState} from "react";
import InfoCard from "../../components/InfoCard/InfoCard";
import ProductCard from "../../components/ProductCard/ProductCard";
import "./Home.css"

function Home() {
    const [cards, setCards] = useState([1,1,1,1,1,1]);
    const [loading, setLoading] = useState(true);

    return (
        <div className="homepage">
            {
                cards.map((card, index) => (
                    <ProductCard key={index}/>
                ))
            }
        </div>
    )
}


export default Home