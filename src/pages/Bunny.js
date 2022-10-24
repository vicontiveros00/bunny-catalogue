import React from "react";
import { useParams } from "react-router-dom";
import { Patkis } from "./Patkis";
import { Hattara } from "./Hattara";
import { Sade } from "./Sade";

//this component acts as a bunny router, doesn't display anything

export function Bunny() {

    const bunnyIndex = {
        "patkis" : <Patkis />,
        "hattara" : <Hattara />,
        "sade": <Sade />
    }

    const { id } = useParams()
    return bunnyIndex[id];
}