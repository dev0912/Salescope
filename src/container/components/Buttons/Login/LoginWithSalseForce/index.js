import React from 'react'
import imgUrl from '../../../../../assets/salseforce-btn.png'
import './index.scss'

const LoginWithSalseForce = ({ title, handleLogin }) => {
  return (
    <div className="btn-sf-login--wrapper">
      <button className="button" onClick={handleLogin}>
        <span><img src={imgUrl} alt={title}/></span>{title}
      </button>
    </div>
  )
}

export default LoginWithSalseForce
