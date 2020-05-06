import React from 'react'
import './index.scss'

const Card = ({ header, footer, children }) => {
  return (
    <div className="card">
      {header}
      <div className="card-content">
        {children}
      </div>
      {footer}
    </div>
  )
}

export default Card
