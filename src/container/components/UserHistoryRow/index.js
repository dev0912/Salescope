import React from 'react'
import CardHeader from '../../components/Card/CardHeader'

import './index.scss'

const UserHistoryRow = ({ user }) => (
  <tr>
    <td><div className="cell-wrapper cell-name">{<CardHeader title={user.name} />}</div></td>
    <td><div className="cell-wrapper list-style">{ user.persona }</div></td>
    <td><div className="cell-wrapper">{ user.pain_points }</div></td>
    <td><div className="cell-wrapper">{ user.opportunity }</div></td>
    <td><div className="cell-wrapper">{ user.timeline }</div></td>
    <td><div className="cell-wrapper">{ user.tech_stack }</div></td>
  </tr>
)

export default UserHistoryRow