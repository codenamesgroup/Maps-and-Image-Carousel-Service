import React from 'react';
import PropTypes from 'prop-types';
import reactCSS, { hover } from 'reactcss';

class CloseButton extends React.PureComponent {
	render() {
		const styles = reactCSS({
			default: {
				closeButton : {
					textAlign: 'center',
					color: 'white',
					cursor: 'pointer',
					fontSize: '16pt',
					userSelect: 'none',
				},
			},
			hover: {
				closeButton: {
					color: 'lightgray',
				}
			}
		}, this.props);

		return (
			<div style={styles.closeButton}
				onClick={this.props.onClose}>
				exit ✕
			</div>
		);
	}
}

CloseButton.propTypes = {
	onClose: PropTypes.func,
}

CloseButton = hover(CloseButton);

export { CloseButton };