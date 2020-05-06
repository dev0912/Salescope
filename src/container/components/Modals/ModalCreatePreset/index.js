import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import CardHeader from '../../Card/CardHeader'
import ModalSelect from '../../DropDown/ModalSelect'
import ModalOptionLabel from '../ModalOptionLabel'
import ModalInputTxt from '../ModalInputTxt'
import './index.scss'

const ModalCreatePreset = ({types, addNew, closeAddNewModal}) => {

  function handleState() {
    closeAddNewModal()
  }

  return (
    <div className={classNames("modal", { 'is-active': addNew })}>
      <div className="modal-background"></div>
      <div className="modal-preset-card">
        <header className="m-head">
          <div className="m-title"><CardHeader title="Create Preset"/></div>
          <button className="delete" aria-label="close" onClick={handleState}></button>
        </header>

        <section className="m-body">
          <ModalSelect 
          types={types}
          label={<ModalOptionLabel title="Type"/>}
          />
          <ModalInputTxt label={<ModalOptionLabel title="Name"/>} placeholder="ex. Decision Maker"/>
          <ModalInputTxt label={<ModalOptionLabel title="Ranking"/>} placeholder="1 - 10"/>
        </section>

        <footer className="m-foot">
          <button className="m-btn btn-create-preset">Create Preset</button>
        </footer>
      </div>
    </div>
  )
}

ModalCreatePreset.propTypes = {
  types: PropTypes.array,
  addNew: PropTypes.bool,
	closeAddNewModal: PropTypes.func.isRequired
}

export default ModalCreatePreset