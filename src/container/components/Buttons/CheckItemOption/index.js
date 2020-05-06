import React, { useState } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import RoundCheckBox from './RoundCheckBox'
import './index.scss'

const CheckItemOption = ({ title }) => {
	const [status, setStatus] = useState(false)

	function handleStatus() {
		setStatus(!status)
	}

	return (
    <button className={classNames('check-item--option', { 'is-checked': status })} onClick={handleStatus}>
			{ title }
			{status && (
				<span className="checkmark">
          <RoundCheckBox />
				</span>
			)}
		</button>
	)
}

CheckItemOption.propTypes = {
	title: PropTypes.string
}

export default CheckItemOption