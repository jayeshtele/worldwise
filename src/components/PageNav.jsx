import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function PageNav() {
  return (
    <nav>
      <ul>
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
  )
}