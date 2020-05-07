import React from 'react'

import ItemUserInfo from './ItemUserInfo'
import Card from '../../components/Card'
import CardHeader from '../../components/Card/CardHeader'
import SearchBox from '../../components/SearchBox'
import CheckItemOption from '../../components/Buttons/CheckItemOption'
import AddCheckItemOption from '../../components/Buttons/AddCheckItemOption'

import SelectDropDown from '../../components/DropDown/SelectDropDown'

import SubmitToApi from '../../components/Buttons/Submit/SubmitToApi'

import './index.scss'

const ScopePage = () => (
	<div className="scope--wrapper">
			<Card>
				<SearchBox />
			</Card>

			<Card>
				<ItemUserInfo />
			</Card>

			<Card header={ <CardHeader title="Personas" is_border={!0} /> }>
				<div className="check-items--wrapper">
					<CheckItemOption title="Decision Maker" />
					<CheckItemOption title="Influencer" />
					<CheckItemOption title="User" />
					<CheckItemOption title="[label]" />
					<CheckItemOption title="[label]" />
					<CheckItemOption title="[label]" />
					<CheckItemOption title="[label]" />
				</div>
			</Card>

			<Card header={ <CardHeader title="Pain Points" is_border={!0} /> }>
				<div className="check-items--wrapper">
					<CheckItemOption title="Growing Sales Stack" />
					<CheckItemOption title="Distributed Team" />
					<CheckItemOption title="Pain Point 3" />
					<AddCheckItemOption title="+ New Pain Point" />
				</div>
			</Card>

			<Card>
				<div className="card-inner--wrapper">
					<div className="check-items--wrapper column-left">
						<CardHeader title="Opportunity" is_border={0} />
						<div className="check-item-option--wrapper">
							<SelectDropDown lists="" />
							<CheckItemOption title="0-50 users" />
							<CheckItemOption title="50-100 users" />
							<CheckItemOption title="100+ users" />
						</div>
					</div>
					<div className="check-items--wrapper column-right">
					<CardHeader title="Next Step" is_border={0} />
						<div className="check-item-option--wrapper">
							<CheckItemOption title="Check In" />
							<CheckItemOption title="Q4 2020" />
							<CheckItemOption title="Date/mailTime" />
						</div>	
					</div>
				</div>
			</Card>

			<Card header={ <CardHeader title="Tech Stack" is_border={!0} /> }>
				<div className="check-items--wrapper">
					<CheckItemOption title="Intercom" />
					<CheckItemOption title="Discover Org" />
					<CheckItemOption title="Outreach" />
					<CheckItemOption title="Seismic" />
					<AddCheckItemOption title="+ Sales Tool" />
					<AddCheckItemOption title="+ Competitor" />
				</div>
			</Card>
		
			<SubmitToApi title="SUBMIT TO SALSEFORCE" />
	</div>
)

export default ScopePage
