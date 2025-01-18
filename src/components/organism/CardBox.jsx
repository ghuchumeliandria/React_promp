import React from "react";
import "./CardBox.css";
import PizzaImg from "../../assets/images/Pizza.png";
import TortelliniImg from "../../assets/images/Tortellini.jpg"
import StrawberryImg from "../../assets/images/Strawberry.png"
import icon from "../../assets/images/info.png";
import fireIcon from "../../assets/images/fire.png";
import wheatIcon from "../../assets/images/wheat.png";
import leafIcon from "../../assets/images/leaf.png"
import Card from "../molecules/Card/Card";

function CardContainer() {
  return (
    <>
    <h1>Magari gamovida ra</h1>
      <div className="main_container">
        <Card
          img={PizzaImg}
          icon={icon}
          foodName="Pepperoni Pizza"
          fireIcon={fireIcon}
          wheatIcon={wheatIcon}
          description="Premium pepperoni and cheese is made with real mozzarella on original hand-tossed crust."
          cal="265 Cal"
          date="P/F/C: 12/10/31"
          cel="53.8 °C"
          price="$23.90"
          oldPrice="$29.90"
          redIconClass="food_icon_box red_icon"
          yellowIconClass="food_icon_box yellow_icon"
          // greenIconClass="food_icon_box green_icon"
        />

        <Card
          img={TortelliniImg}
          icon={icon}
          foodName="Tortellini"
          fireIcon={fireIcon}
          wheatIcon={wheatIcon}
          leafIcon={leafIcon}
          description="Pasta stuffed with beef and pork topped with your choice of cream sauce with bacon, bolognese or marinara sauce."
          cal="270 Cal"
          date="P/F/C: 18/4/41"
          cel="42.4 °C"
          price="$17.90"
          oldPrice="$22.90"
          redIconClass="food_icon_box red_icon"
          yellowIconClass="food_icon_box yellow_icon"
          greenIconClass="food_icon_box green_icon"
        />

        <Card
          img={StrawberryImg}
          icon={icon}
          foodName="Strawberry Cake"
          wheatIcon={wheatIcon}
          description="Three layer strawberry dessert is not only beautiful looking, but also delicious! Perfect dessert for spring and summer."
          cal="346 Cal"
          date="P/F/C: 6/14/49"
          cel="13.9 °C"
          price="$13.90"
          oldPrice="$18.90"
          yellowIconClass="food_icon_box yellow_icon"
        />
      </div>
    </>
  );
}
export default CardContainer;
