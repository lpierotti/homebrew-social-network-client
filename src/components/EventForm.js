import React from 'react'
import { Form, Label } from 'semantic-ui-react'
import DatePicker from 'react-datepicker';
import moment from 'moment';
import { connect } from 'react-redux'
import { createEvent } from '../actions/events'
import Select from 'react-select'

import 'react-datepicker/dist/react-datepicker.css';
import 'react-datepicker/dist/react-datepicker-cssmodules.css'


class EventForm extends React.Component {

	constructor() {
		super()
		this.state = {
			name: '',
			description: '',
			number: '',
			street: '',
			city: '',
			state: '',
			start: moment(),
			end: moment(), 
			submitted: false
		}
	}

	handleChange = (event) => {
		this.setState({[event.target.name]: event.target.value})
	}

	handleStartDateChange = (date) => {
		this.setState({start: date})
	}

	handleEndDateChange = (date) => {
		this.setState({end: date})
	}

	handleSelect = (selected) => {
		this.setState({state: selected.value})
	}

	handleSubmit = (event) => {
		event.preventDefault()
		this.props.createEvent({...this.state, id: this.props.id})
		this.setState({submitted: true})
	}

	render() {
		var options = ["AK","AL","AR","AZ","CA","CO","CT","DC","DE","FL","GA","GU","HI","IA","ID", "IL","IN","KS","KY","LA","MA","MD","ME","MH","MI","MN","MO","MS","MT","NC","ND","NE","NH","NJ","NM","NV","NY", "OH","OK","OR","PA","PR","PW","RI","SC","SD","TN","TX","UT","VA","VI","VT","WA","WI","WV","WY"].map(abbreviation => ({value: abbreviation, label: abbreviation}))
		if (this.state.submitted) {
			return <div style={{minHeight: '500px'}}><h3 style={{margin:'auto'}}>{this.state.name} was created</h3></div>
		}
		return (
			<div style={{minHeight: '500px'}}>
				<h2 style={{textAlign: 'center'}}>Create an Event</h2>
				<Form style={{maxWidth: '400px', margin: 'auto'}}onSubmit={this.handleSubmit}>
					<Form.Group>
						<Form.Input placeholder='Name'name='name' type='text' onChange={this.handleChange}/>
						<Form.Input placeholder='Description'name='description' type='text' onChange={this.handleChange}/>
					</Form.Group>
					<Form.Group>
						<Form.Input placeholder='Address Number'name='number' type='text' onChange={this.handleChange}/>
						<Form.Input placeholder='Street'name='street' type='text' onChange={this.handleChange}/>
					</Form.Group>
					<Form.Group>
						<Form.Input placeholder='City'name='city' type='text' onChange={this.handleChange}/>
						<Select 
							options={options}
							onChange={this.handleSelect}
							placeholder={'State'}
						/>
					</Form.Group>
					<Label>Start Time</Label>
					<DatePicker name='start' 
						onChange={this.handleStartDateChange}
						selected={this.state.start}
						showTimeSelect
					    timeIntervals={15}
					    dateFormat="LLL"
					    minDate={moment()}
					/>
					<Label>End Time</Label>
					<DatePicker name='end' 
						onChange={this.handleEndDateChange}
						selected={this.state.end}
						showTimeSelect
					    timeIntervals={15}
					    dateFormat="LLL"
					    minDate={moment()}
					/>
					<Form.Button>Submit</Form.Button>
				</Form>
			</div>

		)
	}
}

function mapDispatchToProps(dispatch) {
	return {
		createEvent: (params) => dispatch(createEvent(params))
	}
}

export default connect(null, mapDispatchToProps)(EventForm)

