import React from 'react'

import logoUrl from '../../../assets/logo.png'
import './index.scss'

const SideBarLogo = () => {

	return (
		<div className="logo-wrapper">
      <div className="logo-img"><img src={logoUrl} alt="logo" /></div>
			
			<div className="logo-actived--user">
        <div className="user-avatar">
          <span className="avatar-img"></span>
        </div>

				<div className="user-infos">
					<h3 className="user-name">Wesley Kunze</h3>
					<div className="user-email">wesley@salescope.com</div>
				</div>
			</div>
		</div>
	)
}

export default SideBarLogo