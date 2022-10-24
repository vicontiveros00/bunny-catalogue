import React from "react";
import { Link } from "react-router-dom";
import { Patkis } from "./Patkis";

export function BunnyList() {
    return(
        <>
           <h1>Bunnies</h1>
           <ul>
                <li><Link to="/bunny/patkis">P&auml;tkis</Link></li>
                <li><Link to="/bunny/hattara">Hattara</Link></li>
                <li><Link to="/bunny/sade">S&auml;de</Link></li>
           </ul>
        </>
    )
}