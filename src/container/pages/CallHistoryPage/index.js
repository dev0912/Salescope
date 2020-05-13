import React, { useEffect, useState } from 'react';
import axios from 'axios';
import queryString from 'query-string';
import Card from '../../components/Card'
import SearchBox from '../../components/SearchBox'
import UserHistoryRow from '../../components/UserHistoryRow'
import {API_URL} from '../../../constants';

import './index.scss'

const CallHistoryPage = () => {
  const [whoAmI, setWhoAmI] = useState(undefined);
  const [recentItems, setRecentItems] = useState([]);
  console.log('WHO AM I', whoAmI);
  // const UsersData = ({item}, index) => ( <UserHistoryRow user={item} key={index}/> )

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
  
  useEffect(() => {
    if (typeof whoAmI === 'undefined') {
      const params = queryString.parseUrl(window.location.href);

      if (typeof params.query.tk !== 'undefined') {
        sessionStorage.setItem('tk', params.query.tk);
        window.location.href = params.url;
      }

      const sessionData = sessionStorage.getItem('tk');

      // TEST CALL QUERY
      if (typeof sessionData !== 'undefined') {
        axios.post(`${API_URL}/query`, {
          data: {},
          url: 'services/data/v20.0/sobjects/Lead',
          session: sessionData,
          method: 'GET'
        }).then(res => {
          if(res.data && res.data.recentItems) {
            setRecentItems(res.data.recentItems)
            console.log(res.data.recentItems);
          }
        });
      }

      // END TEST

      axios.get(`${API_URL}/auth/whoami`, {
        headers: {
          'Content-Type': 'application/json'
        },
        params: {
          session: sessionData
        }
      }).then(res => {
        console.log('YOU GOT THE DATA', res.data);
        // TODO parse this to redux please
        setWhoAmI(res.data);
      }).catch(err => console.log(err));
    }
  }, []);

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
                  {
                    recentItems.map((item, index) => {
                      return <UserHistoryRow item={item} key={index}/>;
                    })
                  }
                </tbody>
              </table>
            </div>
          </div>
        </Card>
    </div>
  )
}

export default CallHistoryPage
