import React from "react"
import { NavLink } from "react-router-dom"

const NavBar = () => {
  return (
    <nav className="navbar navbar-nav navbar-default">
      <NavLink exact to="/" activeClassName="selected">
        Home
      </NavLink>
      <NavLink to="/about" activeClassName="selected">
        About
      </NavLink>
      <NavLink to="/contact" activeClassName="selected">
        Contact
      </NavLink>
      <NavLink to="/career" activeClassName="selected">
        Career
      </NavLink>
      <NavLink to="/blog" activeClassName="selected">
        Blog
      </NavLink>
    </nav>
  )
}

export default NavBar
