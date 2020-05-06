import React from 'react'
import classNames from 'classnames'

import './index.scss'

const SubContentHeader = ({ icon, title, add_new }) => {
  return (
    <div className="subcontent-header--wrapper">
      <div className="subcontent-header">
        <div className={classNames('header--logo', title)}>
          {  icon }
        </div>
        <h3>{ title }</h3>
      </div>

      {add_new && (
        <div className="btn-create-new">
          { add_new }
        </div>
      )}
      
    </div>
  )
}

export default SubContentHeader