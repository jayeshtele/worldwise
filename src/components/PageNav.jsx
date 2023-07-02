import React from 'react'
import { Link } from 'react-router-dom'

export default function PageNav() {
  return (
    <nav>
      <ul>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/products">Product</Link>
        </li>
        <li>
            <Link to="/pricing">Pricing</Link>
        </li>
      </ul>
    </nav>
  )
}