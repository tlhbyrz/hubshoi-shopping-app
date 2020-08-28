import React,{useState} from "react";
import "./BottomPagination.css";

function BottomPagination() {
    const [openPages, setOpenPages] = useState(false);

    return(
        <div className="bottom-pagination">
            <div className="bottom-pagination-btn">
                <i className="fa fa-chevron-left" aria-hidden="true"></i>
            </div>
            <div className="bottom-pagination-current" onClick={() => setOpenPages(!openPages)}>
                <p className="bottom-pagination-page-number">2</p>
                <i className={`fa fa-chevron-${openPages ? "up" : "down"}`} aria-hidden="true" ></i>


                <div className={`bottom-pagination-current-pages ${openPages ? "show-bottom-pagination" : null}`}>
                    <p className="bottom-pagination-current-page">3</p>
                    <p className="bottom-pagination-current-page">4</p>
                    <p className="bottom-pagination-current-page">5</p>
                    <p className="bottom-pagination-current-page">6</p>
                </div>

            </div>
            <div className="bottom-pagination-btn">
                <i className="fa fa-chevron-right" aria-hidden="true"></i>
            </div>
        </div>
    )
}

export default BottomPagination;