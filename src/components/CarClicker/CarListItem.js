import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

const CarListItem = ({ id, name, clickCount }) => {
  return (
    <NavLink
      to={`/${id}`}
      className="list-group-item list-group-item-action d-flex justify-content-between align-items-center "
    >
      <span>{name}</span>
      <span className="badge rounded-pill bg-secondary">{clickCount}</span>
    </NavLink>
  )
}

CarListItem.propTypes = {
  name: PropTypes.string.isRequired,
  clickCount: PropTypes.number.isRequired,
}

export default CarListItem
