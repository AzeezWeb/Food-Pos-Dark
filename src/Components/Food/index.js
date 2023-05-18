import React from "react";
import './Food.css'

function Food( {foodData, onAdd } ) {

 


  return ( 
    <div className="Foods">
        <div className="Row">
          <h2 className="Food-sub__title">Choose Dishes </h2>
          <select className="Food-select" >
            <option value="1">Dine In</option>
            <option value="2">To Go</option>
            <option value="3">Delivery</option>
          </select>
        </div>
        <div className="Row">
          {foodData.map((item) => (
            <div className="Food" key={item.id} id={item.id} onClick={() => onAdd(item)}>
                <div className="Food-img" > <img src={item.img} alt={item.name}/></div>
                <h3 className="Food-title"> {item.name}</h3>
                <p className="Food-price"> $ {item.price} </p>
                <p className="Food-bowls"> {item.bowls} Bowls available</p>
          </div>
          ))}
        </div>
    </div>
   );
}

export default Food;