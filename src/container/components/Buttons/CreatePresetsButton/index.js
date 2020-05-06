import React from 'react'
import PropTypes from 'prop-types'

const CreatePresetsButton = ({ title, openAddNewModal }) => {
	function handleStatus() {
		openAddNewModal()
	}

	return (
    <button className="btn-new-create" onClick={handleStatus}>
			{ title }
		</button>
	)
}

CreatePresetsButton.propTypes = {
	title: PropTypes.string,
	openAddNewModal: PropTypes.func.isRequired
}

export default CreatePresetsButton