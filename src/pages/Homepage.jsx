import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Homepage() {
  return (
    <div>
      <h1>Worldwise</h1>
      <NavLink to="app">Go to App</NavLink>
    </div>
  );
}
