import React from 'react'

import SubSideBarContent from '../../../components/Sidebar/SubSideBarContent'
import IconIntegrations from '../../../components/Icons/IconIntegrations'
import SubContentHeader from '../../../components/Sidebar/SubSideBarContent/SubContentHeader'
import IntegrationItem from '../../../components/Sidebar/SubSideBarContent/IntegrationItem'

import '../index.scss'

const IntegrationsContainer = () => (
	<SubSideBarContent header={ <SubContentHeader icon={ <IconIntegrations /> } title="Integrations" /> }>
		<div className="integrations-wrapper">
			<div className="heading-title"><h4>Your integrations</h4></div>
			<div className="integration-items">
				<IntegrationItem brand_name="salseforce" title="Salseforce" description="Sync Salesforce for a fast, reliable and powerful integration between your two databases." connection={1}/>
				<IntegrationItem brand_name="wordpress" title="" description="" connection={0}/>
				<IntegrationItem brand_name="wordpress" title="" description="" connection={0}/>
				<IntegrationItem brand_name="wordpress" title="" description="" connection={0}/>
				<IntegrationItem brand_name="wordpress" title="" description="" connection={0}/>
			</div>
		</div>
	</SubSideBarContent>
)

export default IntegrationsContainer