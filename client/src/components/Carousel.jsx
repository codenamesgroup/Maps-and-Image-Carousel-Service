import React from 'react';
import PropTypes from 'prop-types';
import reactCSS, { hover } from 'reactcss';

import { CarouselImage } from './CarouselImage.jsx';
import { Gallery } from './Gallery.jsx';

class Carousel extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			galleryOpen: false,
			galleryStartPage: 0,
		};
	};

	itemOnClick = (index) => {
		this.setState({
			galleryOpen: true,
			galleryStartPage: index
		});
	}

	render() {
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
				<CarouselImage image={this.props.photos && this.props.photos.length >= 1 ? this.props.photos[0] : {}}
					onClick={this.itemOnClick.bind(null, 0)}
				/>
				<CarouselImage image={this.props.photos && this.props.photos.length >= 2 ? this.props.photos[1] : {}}
					onClick={this.itemOnClick.bind(null, 1)}
				/>
				<CarouselImage image={this.props.photos && this.props.photos.length >= 3 ? this.props.photos[2] : {}}
					onClick={this.itemOnClick.bind(null, 2)}
				/>

				{
					this.state.galleryOpen
					? <Gallery photos={this.props.photos}/>
					: undefined
				}
			</div>
		)
	}
};

Carousel.propTypes = {
	photos: PropTypes.array,
};

export { Carousel };