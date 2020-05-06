import React, { useState } from 'react'
import PropTypes from 'prop-types'

const AddCheckItemOption = ({ title }) => {
	const [status, setStatus] = useState(false)

	function handleStatus() {
		setStatus(!status)
	}

	return (
    <button className="check-item--option btn-add" onClick={handleStatus}>
			{ title }
		</button>
	)
}

AddCheckItemOption.propTypes = {
	title: PropTypes.string
}

export default AddCheckItemOption