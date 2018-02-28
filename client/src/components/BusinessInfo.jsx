import React from 'react';
import PropTypes from 'prop-types';

import { Map } from './Map.jsx';

const BusinessInfo = (props) => {
	let styles = {
		container: {
			padding: '4px',
			background: 'white',
			fontSize: '10px',
		},
		address: {
			fontWeight: 'bold',
		}
	};

	console.log(props);

	return (
		<div style={styles.container}>
			<Map longitude={props.business.longitude || 0.0} latitude={props.business.latitude || 0.0}/>
			<p style={styles.address}>{`${props.business.address}`}</p>
			<p style={styles.address}>{`${props.business.city}, ${props.business.state} ${props.business.postal_code}`}</p>
			<a>Get Directions</a>
			<p>(545) 523-7964</p> {/* @TODO: THEY DONT HAVE PHONE NUMBERS IN THE DATABASE */}
			<p><a href='www.google.come'>{`${props.business.name}.com`}</a></p>
			<p><a href='www.google.come'>Message the business</a></p>
			<p><a href='www.google.come'>Send to your phone</a></p>
		</div>
	);
};

BusinessInfo.propTypes = {
	business: PropTypes.object,
};

export { BusinessInfo };