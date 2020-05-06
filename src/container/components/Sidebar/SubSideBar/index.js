import React from 'react'
import './index.scss'

const SubSideBar = ({ header, footer, children }) => {
  return (
    <div className="sub-sidebar">
      {header}
      <div className="sub-sidebar-items">
        {children}
      </div>
      {footer}
    </div>
  )
}

export default SubSideBar
