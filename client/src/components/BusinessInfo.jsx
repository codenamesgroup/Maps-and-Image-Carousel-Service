import React from 'react';
import PropTypes from 'prop-types';

import * as FontAwesome from 'react-icons/lib/fa';

import { Map } from './Map.jsx';

const BusinessInfo = (props) => {
	let styles = {
		container: {
			margin: '0',
			padding: '4px',
			background: 'white',
			fontSize: '10px',

			heigth: '300px',

			border: '1px solid #cccccc'
		},
		infoContainer: {
			display: 'grid',
			gridTemplateColumns: '32px 1fr',
			padding: '8px',
		},
		icon: {
			width:'18px',
			height:'18px',
			margin: '4px auto',
			color: 'darkgray',
		},
		text: {
			margin: 'auto 0px',
			padding: '0',
			fontSize: '10pt',
		},
		link: {
			color: 'blue',
			cursor: 'pointer',
		},
		address: {
			margin: '0',
			padding: '0',
			fontSize: '10pt',
			fontWeight: 'bold',
		},
	};

	return (
		<div style={styles.container}>
			<Map longitude={props.business.longitude || 0.0} latitude={props.business.latitude || 0.0}/>

			<div style={styles.infoContainer}>

				<FontAwesome.FaMapMarker style={styles.icon}/>
				<div>
					<p style={styles.address}>{`${props.business.address}`}</p>
					<p style={styles.address}>{`${props.business.city}, ${props.business.state} ${props.business.postal_code}`}</p>
				</div>

				<FontAwesome.FaMapSigns style={styles.icon}/>
				<p style={styles.text}><a style={styles.link}>Get Directions</a></p>

				<FontAwesome.FaPhone style={styles.icon}/>
				<p style={styles.text}>(545) 523-7964</p> {/* @TODO: THEY DONT HAVE PHONE NUMBERS IN THE DATABASE */}

				<FontAwesome.FaExternalLink style={styles.icon}/>
				<p style={styles.text}><a style={styles.link}>{`${props.business.name}.com`}</a></p>

				<FontAwesome.FaMobile style={styles.icon}/>
				<p style={styles.text}><a style={styles.link}>Send to your phone</a></p>

			</div>
		</div>
	);
};

BusinessInfo.propTypes = {
	business: PropTypes.object,
};

export { BusinessInfo };