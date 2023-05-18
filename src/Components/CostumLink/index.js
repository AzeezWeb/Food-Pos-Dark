import { NavLink } from "react-router-dom";

const CostumLink = ( {children, to, ...props }) => {

  return ( 
      <NavLink to={to}  {...props}  >
        {children}
      </NavLink>
   );
}

export  {CostumLink};