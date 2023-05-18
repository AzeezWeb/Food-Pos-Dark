import React, { useState } from "react";
import './Home.css'
import FilterMenu from "../../Components/Filter";
import { CiSearch } from 'react-icons/ci'
import data from'./../../Data'
import Food from "../../Components/Food";
import Orders from "../../Components/Order";
import Payment from "../../Components/Payment";

function Home() {
  const [filter, setFilter] = useState(' ');
  const [state, setState] = useState(data.foodtype);
  const [orders, setOrders] = useState([])
  const [paymentActive, setPaymentActive] = useState(false)

  const addToOrder = (item) => {
    const trues = orders.some((el) => el.id === item.id)
    if(!trues) {
      setOrders([item, ...orders, ])
      setOrders((card) => {
        return card.map((product) => {
          if(product.id === item.id) {
            console.log(product.count);
            return {
              ...product,
              count: product.count++
            }
          }
          return product
        })
      })
    } else {
      setOrders((card) => {
        return card.map((product) => {
          if(product.id === item.id) {
            console.log(product.count);
            console.log(orders + ' addf2');
            return {
              ...product,
              count: product.count++
            }
          }
          return product
        })
      })
    }
    console.log(orders);
  }

  const deleteOrder = (item) =>  {

    if(item.count === 1) {
      setOrders(orders.filter((el) => el.id !== item.id))
    } else {
      setOrders((card) => {
        return card.map((product) => {
          if(product.id === item.id) {
            return {
              ...product,
              count: product.count--
            }
          }
          return product
        })
      })
    }
    console.log(orders);
  }

  let value;
  let FoodData
  if (filter === ' ' && value === undefined) {
    FoodData = data.foods.filter((item) => item.type === 'Hot Dishes' )
  } else {
    FoodData = data.foods.filter((item) => item.type === filter )
  }
  
  const SearchFood = (e) => {
     value = e.target.value.toLowerCase();
     console.log(value);
    return console.log(FoodData = data.foods.filter(item => item.name.toLowerCase().includes(value) ));
  }
  return ( 
      <div className="Container">
        <div className="Home">
        <div className="Home-container">
          <header>
            <div className="Header">
              <div className="Title-box"> 
                <h1 className="Title"> Jaegar Resto </h1>
                <p className="Title-date"> Sunday, 14 May 2023</p>
              </div>
              <div className="Search-box">
                <div className="Search-icon"> <CiSearch/> </div>
                <div className="Search-input"> 
                  <input onChange={SearchFood} type="text" placeholder="Search for food, coffe, etc.."/>
                </div>
              </div>
              </div>
            <FilterMenu data={state} setFilter={setFilter} />
          </header>
          <Food foodData={FoodData} onAdd={addToOrder}/>
        </div>
        <Orders order={orders} onDelet={deleteOrder} payment={setPaymentActive}/> 
        <Payment active={paymentActive} />
        </div>
      </div>
   );
}

export default Home;
