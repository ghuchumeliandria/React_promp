import React from "react";
import "./foodOrder.css"

function Price(props){
    return (
        <>
            <div className="food_price">
                <p className="price_paragraph">{props.price}</p>
                <p className="old_price_paragraph">{props.oldPrice}</p>
            </div>
            </>

    )
}
export default Price;
