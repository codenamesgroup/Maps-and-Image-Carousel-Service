import React from 'react';
import PropTypes from 'prop-types';

class Gallery extends React.Component {
	render() {
		let styles = {
			background: {
				position: 'fixed',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				zIndex: '1',
				width: '100%',
				height: '100%',
				left: '0',
				top: '0',

				background: 'rgba(0, 0, 0, 0.4)',
			},
			container: {
				display: 'flex'
			}
		};

		return (
			<div style={styles.background}>
				<div style={styles.container}>
					<p>hello lul</p>
				</div>
			</div>
		)
	}
};

Gallery.propTypes = {
	photos: PropTypes.array,
};

export { Gallery };