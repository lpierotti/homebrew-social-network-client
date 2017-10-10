import React from 'react'
var DateTimeField = require('react-bootstrap-datetimepicker');

class EventForm extends React.Component {

	constructor() {
		super()
		this.state = {

		}
	}


	render() {
		return (
			<div> 
				<Form>
					<Form.Input name='name' type='text' onChange={this.handleChange}/>
					<Form.Input name='description' type='text' onChange={this.handleChange}/>
					<Form.Input name='number' type='text' onChange={this.handleChange}/>
					<Form.Input name='street' type='text' onChange={this.handleChange}/>
					<Form.Input name='city' type='text' onChange={this.handleChange}/>
					<Form.Input name='state' type='text' onChange={this.handleChange}/>
					<DateTimeField />
				</Form>
			</div>

		)
	}
}


export default EventForm