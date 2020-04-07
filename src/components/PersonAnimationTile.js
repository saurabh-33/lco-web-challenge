import React from "react";
import "../styles/PersonAnimationTile.css";

const PersonAnimationTile = (props) => {


    return (
        <div className="animation-tile" id={props.id}>
            <div className="head"></div>
            <div className="shoulder-blades"></div>
            <div className="stump"></div>
            <div className="left-arm"></div>
            <div className="right-arm"></div>
        </div>
    );

}

export default PersonAnimationTile;