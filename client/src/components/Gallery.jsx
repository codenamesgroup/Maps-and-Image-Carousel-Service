import React from 'react';
import reactCSS from 'reactcss';
import PropTypes from 'prop-types';

class Gallery extends React.PureComponent {
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
				width: '1000px',
				height: '100%',
				marginBottom: '10%',
				background: 'white',
			},
			content: {
				display: 'flex',
				flexDirection: 'column',
				backgorund: 'red',
				width: '1000px',
				marginBottom: '10%',
			},
			closeButton: {
				right: '0',
			}
		};

		return (
			<div style={styles.background}>
				<div style={styles.content}>

					<div onClick={this.props.onClose}>
						exit X
					</div>


					<div style={styles.content}>
						<img src={`https://s3-media4.fl.yelpcdn.com/bphoto/${this.props.photos[initialIndex].id}/o.jpg`}/>
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