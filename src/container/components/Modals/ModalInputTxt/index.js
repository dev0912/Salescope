import React from 'react'
import './index.scss'

const ModalInputTxt = ({label, placeholder}) => {
  return (
    <div className="m-option--wrapper">
      {label}
      <div className="input-txt-wrapper">
        <input className="input-txt" type="text" placeholder={placeholder} />
      </div>
    </div>
  )
}

export default ModalInputTxt