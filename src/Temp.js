import React from 'react';

const unitName ={
	c: 'Celsius',
	f: 'Fahrenheit',
}

export function Temp(props) {
	function onChange(e) {
		props.onTemp(e.target.value);
	}

	const temp = props.temp;
	const unit = props.unit;

	return (
		<div className="Temp">
			<h3>Temperature in {unitName[unit]}:</h3>
			<input value={temp} onChange={onChange} />
			<span> °{unit}</span>
		</div>
	);
}
