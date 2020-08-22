import React from "react";
import "./SearchBar.css";
import { Input } from 'antd';
const { Search } = Input;

function SearchBar() {
    return(
        <div className="searchbar-section ">
            <div className="searchbar-container">
                <Search
                    placeholder="input search text"
                    onSearch={value => console.log(value)}
                    style={{ width: 200 }}
                />
            </div>
        </div>
    )
}

export default SearchBar;