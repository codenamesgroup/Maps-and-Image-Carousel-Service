import React from 'react';
import reactCSS, { hover } from 'reactcss';
import PropTypes from 'prop-types';

import { CloseButton } from './CloseButton.jsx';

class Gallery extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentIndex: props.initialIndex || 0,
		};
	}

	/* Goes back an image in the gallery */
	pageBack = () => {
		this.setState({
			currentIndex: this.state.currentIndex = Math.max(this.state.currentIndex - 1, 0),
		});
	}

	/* Goes forward an image in the gallery */
	pageForward = () => {
		this.setState({
			currentIndex: Math.min(this.state.currentIndex + 1, this.props.photos.length - 1),
		});
	}

	render() {
		let styles = {
			background: {
				position: 'fixed',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				zIndex: '1',
				width: '100%',
				height: '100%',
				left: '0',
				top: '0',
				background: 'rgba(0, 0, 0, 0.4)',
			},
			container: {
				display: 'flex',
				flexDirection: 'column',
				minWidth: '960px',
				maxWidth: '1300px',
				width: '95%',
				height: '100%',
				paddingBottom: '32px',
			},
			content: {
				display: 'grid',
				gridTemplateColumns: '1fr 300px',

				borderRadius: '6px',
				background: 'white',
				width: '100%',
				height: '100%',
			},
			closeButton: {
				marginLeft: 'auto',
				height: '32px',
			},
			imageContainer: {
				position: 'relative',
				alignItems: 'center',
				background: 'black',
				height: '100%',
				width: '100%',
			},
			image: {
				width: '100%',
				height: '100%',
				objectFit: 'contain',
			},
			leftButton: {
				position: 'absolute',
				cursor: 'pointer',
				userSelect: 'none',
				left: '0',
				bottom: '50%',
			},
			rightButton: {
				position: 'absolute',
				cursor: 'pointer',
				userSelect: 'none',
				right: '0',
				bottom: '50%',
			}
		};

		const { photos, onClose } = this.props;
		const { currentIndex } = this.state;

		return (
			<div style={styles.background}>

				<div style={styles.container}>
					<span style={styles.closeButton}>
						<CloseButton onClose={onClose}/>
					</span>

					{/* Gallery Content */}
					<div style={styles.content}>

						{/* Image container */}
						<div style={styles.imageContainer}>

							<div style={styles.leftButton} onClick={this.pageBack}> left </div>
							<div style={styles.rightButton} onClick={this.pageForward}> right </div>

							<img style={styles.image}
								src={`https://s3-media4.fl.yelpcdn.com/bphoto/${photos[currentIndex].id}/o.jpg`}/>
						</div>

						<div>
							swag
						</div>
					</div>

				</div>
			</div>
		)
	}
};

Gallery.propTypes = {
	photos: PropTypes.array,
	initialIndex: PropTypes.number,
	onClose: PropTypes.func,
};

Gallery = hover(Gallery);

export { Gallery };