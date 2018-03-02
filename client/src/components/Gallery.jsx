import React from 'react';
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
			}
		};

		return (
			<div style={styles.background}>
				<div onClick={this.props.onClose}>
					exit X
				</div>

				<div style={styles.container}>
					<p>hello lul</p>
				</div>
			</div>
		)
	}
};

Gallery.propTypes = {
	photos: PropTypes.array,
	onClose: PropTypes.func,
};

export { Gallery };