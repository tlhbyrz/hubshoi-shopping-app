import React from "react";
import "./SearchBar.css";

function SearchBar({topMargin}) {
    return(
        <div className="searchbar-section" style={{marginTop: topMargin ? topMargin : "24px"}}>
            <div className="searchbar-container">
                <div className="input-group">
                    <input type="text" className="form-control" placeholder="Search products, discount, etc"
                           aria-label="Search products, discount, etc" aria-describedby="button-addon2" />
                        <div className="input-group-append">
                            <button className="btn" type="button" id="button-addon2">
                                <i className="fa fa-search" aria-hidden="true"></i>
                            </button>
                        </div>
                </div>

                <div className="input-group">
                    <input type="text" className="form-control" placeholder="Product category"
                           aria-label="Product category" aria-describedby="button-addon2" />
                    <div className="input-group-append">
                        <button className="btn" type="button" id="button-addon2">
                            <i className="fa fa-chevron-down" aria-hidden="true"></i>
                        </button>
                    </div>
                </div>

                <div className="input-group">
                    <input type="text" className="form-control" placeholder="Offer type"
                           aria-label="Offer type" aria-describedby="button-addon2" />
                    <div className="input-group-append">
                        <button className="btn" type="button" id="button-addon2">
                            <i className="fa fa-chevron-down" aria-hidden="true"></i>
                        </button>
                    </div>
                </div>

                <div className="input-group">
                    <input type="text" className="form-control" placeholder="Sort"
                           aria-label="Sort" aria-describedby="button-addon2" />
                    <div className="input-group-append">
                        <button className="btn" type="button" id="button-addon2">
                            <i className="fa fa-sort-amount-desc" aria-hidden="true"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchBar;