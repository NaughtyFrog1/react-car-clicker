import React from 'react'
import PropTypes from 'prop-types'

const CarItem = ({ name, clickCount }) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <span>{name}</span>
      <span className="badge rounded-pill bg-secondary">{clickCount}</span>
    </li>
  )
}

CarItem.propTypes = {
  name: PropTypes.string.isRequired,
  clickCount: PropTypes.number.isRequired,
}

export default CarItem
