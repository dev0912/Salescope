import React from 'react'
import classNames from 'classnames'
import { Link } from 'react-router-dom'
import './index.scss'

const SubMenuItem = ({ icon, path, title, subtitle, active }) => {

  return (
    <div className={classNames("sub-menu-item--wrapper", { 'is-active': active })}>
      <Link to={ path } >
        <div className={classNames('icon--wrapper', title)}>
          { icon }
        </div>
        <div className="sub-menu-item--info">
          <h3>{ title }</h3>
          <div className="addtional-title">{ subtitle }</div>
        </div>
      </Link>
    </div>
  )
}

export default SubMenuItem