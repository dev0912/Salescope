import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import RoundCheckBox from './RoundCheckBox'
import './index.scss'

const CheckItemOption = ({ data, isActive, setActiveValue }) => {
	function handleStatus() {
		setActiveValue(data.value)
	}

	return (
    <button className={classNames('check-item--option', { 'is-checked': isActive })} onClick={handleStatus}>
			{ data.label }
			{isActive && (
				<span className="checkmark">
          <RoundCheckBox />
				</span>
			)}
		</button>
	)
}

CheckItemOption.propTypes = {
	setActiveValue: PropTypes.func,
	data: PropTypes.object
}

export default CheckItemOption