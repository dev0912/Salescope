import React from 'react'
import './index.scss'

const SubSideBarContent = ({ header, footer, children }) => {
  return (
    <div className="sub-sidebar-content">
      {header}
      <div className="sub-sidebar-body--content">
        {children}
      </div>
      {footer}
    </div>
  )
}

export default SubSideBarContent
