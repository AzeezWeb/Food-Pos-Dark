import React from "react";
import './Payment.css'
import {BsCreditCard2Front, BsCashCoin, BsCheckCircleFill} from 'react-icons/bs'
import { RiPaypalLine } from 'react-icons/ri'

function Payment( { active}) {
  console.log(active);
  return ( 
    <>
      <div className={`Payment ${active ? 'active' : ''} `}>
      <div className="Payment-Container">
        <h1> Payment</h1>
        <p> 3 payment method available</p>
        <div className="Payment-method"> 
          <h2> Payment Method </h2>
          <div className="Payment-btn">
          <div className="Card active">  
            <BsCheckCircleFill className="Payment-icon__check"/>
            <BsCreditCard2Front className="Payment-icon"/> <br/>
            Credit Card
          </div>
          <div className="Paypal">  
            <BsCheckCircleFill className="Payment-icon__check"/>  
            <RiPaypalLine className="Payment-icon" />  <br/>
            Paypal
          </div>
          <div className="Cash">
            <BsCheckCircleFill className="Payment-icon__check"/>
            <BsCashCoin className="Payment-icon" /> <br/>
            Cash
          </div>
          </div>
          <form className="Payment-form">
          
          <label>
            <span>Cardholder Name</span>
            <input className="Card-name" type="text" placeholder="Levi Ackerman"/>
          </label>

          <label>
           <span>  Card Number </span>
           <input className="Card-number" type="number" placeholder="2564 1421 0897 1244"/> 
          </label>
          
          <div className="Form-Row">
              <label >
                <span>Expiration Date</span>
              <input className="Card-data" type="number" placeholder="02/2022"/> 
              </label>
              
              <label>
                <span>CVV</span>
                <input className="Card-cvv"  type="password" placeholder="***"/> 
              </label>
              <hr></hr>
              <label className="Payment-select-label">
                <span>Order Type</span>
                <select className="Payment-select" >
                  <option value="1">Dine In</option>
                  <option value="2">To Go</option>
                  <option value="3">Delivery</option>
                </select>
              </label>

              <label>
              <span>Table no.</span>
              <input className="Card-table" type="number" placeholder="140"/> 
              </label>
          </div>

          <div className="Payment-form__btn">
            <button className="Form-btn__cancel"> Cancel</button>
          
            <button className="Form-btn__confirm"> Confirm Payment </button>
         </div>

          </form>

        </div>
    </div>
      </div>
    </>
   );
}
export default Payment;