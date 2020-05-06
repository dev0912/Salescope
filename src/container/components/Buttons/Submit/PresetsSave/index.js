import React from 'react'
import './index.scss'


const PresetsSave = ({ title }) => {
  function Submit () {
    console.log("SUBMIT!!!!!!");
  }

  return (
    <div className="presets-submit--wrapper">
      <button className="button btn-save" onClick={Submit}>
        { title }
      </button>
    </div>
  )
}

export default PresetsSave