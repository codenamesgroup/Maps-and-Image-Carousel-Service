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
		const { currentIndex } = this.state;

		this.setState({
			currentIndex: currentIndex !== 0
			? currentIndex - 1
			: this.props.photos.length - 1
		});
	}

	/* Goes forward an image in the gallery */
	pageForward = () => {
		const { currentIndex } = this.state;

		this.setState({
			currentIndex: currentIndex !== this.props.photos.length - 1
				? currentIndex + 1
				: 0
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
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
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
				display: 'flex',
				alignItems: 'center',

				position: 'absolute',
				left: '0',
				bottom: '0',
				width: '50%',
				height: '100%',

				fontSize: '60px',
				color: 'white',
				textAlign: 'left',
				cursor: 'pointer',
				userSelect: 'none',
			},
			rightButton: {
				display: 'flex',
				justifyContent: 'flex-end',
				alignItems: 'center',

				position: 'absolute',
				right: '0',
				bottom: '0',
				width: '50%',
				height: '100%',

				fontSize: '60px',
				color: 'white',
				textAlign: 'right',
				cursor: 'pointer',
				userSelect: 'none',
			},
			paginationIcon: {
				margin: '16px',
			},
			imageFooter: {
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',

				position: 'absolute',
				bottom: '0',
				width: '100%',
				padding: '8px 0',

				background: 'rgba(0, 0, 0, 0.7)',
				fontSize: '16px',
				color: 'lightgray',
				textAlign: 'center',
			},


			sidebar: {
				display: 'flex',
				flexDirection: 'column',
				padding: '16px',
			},
			businessInfo: {
				display: 'flex',
				flexDirection: 'row',
			},
			avatar: {
				width: '38px',
				height: '38px',
				borderRadius: '4px',
				background:'lightgray',
			},
			businessTitle: {
				display: 'flex',
				flexDirection: 'column',
				margin: 'auto 16px',
			},
			field: {
				padding: '0',
				margin: '0',
				fontSize: '12pt',
			},
			subField: {
				padding: '0',
				margin: '0',
				fontSize: '8pt',
				color: 'gray',
			},
			caption: {
				padding: '8pt 0',
				margin: '0',
			},
			date: {
				margin: '0',
				fontSize: '10pt',
				color: 'gray',
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

						{/* Image Container */}
						<div style={styles.imageContainer}>

							{/* Left Button */}
							<div style={styles.leftButton} onClick={this.pageBack}>
								<div style={styles.paginationIcon}> ❮ </div>
							</div>

							{/* Right Button */}
							<div style={styles.rightButton} onClick={this.pageForward}>
								<div style={styles.paginationIcon}> ❯ </div>
							</div>

							{/* Image Footer */}
							<div style={styles.imageFooter}>
								{`${currentIndex + 1} of ${photos.length}`}
							</div>

							<img style={styles.image}
								src={`https://s3-media4.fl.yelpcdn.com/bphoto/${photos[currentIndex].id}/o.jpg`}/>
						</div>

						{/* extra info */}
						<div style={styles.sidebar}>
							<div style={styles.businessInfo}>
								<div style={styles.avatar}/>
								<div style={styles.businessTitle}>
									<p style={styles.field}>Business Name</p>
									<p style={styles.subField}>From the business owner</p>
								</div>
							</div>

							<p style={styles.caption}> This is a caption</p>
							<p style={styles.date}> March 10, 2010</p>
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