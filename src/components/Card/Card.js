import React from "react";
import "./Card.css";

const Card = (props) => (
    <div className= "allCards col-xs-6 col-sm-6 col-md-4col-lg-3 col-xl-3"
    key ={props.id}
    onClick = {() => props.handleClick(props.id, props.clicked)}
    >

    <img id= {props.name} alt={props.name} src={props.image}
    ></img>

    
    </div>
);


export default Card;