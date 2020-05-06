import React from 'react'
import classNames from 'classnames'

import Card from '../../components/Card'
import SearchBox from '../../components/SearchBox'

import SubSideBar from '../../components/Sidebar/SubSideBar'
import SubMenuItem from '../../components/Sidebar/SubSideBar/SubMenuItem'

import IconPresets from '../../components/Icons/IconPresets'
import IconIntegrations from '../../components/Icons/IconIntegrations'
import IconAccount from '../../components/Icons/IconAccount'

import './index.scss'

const SettingsPage = (props) => {
	const page_query = props.location.pathname.split('/').pop();

	return (
		<div className="settings--wrapper">
			<Card>
				<SearchBox />
			</Card>

			<div className={classNames("page-content", page_query)}>
				<SubSideBar>
					<SubMenuItem icon={ <IconPresets /> }
						path="/settings/presets" title="Presets" subtitle="Add or remove presets" active={page_query === 'presets'}
					/>
					<SubMenuItem icon={ <IconIntegrations /> } path="/settings/integrations"
						title="Integrations" subtitle="Add or remove integrations" active={page_query === 'integrations'}
					/>
					<SubMenuItem icon={ <IconAccount /> } path="/settings/account"
						title="Account"subtitle="Your account preferences" active={page_query === 'account'}
					/>
				</SubSideBar>

				{props.children}
			</div>
	</div>
	)
}

export default SettingsPage