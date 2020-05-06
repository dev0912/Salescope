import React from 'react'
import classNames from 'classnames'

import IconSalesforce from '../../../Icons/IconSalesforce'
import IconWp from '../../../Icons/IconWp'

import './index.scss'

const IntegrationItem = ({ brand_name, title, description, connection }) => {
  return (
    <div className="integration--item">
      <div className="integration--item-inner">
        <div className={classNames('brand-icon', brand_name)}>
          {(brand_name === 'salseforce') && (<IconSalesforce />)}
          {(brand_name === 'wordpress') && (<IconWp />)}
        </div>
        <div className="integration-content">
          <h3>{ title !== '' ? title : '[Title]' }</h3>
          <div className="description">
            <p>{ description !== '' ? description : '[description]' }</p>
          </div>
          <button className={classNames('btn-connection', { 'is-reconnect': connection })}>{ connection ? 'Re-connect' : 'Coming Soon' }</button>          
        </div>
      </div>
    </div>
  )
}

export default IntegrationItem