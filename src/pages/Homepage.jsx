import React from "react";
import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <div>
      <h1>Worldwise</h1>

      <Link to="/pricing">Pricing</Link>
    </div>
  );
}
