import React from 'react'
import { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom'
import axios from 'axios';
import {API_URL} from '../../../constants';

import ItemUserInfo from './ItemUserInfo'
import Card from '../../components/Card'
import CardHeader from '../../components/Card/CardHeader'
import SearchBox from '../../components/SearchBox'
import CheckItemOption from '../../components/Buttons/CheckItemOption'
import AddCheckItemOption from '../../components/Buttons/AddCheckItemOption'

import SelectDropDown from '../../components/DropDown/SelectDropDown'

import SubmitToApi from '../../components/Buttons/Submit/SubmitToApi'

import './index.scss'

const ScopePage = (props) => {
	const [picklistData, setPicklistData] = useState(null);

	const [itemData, setItemData] = useState(null);

	const [personaData, setPersonaData] = useState('');
	const [opporuntityData, setOpporuntityData] = useState('');
	const [nextStepsData, setNextStepsData] = useState('');

	const [painPointsData, setPainPointsData] = useState([]);
	const [techStackData, setTechStackData] = useState([]);

	let itemID = '';
	if (props.match.params.id) {
		itemID = props.match.params.id;
	}

	console.log('ITEMID: ', itemID);

	useEffect(() => {
    const sessionData = sessionStorage.getItem('tk');

    if (typeof sessionData !== 'undefined') {
			// Get Picklist data
			axios.post(`${API_URL}/query`, {
        url: 'services/data/v42.0/ui-api/object-info/Lead/picklist-values/0124R000001lF5a',
        session: sessionData,
        method: 'GET'
      }).then(res => {
        if(res.data) {
          setPicklistData(res.data)
        }
			});

			// Get Item data
      axios.post(`${API_URL}/query`, {
        data: {},
        url: 'services/data/v20.0/sobjects/Lead/' + itemID,
        session: sessionData,
        method: 'GET'
      }).then(res => {
        if(res.data) {
					setItemData(res.data);

					setPersonaData(res.data.Persona__c);
					setOpporuntityData(res.data.Opporuntity__c);
					setNextStepsData(res.data.Next_Steps__c);
					setPainPointsData(res.data.Pain_Points__c.split(';'));
					setTechStackData(res.data.Tech_Stack__c.split(';'));
        }
			});
    }
	}, [])

	function setActiveValue(type, value) {
		switch(type) {
			case 'persona':
				setPersonaData(personaData === value ? '' : value)
				return

			case 'opporuntity':
				setOpporuntityData(opporuntityData === value ? '' : value)
				return

			case 'nextSteps':
				setNextStepsData(nextStepsData === value ? '' : value)
				return

			case 'painPoints':
				if (painPointsData.find(point => point === value)) {
					setPainPointsData(painPointsData.filter(point => point !== value))
				} else {
					setPainPointsData([...painPointsData, value])
				}
				return
			
			case 'techStack':
				if (techStackData.find(point => point === value)) {
					setTechStackData(techStackData.filter(point => point !== value))
				} else {
					setTechStackData([...techStackData, value])
				}
				return

			default:
				return
		}
	}

	function getActivePainPoints(value, painPointsData) {
		return painPointsData.find(point => point === value);
	}

	function getActiveTechStack(value, techStackData) {
		return techStackData.find(point => point === value);
	}

	function submitData() {
		const params = {
			'persona': personaData,
			'opporuntity': opporuntityData,
			'nextSteps': nextStepsData,
			'painPoints': painPointsData
		};
		console.log('params: ', params)
	}

	
	console.log('picklistData: ', picklistData);
	console.log('itemData: ', itemData);

	return (
		<div className="scope--wrapper">
			<Card>
				<SearchBox />
			</Card>

			<Card>
				<ItemUserInfo />
			</Card>

			<Card>
				<div className="card-inner--wrapper">
					<div className="check-items--wrapper column-left">
						<CardHeader title="Personas" is_border={0} />
						<div className="check-item-option--wrapper">
							{picklistData && itemData && (
								<SelectDropDown 
									lists={picklistData.picklistFieldValues.Persona__c.values} 
									activedVal={personaData} 
									setActiveValue={(value) => setActiveValue('persona', value)}
								/>
							)}
						</div>
					</div>

					<div className="check-items--wrapper column-left">
						<CardHeader title="Opporuntity" is_border={0} />
						<div className="check-item-option--wrapper">
							{picklistData && itemData && (
								<SelectDropDown 
									lists={picklistData.picklistFieldValues.Opporuntity__c.values} 
									activedVal={opporuntityData} 
									setActiveValue={(value) => setActiveValue('opporuntity', value)}
								/>
							)}
						</div>
					</div>

					<div className="check-items--wrapper column-right">
						<CardHeader title="Next Step" is_border={0} />
						<div className="check-item-option--wrapper">
								{picklistData && itemData && (
									<SelectDropDown 
										lists={picklistData.picklistFieldValues.Next_Steps__c.values} 
										activedVal={nextStepsData} 
										setActiveValue={(value) => setActiveValue('nextSteps', value)}
									/>
								)}
						</div>
					</div>
				</div>
			</Card>

			{/* <Card header={<CardHeader title="Personas" is_border={!0} />}>
				<div className="check-items--wrapper">
					{picklistData && itemData && picklistData.picklistFieldValues.Persona__c.values.map((item, index) => (
						<CheckItemOption
							key={index}
							data={item}
							isActive={item.value === personaData}
							setActiveValue={(value) => setActiveValue('persona', value)}
						/>
					))}

					{picklistData && itemData && (
						<SelectDropDown 
							lists={picklistData.picklistFieldValues.Persona__c.values} 
							activedVal={personaData} 
							setActiveValue={(value) => setActiveValue('persona', value)}
						/>
					)}
					
				</div>
			</Card> */}

			<Card header={<CardHeader title="Pain Points" is_border={!0} />}>
				<div className="check-items--wrapper">
					{picklistData && itemData && picklistData.picklistFieldValues.Pain_Points__c.values.map((item, index) => (
						<CheckItemOption
							key={index}
							data={item}
							isActive={getActivePainPoints(item.value, painPointsData)}
							setActiveValue={(value) => setActiveValue('painPoints', value)}
						/>
					))}
				</div>
			</Card>

			<Card header={<CardHeader title="Tech Stack" is_border={!0} />}>
				<div className="check-items--wrapper">
						{picklistData && itemData && picklistData.picklistFieldValues.Tech_Stack__c.values.map((item, index) => (
							<CheckItemOption
								key={index}
								data={item}
								isActive={getActiveTechStack(item.value, techStackData)}
								setActiveValue={(value) => setActiveValue('techStack', value)}
							/>
						))}
				</div>
			</Card>

			<SubmitToApi title="SUBMIT TO SALSEFORCE" submitData={submitData} />
		</div>
	)
}

export default withRouter(ScopePage);
