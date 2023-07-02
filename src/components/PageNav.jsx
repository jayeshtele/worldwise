import React from "react";
import { NavLink } from "react-router-dom";
import style from "./PageNav.module.css";

export default function PageNav() {
  return (
    <nav>
      <ul className={style.nav}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/products">Product</NavLink>
        </li>
        <li>
          <NavLink to="/pricing">Pricing</NavLink>
        </li>
      </ul>
    </nav>
  );
}
