import React from 'react'
import IconSearch from '../Icons/IconSearch'
import './index.scss'

const SearchBox = () => {
  return (
    <div className="control ss-search">
      <input className="input" type="text" placeholder="Search"/>
      <div className="icon-search-wrapper"><IconSearch /></div>
    </div>
  )
}

export default SearchBox
