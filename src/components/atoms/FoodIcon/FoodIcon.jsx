import React from "react";
import "./FoodIcon.css";

function FoodIcon(props){
    return (
    <>
    <div className={props.iconClass}>
        <img src={props.icon} alt="" />
    </div>
    </>

    )
}
export default FoodIcon;