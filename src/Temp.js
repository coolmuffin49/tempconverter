import React, { Component } from 'react';

const unitName ={
	c: 'Celsius',
	f: 'Fahrenheit',
}

class Temp extends Component {
	constructor(props) {
		super(props);
		this.onChange = this.onChange.bind(this);
	}

	onChange(e) {
		this.props.onTemp(e.target.value);
	}

	render() {
		const {temp} = this.props;
		const {unit} = this.props;

		return (
			<div className="Temp">
				<h3>Temperature in {unitName[unit]}:</h3>
				<input value={temp} onChange={this.onChange} />
				<span> °{unit}</span>
			</div>
		);
	}
}

export default Temp;