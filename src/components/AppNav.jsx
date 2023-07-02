import React from "react";
import style from "../components/AppNav.module.css"
import { NavLink } from "react-router-dom";

export default function AppNav() {
  return (
    <div>
      <nav className={style.nav}>
        <ul>
          <li>
            <NavLink to="cities">Cities</NavLink>
          </li>
          <li>
            <NavLink to="countries">Countries</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
