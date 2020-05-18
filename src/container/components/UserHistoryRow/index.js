import React from 'react'
import CardHeader from '../../components/Card/CardHeader'
import { Redirect } from 'react-router-dom'
import './index.scss'

const UserHistoryRow = ({ item, onDetails}) => (
  
  <tr onClick={() => onDetails(item.Id)}>
    <td><div className="cell-wrapper cell-name">{<CardHeader title={item.Name} />}</div></td>
    {/* <td><div className="cell-wrapper list-style">Decision Marker</div></td>
    <td><div className="cell-wrapper">Growing Sales Stack</div></td>
    <td><div className="cell-wrapper">Premium, 100+ Users</div></td>
    <td><div className="cell-wrapper">Q4 2020</div></td>
    <td><div className="cell-wrapper">Intercom, Outreach</div></td> */}
  </tr>
)

export default UserHistoryRow