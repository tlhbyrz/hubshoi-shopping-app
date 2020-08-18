import React, {useState} from "react";
import InfoCard from "../../components/InfoCard/InfoCard";
import ProductCard from "../../components/ProductCard/ProductCard";

function Home() {
    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(true);

    return (
        <div className="homepage">
            <InfoCard/>
            <ProductCard/>
            <p>homepage</p>
            <p>homepage</p>
            <p>homepage</p>
            <p>homepage</p>
            <p>homepage</p>
            <p>homepage</p>
            <p>homepage</p>
        </div>
    )
}


export default Home