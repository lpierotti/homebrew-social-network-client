import React from 'react' 

class IngredientForm extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			amount: '',
			unit: '',
			name: '',
			submitted: false
		}
	}

	handleChange = (event) => {
		switch (event.target.name) {
			case 'amount':
				this.setState({amount: event.target.value, submitted: false});
				break;
			case 'unit':
				this.setState({unit: event.target.value, submitted: false});
				break;
			case 'name':
				this.setState({name: event.target.value, submitted: false});
				break;
			default:
				break;
		}
	}

	handleClick = (event) => {
		event.preventDefault()
	console.log("handleClick",this.state)
		this.setState({submitted: true})
		this.props.addIngredient(this.state)
		
	}

	handleDelete = (event) => {
		event.preventDefault()
		console.log("In Handle delete",this.props)
		this.props.removeIngredient(this.state, this.props.id)
	}

	render() {
		if (this.state.submitted) {
			return (
				<div>
					<p>{this.state.amount}</p>
					<p>{this.state.unit}</p>
					<p>{this.state.name}</p>
					<button onClick={this.handleDelete}>Delete</button>
				</div>
			)
		} else {
			return (
				<div>
					<input name='amount' onChange={this.handleChange} type='text' placeholder='Amount'/>
					<input name='unit' onChange={this.handleChange} type='text' placeholder='Unit'/>
					<input name='name' onChange={this.handleChange} type='text' placeholder='Name'/>
					<button onClick={this.handleClick}>Add</button>
				</div>
			)
		}
	}
}

export default IngredientForm