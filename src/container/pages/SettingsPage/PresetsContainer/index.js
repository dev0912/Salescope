import React, { useState } from 'react'

import CardHeader from '../../../components/Card/CardHeader'
import SubSideBarContent from '../../../components/Sidebar/SubSideBarContent'
import IconPresets from '../../../components/Icons/IconPresets'
import SubContentHeader from '../../../components/Sidebar/SubSideBarContent/SubContentHeader'
import CreatePresetsButton from '../../../components/Buttons/CreatePresetsButton'
import PresetsCardItem from '../PresetsCardItem'
import PresetEditableItem from '../../../components/PresetEditableItem'

import PresetsSave from '../../../components/Buttons/Submit/PresetsSave'
import ModalCreatePreset from '../../../components/Modals/ModalCreatePreset'

import '../index.scss'

const PresetsContainer = ({ match }) => {
	// console.log('match: ', match.path)
	const presetTypes = [
		'Persona',
		'Pain Point',
		'Pricing Plan',
		'Tech Stack'
	]

	const [addNew, setAddNew] = useState(false)

	function openAddNewModal() {
		setAddNew(true)
	}

	function closeAddNewModal() {
		setAddNew(false)
	}

	return (
		<SubSideBarContent
			header={<SubContentHeader icon={<IconPresets/>} title="Presets" add_new={<CreatePresetsButton title="Create new" openAddNewModal={openAddNewModal}/>} />}
			footer={<PresetsSave title="Save"/>}
		>
			<PresetsCardItem header={<CardHeader title="Personas" is_border={0} param="8 (10 max)"/>}>
				<PresetEditableItem title="[Preset]" id={1}/>
				<PresetEditableItem title="[Preset]" id={2}/>
				<PresetEditableItem title="[Preset]" id={3}/>
				<PresetEditableItem title="[Preset]" id={4}/>
				<PresetEditableItem title="[Preset]" id={5}/>
				<PresetEditableItem title="[Preset]" id={6}/>
				<PresetEditableItem title="[Preset]" id={7}/>
				<PresetEditableItem title="[Preset]" id={8}/>
			</PresetsCardItem>

			<PresetsCardItem header={<CardHeader title="Pain Points" is_border={0} param="3 (6 max)"/>}>
				<PresetEditableItem title="[Preset]" id={1}/>
				<PresetEditableItem title="[Preset]" id={2}/>
				<PresetEditableItem title="[Preset]" id={3}/>
			</PresetsCardItem>

			<PresetsCardItem header={<CardHeader title="Pricing Plans" is_border={0} param="3 (4 max)"/>}>
				<PresetEditableItem title="[Preset]" id={1}/>
				<PresetEditableItem title="[Preset]" id={2}/>
				<PresetEditableItem title="[Preset]" id={3}/>
			</PresetsCardItem>

			<PresetsCardItem header={<CardHeader title="Tech Stacks" is_border={0} param="4 (4 max)"/>}>
				<PresetEditableItem title="[Preset]" id={1}/>
				<PresetEditableItem title="[Preset]" id={2}/>
				<PresetEditableItem title="[Preset]" id={3}/>
				<PresetEditableItem title="[Preset]" id={4}/>
			</PresetsCardItem>

			<ModalCreatePreset 
				types={presetTypes}
				addNew={addNew}
				closeAddNewModal={closeAddNewModal}
			/>
		</SubSideBarContent>
	)
}

export default PresetsContainer