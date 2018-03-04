import React from 'react';
import reactCSS from 'reactcss';
import PropTypes from 'prop-types';

class Gallery extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentIndex: props.initialIndex,
		};
	}

	clickLeft = () => {
		this.setState({
			currentIndex: this.state.currentIndex = Math.max(this.state.currentIndex - 1, 0),
		});
	}

	clickRight = () => {
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
				width: '1000px',
				height: '100%',
				marginBottom: '5%',
			},
			content: {
				display: 'flex',
				flexDirection: 'column',
				background: 'white',
				width: '100%',
				height: '100%',
			},
			closeButton: {
				marginLeft: 'auto',
				color: 'white',
				cursor: 'pointer',
				fontSize: '16pt',
				padding: '4px 8px',
			},

			imageContainer: {
				display: 'flex',
				justifyContent: 'space-between',
			},
			image: {
				width: '100%',
				height: '100%',
				objectFit: 'contain',
			},
			leftButton: {
				position: 'absolute',
				alignSelf: 'start',
				bottom: '50%',
			},
			rightButton: {
				position: 'absolute',
				alignSelf: 'end',
				bottom: '50%',
			}
		};

		const { photos, onClose } = this.props;
		const { currentIndex } = this.state;

		return (
			<div style={styles.background}>
				<div style={styles.container}>

					<div style={styles.closeButton}
						onClick={onClose}>
						exit X
					</div>

					<div style={styles.content}>
						<div style={styles.imageContainer}>
							<img style={styles.image}
								src={`https://s3-media4.fl.yelpcdn.com/bphoto/${photos[currentIndex].id}/o.jpg`}/>

							<div style={styles.leftButton} onClick={this.clickLeft}> left </div>
							<div style={styles.rightButton} onClick={this.clickRight}> right </div>
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

export { Gallery };