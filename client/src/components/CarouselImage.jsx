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
					width: '220px',
					height: '220px',
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
					display: 'none',
					position: 'absolute',
					color: 'white',
					background: 'rgba(0,0,0,0.5)',
					width: '250px',
					left: '0',
					bottom: '0',

					margin: '0px',
					padding: '8px 0',
				}
			},
			hover: {
				container: {
					width: '250px',
					height: '250px',
				},
				image: {
					width: '250px',
					height: '250px',
				},
				label: {
					display: 'block',
					width: '250px',
				},
			},
		}, this.props);

		return (
			<div style={styles.container}
				onClick={this.props.onClick}
			>
				<img style={styles.image}
					src={ this.props.image.id ? `https://s3-media4.fl.yelpcdn.com/bphoto/${this.props.image.id}/o.jpg` : undefined}
				/>

				<p style={styles.label}>{this.props.image.label || ''}</p>
			</div>
		);
	}
}

CarouselImage.propTypes = {
	image: PropTypes.object,
	onClick: PropTypes.func,
};

CarouselImage = hover(CarouselImage);

export { CarouselImage };