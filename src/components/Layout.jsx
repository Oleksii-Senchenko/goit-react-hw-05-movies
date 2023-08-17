import React from "react";
import { NavLink } from "react-router-dom";
const Layout = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink>Home</NavLink>
        </li>
        <li>
          <NavLink>Movies</NavLink>
        </li>
       
      </ul>
    </div>
  );
};

export default Layout;
