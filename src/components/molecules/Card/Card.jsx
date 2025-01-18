import React from "react";
import "./Card.css";
import FoodInfo from "../../atoms/foodInfo/foodInfo";
import Price from "../../atoms/FoodOrder/Price";
import OrderButton from "../../atoms/FoodOrder/OrderButton";
import FoodIcon from "../../atoms/FoodIcon/FoodIcon";

function Card(props) {
  return (
    <>
      <div className="card">

        <div className="card_img">
            <img src={props.img} className="card_image" alt="" />
            <div className="card_img_icon">
            <img src={props.icon}  alt="" />
            </div>
        </div>
        <div className="card_text">
        <div className="food_name">
            <p>{props.foodName}</p>
            <div className="food_icons">
                <FoodIcon icon={props.leafIcon} iconClass ={props.greenIconClass}/>
                <FoodIcon icon={props.fireIcon} iconClass ={props.redIconClass}/>
                <FoodIcon icon={props.wheatIcon} iconClass ={props.yellowIconClass}/>
            </div>
        </div>

        <div className="food_description">
            <p>{props.description}</p>
        </div>
        <div className="food_info">
        <FoodInfo p={props.cal} />
        <FoodInfo p={props.date} />
        <FoodInfo p={props.cel} />
        </div>
        <div className="food_order">
            <Price price={props.price} oldPrice={props.oldPrice}/>
            <OrderButton />
        </div>
        </div>
      </div>
    </>
  );
}

export default Card;
