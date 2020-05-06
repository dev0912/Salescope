import React, { useState } from 'react'
import PropTypes from 'prop-types'

const CheckButton = ({ title }) => {
	const [status, setStatus] = useState(false);

	function handleStatus() {
		setStatus(!status)
	}

	return (
		<button className="button is-primary" onClick={handleStatus}>
			{ title }
			{status && (
				<span className="checkmark">
					*
				</span>
			)}
		</button>
	)
}

CheckButton.propTypes = {
	title: PropTypes.string
}

export default CheckButton;