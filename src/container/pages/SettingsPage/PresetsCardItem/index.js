import React from 'react'
import './index.scss'

const PresetsCardItem = ({ header, footer, children }) => {
  return (
    <div className="presets-card-item">
      { header }
      <div className="card-item--content">
        { children }
      </div>
      { footer }
    </div>
  )
}

export default PresetsCardItem