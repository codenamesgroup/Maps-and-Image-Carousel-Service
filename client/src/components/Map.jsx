import React from 'react';
import PropTypes from 'prop-types';

import { GOOGLE_API_KEY } from './../keys';

const Map = (props) => {
	let onClick = () => {
		console.log(props.latitude, props.longitude);
	};

	let style = {
		border: '1px solid #cccccc',
		width: '285px',
		height: '135px',
		cursor: 'pointer',
	};

	let mapUri = `https://maps.googleapis.com/maps/api/staticmap?key=${GOOGLE_API_KEY}&zoom=13&size=285x135&maptype=roadmap&markers=color:red%7Clabel:S%7C${props.latitude},${props.longitude}`;

	return (
		<div>
			<img style={style}
				src={mapUri}
				onClick={onClick}
			/>
		</div>
	);
}

Map.propTypes = {
	longitude: PropTypes.number,
	latitude:  PropTypes.number,
};

export { Map };