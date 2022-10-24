import React from "react";
import SadePic from "../media/sade.png";

export function Sade() {
    return (
        <div className="bunnyContainer">
            <img src={SadePic} alt="Sade Image Missing" className="hop"/>
            <h1>Here's S&auml;de, the lop bunny.</h1>
        </div>
    )
}