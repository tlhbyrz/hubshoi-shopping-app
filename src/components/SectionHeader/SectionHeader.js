import React from "react";
import "./SectionHeader.css"

function SectionHeader({title}) {
    return(
        <div className="section-header">
            <p className="section-header-title">{title}</p>
        </div>
    )
}

export default SectionHeader;