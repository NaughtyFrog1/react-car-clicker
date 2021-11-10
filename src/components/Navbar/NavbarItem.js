import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

const NavbarItem = ({ children, to, ...rest }) => {
  return (
    <li className="nav-item">
      <NavLink className="nav-link" activeClassName="active" to={to} {...rest}>
        {children}
      </NavLink>
    </li>
  )
}

NavbarItem.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default NavbarItem
