import React from "react";
import PatkisPic from '../media/patkis.png'

export function Patkis() {
    return (
        <div className="bunnyContainer">
            <img src={PatkisPic} alt="P&auml;tkis" className="hop"/>
            <h1>Here's P&auml;tkis, the Havana bunny.</h1>
        </div>
    );
}