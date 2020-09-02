import React from 'react'
import {
  NavLink,
} from "react-router-dom";
import '../styles/NavBar.css'

const NavList = () => {
  return (
    <div className="NavBar">
        <div className="Nav-Routes">
          <nav>
            <ul className="Nav-Route-List">
              <li>
                <NavLink to="/login">Log In </NavLink>
              </li>
              <li>
                <NavLink to="/signup">Sign Up</NavLink>
              </li>
              <li>
                <NavLink to="/cookiecards"> My Cards </NavLink>
              </li>
              <li>
                <NavLink to="/cookiecards/new"> Create cookie card  </NavLink>
              </li>
            </ul>
          </nav>
        </div>
    </div>
  )
}
// this should b navbar
export default NavList;
