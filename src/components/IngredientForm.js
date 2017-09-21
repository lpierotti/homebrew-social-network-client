import React from 'react' 

class IngredientForm extends React.Component {

	handleChange = (event) => {
		switch (event.target.name) {
			case 'amount':
				this.props.changeIngredient(this.props.data.id, 'amount', event.target.value)
				break;
			case 'unit':
				this.props.changeIngredient(this.props.data.id, 'unit', event.target.value)
				break;
			case 'name':
				this.props.changeIngredient(this.props.data.id, 'name', event.target.value)
				break;
			default:
				break;
		}
	}

	handleClick = (event) => {
		event.preventDefault()
		this.props.addIngredient(this.props.data)
		
	}

	handleDelete = (event) => {
		event.preventDefault()
		this.props.removeIngredient(this.props.data)
	}

	render() {
		if (this.props.data.submitted) {
			return (
				<div>
					<p>{this.props.data.amount}</p>
					<p>{this.props.data.unit}</p>
					<p>{this.props.data.name}</p>
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