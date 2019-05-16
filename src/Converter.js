import React, { Component } from 'react';
import {Temp} from './Temp';

function toFah(celsius) {
	return (celsius * 9 /5) + 32;
}

function toCel(fahrenheit) {
	return (fahrenheit - 32) *5 /9;
}

function tryConvert(temp, funcName) {
	const tempData = parseFloat(temp);
	if (Number.isNaN(tempData)) {
		return '';
	}

	const tempValue = funcName(tempData);
	const finalTemp = Math.round(tempValue * 1000) / 1000;
	return finalTemp.toString();
}

class Converter extends Component {
	constructor(props) {
		super(props);
		this.onChangeC = this.onChangeC.bind(this);
		this.onChangeF = this.onChangeF.bind(this);
		this.state = {temp: '', unit: 'c'};
	}

	onChangeC(temp) {
		this.setState({temp, unit: 'c'});
	}	

	onChangeF(temp) {
		this.setState({temp, unit: 'f'});
	}

	render() {
		const {unit, temp} = this.state;
		
		let celsius=unit;
		if(unit==='f') {
			celsius=tryConvert(temp, toCel)
		} else {
			celsius=temp;
		}
		let fahrenheit=unit;
		if(unit==='c')	{
			fahrenheit=tryConvert(temp, toFah)
		} else {
			fahrenheit=temp;
		}
	return (
			<div>
				<Temp
					unit="c"
					temp={celsius}
					onTemp={this.onChangeC} 
				/>

				<Temp
					unit="f"
					temp={fahrenheit}
					onTemp={this.onChangeF} 
				/>
			</div>
		);
	}
}

export default Converter;
