import React from "react";
import './Order.css';
import {AiOutlineDelete} from 'react-icons/ai'


function Orders( { order, onDelet, payment} ) {

   const totalCost = order.map(el => el.count * el.price)
   const sum = order.length !==  0 ? totalCost.reduce((a, b) => a +b ) : 0
   
   const Continue = () => {
    if(order.length > 0 ) {
      payment(true)
    }
   }

  return (
    <div className="Order-Container">
      <div className="Orders">
        <h2 className="Order-title"> Orders #34562</h2>
        <div className="Row">
          <button className="Order-btn active"> Dine In</button>
          <button className="Order-btn"> To Go</button>
          <button className="Order-btn"> Delivery</button>
        </div>
        <div className="Row br">
          <h2 className="Sub-title"> Item</h2>
          <h2 className="Sub-title2"> Qty</h2>
          <h2 className="Sub-title3"> Price</h2>
        </div>
        {order.map((item) => (
          <div className="Row" key={item.id}>
          <div className="Row Order">
              <div className="Food-info">
                  <img src={item.img} alt='Food-img'/>
                  <div>
                      <p className="Food-title "> {item.name}</p>
                      <p className="Food-price"> ${item.price}</p>
                  </div>
              </div>
                <p className=" Order-Number">{item.count}</p>
                <p className="All-price"> $ {item.count * item.price}</p>
            </div>
            <div className="Row Input">
                <input className="Order-note" placeholder="Order Note..."/>
                <div className="Order-delet-btn" onClick={() => onDelet(item)}><AiOutlineDelete /></div>
            </div>
         </div>
        ))}
      </div>
      <div className="Continue-payment">
        <div className="Discount"> 
          <p> Discount</p>
          <p> $ {(sum / 10 * 2).toFixed(2)}</p>
        </div>
        <div className="Sub-total">
          <p> Sub-totla </p>
          <p> $ {sum.toFixed(2)}</p>
        </div>
        <button className="Continue-btn" onClick={Continue}>Continue to Payment</button>
      </div>
    </div>

  );
}

export default Orders;