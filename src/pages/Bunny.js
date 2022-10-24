import React from "react";
import { useParams } from "react-router-dom";
import { Patkis } from "./Patkis";
import { Hattara } from "./Hattara";
import { Sade } from "./Sade";

export function Bunny() {

    const bunnyIndex = {
        "patkis" : <Patkis />,
        "hattara" : <Hattara />,
        "sade": <Sade />
    }

    const { id } = useParams()
    return (
        bunnyIndex[id]
    )
}