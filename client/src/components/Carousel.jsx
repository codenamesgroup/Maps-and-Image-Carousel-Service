import React from 'react';
import PropTypes from 'prop-types';
import reactCSS, { hover } from 'reactcss';

import { CarouselImage } from './CarouselImage.jsx';

let Carousel = (props) => {
	let styles = reactCSS({
		'default': {
			container: {
				display: 'flex',
				flexDirection: 'row',
				justifyContent: 'center',
				alignItems: 'center',
				width: '100%',
			},
		},
	});

	return (
		<div style={styles.container}>
			<CarouselImage image={props.photos && props.photos.length >= 1 ? props.photos[0] : {}}/>
			<CarouselImage image={props.photos && props.photos.length >= 2 ? props.photos[1] : {}}/>
			<CarouselImage image={props.photos && props.photos.length >= 3 ? props.photos[2] : {}}/>
		</div>
	);
};

Carousel.propTypes = {
	photos: PropTypes.array
};

export { Carousel };