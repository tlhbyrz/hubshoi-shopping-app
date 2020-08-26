import React,{useState, Fragment} from "react";
import "./BreadcrumbHeader.css"

function BreadcrumbHeader() {
    const [menus, setMenus] = useState([
        {name: "Home", path: "/home"},
        {name: "Category Page", path: "/home"},
        {name: "Sub Category", path: "/home"},
    ])
    return(
        <div className="breadcrumb-section">
            <div className="breadcrumb-container">
                {
                    menus.map((menu, index) => (
                        <p key={index} className="breadcrumb-item breadcrumb-item-active">{menu.name}</p>
                    ))
                }
            </div>
        </div>
    )
}

export default BreadcrumbHeader;