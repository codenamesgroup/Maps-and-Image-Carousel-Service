import React from 'react';
import PropTypes from 'prop-types';

import { Map } from './Map.jsx';

const BusinessInfo = (props) => {

	return (
		<div>
			<Map longitude={props.business.longitude || 0.0} latitude={props.business.latitude || 0.0}/>
		</div>
	);
};

BusinessInfo.propTypes = {
	business: PropTypes.object,
};

export { BusinessInfo };