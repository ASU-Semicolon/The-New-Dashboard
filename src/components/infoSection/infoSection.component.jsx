import React from "react";
import './infoSection.style.css';


function InfoSection({title, body}) {
    return (
        <>
            <div className="infoSection">
                <h1 className="infoSectionTitle">{title}</h1>
                <p className="infoSectionBody">{body}</p>
            </div>
        </>
    );
}

export default InfoSection;
