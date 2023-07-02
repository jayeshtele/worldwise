import React from "react";
import { NavLink } from "react-router-dom";
import PageNav from "../components/PageNav";

export default function Homepage() {
  return (
    <div>
      <PageNav />
      <h1>Worldwise</h1>
      <NavLink to="app">Go to App</NavLink>
    </div>
  );
}
