import React from 'react'
import SubSideBarContent from '../../../components/Sidebar/SubSideBarContent'
import IconAccount from '../../../components/Icons/IconAccount'
import SubContentHeader from '../../../components/Sidebar/SubSideBarContent/SubContentHeader'
import AccountPreference from '../AccountPreference'

import '../index.scss'

const AccountContainer = () => (
	<SubSideBarContent header={ <SubContentHeader icon={ <IconAccount /> } title="Account" /> }>
		<AccountPreference username="Wesley Kunze" useremail="wesley@salescope.com" />
	</SubSideBarContent>
)

export default AccountContainer