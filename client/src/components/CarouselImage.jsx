import React from 'react';
import PropTypes from 'prop-types';
import reactCSS, { hover } from 'reactcss';

class CarouselImage extends React.PureComponent {

	render() {
		const styles = reactCSS({
			default: {
				container: {
					position: 'relative',
					textAlign: 'center',
				},
				image: {
					background: 'black',
					objectFit: 'cover',
					width: '220px',
					height: '220px',
					padding: '0px',
					margin: '0px',
				},
				label: {
					position: 'absolute',
					color: 'white',
					background: 'rgba(0,0,0,0.5)',
					width: '250px',
					bottom: '0',
					left: '0',

					margin: '0px',
					padding: '8px',
				}
			},
			hover: {
				image: {
					background: 'blue',
					width: '250px',
					height: '250px',
				},
			},
		}, this.props);

		return (
			<div style={styles.container}>
				<img style={styles.image}
					src={`https://s3-media4.fl.yelpcdn.com/bphoto/${this.props.image.id || 'moosiOXvCF0i_Hm_vIuNwg'}/o.jpg`}
				/>

				{this.props.hover ? <p style={styles.label}>{this.props.image.label}</p> : undefined}
			</div>
		);
	}
}

CarouselImage.propTypes = {
	image: PropTypes.object,
};

CarouselImage = hover(CarouselImage);

export { CarouselImage };