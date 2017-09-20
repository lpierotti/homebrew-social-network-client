import React from 'react' 

class IngredientForm extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			amount: '',
			unit: '',
			name: ''
		}
	}

	render() {
		return (
			<div>
				<input type='text' placeholder='Amount'/>
				<input type='text' placeholder='Unit'/>
				<input type='text' placeholder='Name'/>
			</div>
		)
	}
}

export default IngredientForm