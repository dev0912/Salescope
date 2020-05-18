import React from 'react'
import imgUrl from '../../../../../assets/salseforce-btn.png'
import './index.scss'

const SubmitToApi = ({ title, submitData }) => {
  return (
    <div className="btn-submit--wrapper">
      <button className="button" onClick={submitData}>
        <span><img src={imgUrl} alt="submit to salseforce"/></span>{title}
      </button>
    </div>
  )
}

export default SubmitToApi
