import React from 'react'
import PropTypes from 'prop-types'

import './index.scss'

const SelectDropDown = ({ lists, activedVal, setActiveValue }) => {
  
  function handleStatus(event) {
    setActiveValue(event.target.value)
  }
  
  return (
    <div className="field select-wrapper">
      <div className="select">
        <select onChange={handleStatus} value={activedVal}>
          { lists.map((r, index) => (<option key={index} value={r.value}>{r.value}</option>)) }
        </select>
      </div>
    </div>
  )
}

SelectDropDown.propTypes = {
  lists: PropTypes.array,
  activedVal: PropTypes.string,
  setActiveValue: PropTypes.func
}

export default SelectDropDown
