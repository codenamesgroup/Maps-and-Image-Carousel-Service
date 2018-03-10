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
			hoveredIndex: 1,
		};
	};

	itemOnClick = (index) => {
		this.setState({
			galleryOpen: true,
			galleryStartPage: index
		});
	}

	galleryClose = () => {
		this.setState({galleryOpen: false});
	}

	onMouseEnter = (i) => {
		this.setState({ hoveredIndex: i});
	}

	render() {
		let styles = reactCSS({
			'default': {
				container: {
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'center',
					alignItems: 'center',
				},
			},
		});

		return (
			<div style={styles.container}>
				<CarouselImage image={this.props.photos && this.props.photos.length >= 1 ? this.props.photos[0] : {}}
					business={this.props.business || {}}
					onClick={this.itemOnClick.bind(null, 0)}
					enlarged = {this.state.hoveredIndex === 0}
					onMouseEnter={this.onMouseEnter.bind(this, 0)}
					onMouseLeave={this.onMouseEnter.bind(this, 1)}
				/>
				<CarouselImage image={this.props.photos && this.props.photos.length >= 2 ? this.props.photos[1] : {}}
					business={this.props.business || {}}
					onClick={this.itemOnClick.bind(null, 1)}
					enlarged = {this.state.hoveredIndex === 1}
					onMouseEnter={this.onMouseEnter.bind(this, 1)}
					onMouseLeave={this.onMouseEnter.bind(this, 1)}
				/>
				<CarouselImage image={this.props.photos && this.props.photos.length >= 3 ? this.props.photos[2] : {}}
					business={this.props.business || {}}
					onClick={this.itemOnClick.bind(null, 2)}
					enlarged = {this.state.hoveredIndex === 2}
					onMouseEnter={this.onMouseEnter.bind(this, 2)}
					onMouseLeave={this.onMouseEnter.bind(this, 1)}
				/>

				{
					this.state.galleryOpen
					? <Gallery photos={this.props.photos} initialIndex={this.state.galleryStartPage} onClose={this.galleryClose}/>
					: undefined
				}
			</div>
		)
	}
};

Carousel.propTypes = {
	business: PropTypes.object,
	photos: PropTypes.array,
};

export { Carousel };