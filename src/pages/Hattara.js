import React from "react";
import HattaraPic from "../media/hattara.png";

export function Hattara() {
    return (
        <div className="bunnyContainer">
            <img src={HattaraPic} alt="hattara bunny" className="hop"/>
            <h1>Here's Hattara, the mixed bunny.</h1>
        </div>
    )
}