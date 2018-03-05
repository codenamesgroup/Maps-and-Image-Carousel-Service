import React from 'react';
import PropTypes from 'prop-types';
import reactCSS, { hover } from 'reactcss';

class CloseButton extends React.PureComponent {
	render() {
		const styles = reactCSS({
			default: {
				closeButton : {
					padding: '4px 8px',
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
			<span style={styles.closeButton}
				onClick={this.props.onClose}>
				exit ✕
			</span>
		);
	}
}

CloseButton.propTypes = {
	onClose: PropTypes.func,
}

CloseButton = hover(CloseButton);

export { CloseButton };