import React from 'react'
import Card from '../../components/Card'
import SearchBox from '../../components/SearchBox'
import UserHistoryRow from '../../components/UserHistoryRow'

import './index.scss'

const CallHistoryPage = () => {
  const UsersData = ({item}, index) => ( <UserHistoryRow user={item} key={index}/> )

  const users = [
    {
      item: {
        name: 'Max Voskresenskyy', persona: 'Decision Maker', pain_points: 'Growing Sales Stack, Distri...', opportunity: 'Premium, 100+ Users', timeline: 'Q4 2020', tech_stack: 'Intercom, Outreach, Discove..'
      }
    },
    {
      item: {
        name: '[name]', persona: 'influencer', pain_points: 'Distributed Team, [pain point #2]...', opportunity: 'Pro, 500-100 Users', timeline: 'Q3 2020', tech_stack: '[Outreach, sales tool #2, Competition]...'
      }
    },
    {
      item: {
        name: '[name]', persona: 'label', pain_points: '[pain point, pain point]', opportunity: '[plan, users]', timeline: '[Quarter, Year]', tech_stack: '[Sales Tools, Competition]'
      }
    },
    {
      item: {
        name: '[name]', persona: 'label', pain_points: '[pain point, pain point]', opportunity: '[plan, users]', timeline: '[Quarter, Year]', tech_stack: '[Sales Tools, Competition]'
      }
    },
    {
      item: {
        name: '[name]', persona: 'label', pain_points: '[pain point, pain point]', opportunity: '[plan, users]', timeline: '[Quarter, Year]', tech_stack: '[Sales Tools, Competition]'
      }
    },
    {
      item: {
        name: '[name]', persona: 'label', pain_points: '[pain point, pain point]', opportunity: '[plan, users]', timeline: '[Quarter, Year]', tech_stack: '[Sales Tools, Competition]'
      }
    },
    {
      item: {
        name: '[name]', persona: 'label', pain_points: '[pain point, pain point]', opportunity: '[plan, users]', timeline: '[Quarter, Year]', tech_stack: '[Sales Tools, Competition]'
      }
    },
    {
      item: {
        name: '[name]', persona: 'label', pain_points: '[pain point, pain point]', opportunity: '[plan, users]', timeline: '[Quarter, Year]', tech_stack: '[Sales Tools, Competition]'
      }
    },
    {
      item: {
        name: '[name]', persona: 'label', pain_points: '[pain point, pain point]', opportunity: '[plan, users]', timeline: '[Quarter, Year]', tech_stack: '[Sales Tools, Competition]'
      }
    },
    {
      item: {
        name: '[name]', persona: 'label', pain_points: '[pain point, pain point]', opportunity: '[plan, users]', timeline: '[Quarter, Year]', tech_stack: '[Sales Tools, Competition]'
      }
    }
  ]

  return (
    <div className="scope--wrapper">
        <Card>
          <SearchBox />
        </Card>
        <Card>
          <div className="table--wrapper">
            <div className="table-container">
              <table className="table is-fullwidth">
                <thead>
                  <tr>
                    <th><div className="head-cell-wrapper">Name</div></th>
                    <th><div className="head-cell-wrapper">Persona</div></th>
                    <th><div className="head-cell-wrapper">Pain Points</div></th>
                    <th><div className="head-cell-wrapper">Opportunity</div></th>
                    <th><div className="head-cell-wrapper">Timeline</div></th>
                    <th><div className="head-cell-wrapper">Tech Stack</div></th>
                  </tr>
                </thead>
                <tbody>
                  { users.map(UsersData) }
                </tbody>
              </table>
            </div>
          </div>
        </Card>
    </div>
  )
}

export default CallHistoryPage
