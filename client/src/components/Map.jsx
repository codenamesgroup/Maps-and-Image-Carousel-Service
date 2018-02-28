import React from 'react';
import PropTypes from 'prop-types';

const Map = (props) => {
	let onClick = () => {
		console.log(props.latitude, props.longitude);
	};

	let style = {
		cursor: 'pointer',
	};

	return (
		<div>
			<img style={style}
				src={`https://maps.googleapis.com/maps/api/staticmap?zoom=13&size=286x135&maptype=roadmap
				&markers=color:blue%7Clabel:S%7C${props.latitude},${props.longitude}`}
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