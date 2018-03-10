import React from 'react';
import PropTypes from 'prop-types';
import reactCSS, { hover } from 'reactcss';

class CarouselImage extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			hover: props.enlarged || false,
		};
	}

	render() {
		const normalStyles = {
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
			},
		};

		const hoverStyles = {
			container: {
				position: 'relative',
				boxShadow: '0 0 32px 8px rgba(0, 0, 0, 0.2)',

				textAlign: 'center',
				width: '250px',
				height: '250px',
			},
			image: {
				background: 'black',
				objectFit: 'cover',
				width: '250px',
				height: '250px',
				padding: '0px',
				margin: '0px',
			},
			label: {
				display: 'flex',
				flexDirection: 'row',
				position: 'absolute',
				color: 'white',
				background: 'rgba(0,0,0,0.5)',
				width: '250px',
				left: '0',
				bottom: '0',
				margin: '0',
				padding: '8px 0'
			},
		};

		const staticStyles = {
			profileIcon: {
				margin: '0 8px',
				width: '30px',
				height: '30px',
				borderRadius: '6px',
				background: 'lightgray',
			},
			captionContainer: {
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
				width: '80%',
			},
			text: {
				textAlign: 'center',
				textOverflow: 'ellipsis',
				whiteSpace: 'nowrap',
				overflow: 'hidden',
				width: '100%',
				margin: 'auto 0',
				padding: '0',
				fontSize: '10pt',
			},
		}

		const styles = this.props.enlarged ? hoverStyles : normalStyles;

		let captionText = this.props.image.caption || '';
		if (captionText.length >= 30) {
			captionText = captionText.substr(30) + '...'
		}

		return (
			<div style={styles.container}
				onClick={this.props.onClick}
				onMouseEnter={this.props.onMouseEnter}
				onMouseLeave={this.props.onMouseLeave}
			>
				<img style={styles.image}
					src={ this.props.image.id ? `https://s3-media4.fl.yelpcdn.com/bphoto/${this.props.image.id}/o.jpg` : undefined}
				/>

				<div style={styles.label}>
					<img style={staticStyles.profileIcon}/>

					<div style={staticStyles.captionContainer}>
						{captionText.length > 0 ? <p style={staticStyles.text}>{captionText}</p> : undefined }
						<p style={staticStyles.text}>by {this.props.business.name || 'Anonymous'}</p>
					</div>
				</div>
			</div>
		);
	}
}

CarouselImage.propTypes = {
	business: PropTypes.object,
	image: PropTypes.object,
	onClick: PropTypes.func,
	enlarged: PropTypes.bool,
	onMouseEnter: PropTypes.func,
	onMouseLeave: PropTypes.func,
};

CarouselImage = hover(CarouselImage);

export { CarouselImage };