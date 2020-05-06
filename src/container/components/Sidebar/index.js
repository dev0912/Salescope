import React from 'react'

import { Link, useLocation } from 'react-router-dom'

import SideBarLogo  from '../SideBarLogo'
import IconScope  from '../Icons/IconScope'
import IconHistory from '../Icons/IconHistory'
import IconSettings from '../Icons/IconSettings'
import IconToggle from '../Icons/IconToggle'
import './index.scss'

const MenuItem = ({ path, icon, title }, index) => {
  const currentLocation = useLocation();

  let className = 'inhert';
  if (path.includes(currentLocation.pathname)) {
    className = 'is-active';
  }

  return (
    <Link to={path[0]} className={className} key={index}>
      <div className="ss-menu--list--inner">
        {icon}<span className="menu-title">{title}</span>
      </div>
    </Link>
  )
}

const menuItems = [
  { path: ['/'], icon: <IconScope/>, title: 'Scope Page' },
  { path: ['/call-history'], icon: <IconHistory/>, title: 'Call History Page' },
  { path: ['/settings/presets', '/settings/integrations', '/settings/account'], icon: <IconSettings/>, title: 'Settings Page'},
]

const Sidebar = (params) => {
  const [collapsed, setCollapsed] = React.useState(true)

  function handleCLick() {
    setCollapsed(!collapsed)
    params.func();
  }

  return (
    <aside className="menu ss-sidebar">
      <SideBarLogo />
      
      <div className="menu-list--wrapper">
        <ul className="menu-list ss-menu--list">
          {menuItems.map(MenuItem)}
        </ul>
      </div>

      <div className="btn-toggle-wrapper">
        <button className="btn-toggle collapse-button" onClick={handleCLick}>
          <div className="icon-wrapper"><IconToggle/></div>
          <span className="btn-title">Toogle sidebar</span>
        </button>
      </div>
    </aside>
  )
}

export default Sidebar
