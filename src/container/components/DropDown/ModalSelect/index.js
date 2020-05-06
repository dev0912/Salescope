import React from 'react'

import IconArrowDown from '../../Icons/IconArrowDown'
import './index.scss'

const ModalSelect = ({types, label}) => {
  return (
    <div className="m-option--wrapper">
      {label}
      <div className="select-wrapper">
        <select>
          { types.map((r, index) => (<option key={index}>{r}</option>)) }
        </select>
        <IconArrowDown />
      </div>
    </div>
  )
}

export default ModalSelect