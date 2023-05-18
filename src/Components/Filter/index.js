import React, { useState } from "react";
import './Filter.css'




function Filter( { data, setFilter}) {
  const [state, setState] = useState(data)

  const FilterItem = (e) => {     
    setFilter(e.target.id)
    setState((items) => {
        const updatedItems = [...items];
        const changedItems = updatedItems.map((item) => {
          if(e.target.id === item.type) {
            return(
              {
                ...item, 
                active: true,
              }
            )
          } else {
            return(
              {
                ...item, 
                active: false,
              }
            )
          }
        })     
        return changedItems;
      }
     )
    
  }

  return ( 
    <div className="Filter">
    <ul className="Filter-list">
        {state.map((item) => {
        return  <li className={`Filter-item ${item.active ? 'active' : ' '}`}
                    key={item.id}
                    id={item.type}
                    onClick={FilterItem}> 
                    {item.type}    
                </li> 
})}
    </ul>
 </div>
   );
}

export default Filter;