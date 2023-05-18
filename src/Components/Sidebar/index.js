import React from "react";
import  './Sidebar.css'
import Store from './../../Icons/1.png'
import {CostumLink} from "../CostumLink";
import { VscHome} from 'react-icons/vsc'
import { CiPercent} from 'react-icons/ci'
import { AiOutlinePieChart, AiOutlineSetting} from 'react-icons/ai'
import { IoExitOutline} from 'react-icons/io5'
import { IoMdNotificationsOutline} from 'react-icons/io'
import { HiOutlineMail} from 'react-icons/hi'


function Sidebar() {

  return (  
    <div className="Nav-Container">
        <div className='Nav-menu'>
          <ul className="Nav-list">
            <CostumLink >
              <li className="Nav-item">
                <img src={Store} alt="icon"/>
              </li>
            </CostumLink>
            <CostumLink className='Nav-link' to={`/`}> 
              <li className="Nav-item  ">
                <VscHome  className="Nav-item__icon"/> 
              </li>  
            </CostumLink>
            <CostumLink className='Nav-link' to="/percent">
              <li className="Nav-item">
               <CiPercent className="Nav-item__icon"/> 
              </li>     
            </CostumLink>
            <CostumLink className='Nav-link' to="/dashboard">
              <li className="Nav-item ">
                <AiOutlinePieChart className="Nav-item__icon"/>
              </li>          
            </CostumLink>
            <CostumLink className='Nav-link' to="/messages">
              <li className="Nav-item">
               <HiOutlineMail className="Nav-item__icon"/> 
              </li>
            </CostumLink>
            <CostumLink className='Nav-link' to="/notification">
              <li className="Nav-item">
                <IoMdNotificationsOutline className="Nav-item__icon"/>
              </li>
            </CostumLink>
            <CostumLink className='Nav-link' to="/setting">
              <li className="Nav-item ">
                <AiOutlineSetting className="Nav-item__icon"/>
              </li>
            </CostumLink>   
            <CostumLink className='Nav-link' to={'/exit'}>
              <li className="Nav-item">
                <IoExitOutline className="Nav-item__icon"/>
              </li>
            </CostumLink>
          </ul>
        </div>
    </div>
  );
}

export default Sidebar;