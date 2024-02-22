import React from "react";
import './infoSection.style.css';


function InfoSection({title, body}) {
    return (
        <>
            <div className="infoSection">
                <h1>{title}</h1>
                <p>{body}</p>
            </div>
        </>
    );
}

export default InfoSection;
