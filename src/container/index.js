import React from 'react'
import classNames from 'classnames'

import Sidebar from './components/Sidebar'

import '../assets/variables.scss'
import '../assets/global.scss'

const Container = ({ children }) => {
  const [collapsed, setCollapsed] = React.useState(false)

  function changeSidebar() {
    setCollapsed(!collapsed)  
  }

  return (
    <section className={classNames('section', { 'collapsed': collapsed })}>
      <div className="content--wrapper is--full">
        <div className="page-content--wrapper">
          { children }
        </div>
      </div>

      <div className="column-sidebar sidebar-wrapper">
        <Sidebar func={changeSidebar}/>
      </div>
    </section>
  )
}

export default Container
