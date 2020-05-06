import React from 'react'
import classNames from 'classnames'

import './index.scss'

const CardHeader = ({ title, is_border, param }) => {
  return (
    <div className={classNames('card-header', { 'is-border': is_border })}>
      <div className="heading--wrapper">
        <div className="avatar"></div>
        <div className="title">
          <h3>{title}</h3>
        </div>
      </div>
      {param && (
        <div className="param">{ param }</div>
      )}
    </div>
  )
}

export default CardHeader
