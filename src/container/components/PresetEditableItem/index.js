import React from 'react'
import IconEdit from '../Icons/IconEdit'
import IconDelete from '../Icons/IconDelete'

import './index.scss'

const PresetEditableItem = ({ title, id }) => {
  function Edit (id) {
    // console.log("This element is able to edit!");
  }

  function Remove (id) {
    // console.log("Are you sure to delete this element?");
  }

  return (
    <div className="preset-item--wrapper">
      { title !== '' && (
        <div className="item-title">
          <span>{ title }</span>
        </div>
      )}
      
      <div className="icon-wrapper icon-edit" onClick={Edit(id)}><IconEdit /></div>
      <div className="icon-wrapper icon-remove" onClick={Remove(id)}><IconDelete /></div>
    </div>
  )
}

export default PresetEditableItem