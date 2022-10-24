import React from "react";
import { Link } from "react-router-dom";

export function BunnyList() {
    return (
        <>
           <ul className="list">
                <li><Link to="/bunny/patkis">P&auml;tkis</Link></li>
                <li><Link to="/bunny/hattara">Hattara</Link></li>
                <li><Link to="/bunny/sade">S&auml;de</Link></li>
           </ul>
        </>
    )
}