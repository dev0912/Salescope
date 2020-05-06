import React from 'react'

import './index.scss'

const SelectDropDown = ({ lists }) => {
  const Lists = [
    "Premium", "Premium 1", "Premium 2", "Premium 3", "Premium 4", "Premium 5"
  ]

  return (
    <div className="field select-wrapper">
      <div className="select">
        <select>
          { Lists.map((r, index) => (<option key={index}>{r}</option>)) }
        </select>
      </div>
    </div>
  )
}

export default SelectDropDown
