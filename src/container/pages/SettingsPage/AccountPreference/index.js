import React from 'react'
import IconEdit from '../../../components/Icons/IconEdit'
import './index.scss'

const AccountPreference = ({ username, useremail }) => {
  return (
    <div className="account-preference--wrapper">
      <div className="account-preference--inner">
        <div className="user-avatar">
          <span className="avatar-img"></span>
          <div className="btn-avata-edit"><IconEdit /></div>
        </div>
        <div className="user-infos">
          <h3 className="user-name">{ username }</h3>
          <div className="user-email">{ useremail }</div>
        </div>
      </div>
      <div className="account-btn--wrapper">
        <div className="account-btn--inner">
          <button className="btn-account account-logout">LOG OUT</button>
          <button className="btn-account account-delete">DELETE ACCOUNT</button>
        </div>  
      </div>
    </div>
  )
}

export default AccountPreference