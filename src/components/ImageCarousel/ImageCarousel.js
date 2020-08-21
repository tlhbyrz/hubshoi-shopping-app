import React, {useState} from "react";
import "./ImageCarousel.css"

function ImageCarousel({counter}) {
    const [slideIndex, setSlideIndex] = useState(0);
    const [slides, setSlides] = useState([
        {
            title: "Test title1",
            desc: "Desc1",
            image: "https://images.unsplash.com/photo-1518656306295-aa28b28b2504?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
        },
        {
            title: "Test title2",
            desc: "Desc2",
            image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        },
        {
            title: "Test title3",
            desc: "Desc3",
            image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
        },
    ]);

    function decSlideIndex() {
        setSlideIndex(slideIndex - 1)
    }

    function incSlideIndex() {
        setSlideIndex(slideIndex + 1)
    }

    return(
        <div className="image-carousel">
            {
                slides.map((slide,index) =>(
                    <div className={`image-carousel-container ${slideIndex === index ? "active-slide" : "passive-slide"}`}>
                        <div className="image-carousel-text-container">
                            <h3>{slide.title}</h3>
                            <p>{slide.desc}</p>
                            <p>See Offer!</p>
                        </div>
                        <img src={slide.image}/>
                    </div>
                ))
            }

            <div className="left-carousel-button" onClick={decSlideIndex}>
                <i className="fa fa-chevron-left" aria-hidden="true"></i>
            </div>
            <div className="right-carousel-button" onClick={incSlideIndex}>
                <i className="fa fa-chevron-right" aria-hidden="true"></i>
            </div>
        </div>
    )
}

export default ImageCarousel;