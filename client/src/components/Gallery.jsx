import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import { FlexDiv, FlexDivCol } from './styledComponents';

import { CloseButton } from './CloseButton.jsx';

class Gallery extends React.Component {
	static propTypes = {
		photos: PropTypes.array,
		initialIndex: PropTypes.number,
		onClose: PropTypes.func,
	};

	static defaultProps = {
		photos: [],
		initialIndex: 0,
	};

	constructor(props) {
		super(props);
		this.state = {
			currentIndex: props.initialIndex,
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

	static background = FlexDivCol.extend`
		position: fixed;
		align-items: center;
		z-index: 1;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		background: rgba(0, 0, 0, 0.4);
	`;

	static container = FlexDivCol.extend`
		min-width: 960px;
		max-width: 1300px;
		width: 95%;
		height: 100%;
		padding-bottom: 32px;
	`;

	static closeButton = styled.span`
		display: flex;
		justify-content: center;
		align-items: center;
		margin-left: auto;
		height: 32px;
	`;

	static content = styled.div`
		display: grid;
		grid-template-columns: 1fr 300px;
		border-radius: 6px;
		background: white;
		width: 100%;
		height: 100%;
	`;

	static imageContainer = styled.div`
		position: relative;
		background: black;
		height: 100%;
		width: 100%;
	`;

	static image = styled.img`
		width: 100%;
		height: 100%;
		object-fit: contain;
	`;

	static buttonHolder = styled.div`
		display: flex;
		position: absolute;
		width: 50%;
		height: 100%;
		align-items: center;
		bottom: 0;
		cursor: pointer;
		user-select: none;
	`;

	static leftButtonContainer = Gallery.buttonHolder.extend`
		left: 0;
	`;

	static rightButtonContainer = Gallery.buttonHolder.extend`
		right: 0;
		justify-content: flex-end;
	`;

	static paginationIcon = styled.div`
		font-size: 60px;
		color: white;
		text-align: right;
		margin: 16px;
	`;

	static imageFooter = FlexDiv.extend`
		position: absolute;
		bottom: 0;
		width: 100%;
		padding: 8px 0;
		background: rgba(0, 0, 0, 0.7);
		font-size: 12pt;
		color: lightgray;
		text-align: center;
	`;

	render() {
		let styles = {
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
			<Gallery.background>
				<Gallery.container>

					<Gallery.closeButton>
						<CloseButton onClose={onClose}/>
					</Gallery.closeButton>

					{/* Gallery Content */}
					<Gallery.content>

						{/* Image Container */}
						<Gallery.imageContainer>

							{/* Left Button */}
							<Gallery.leftButtonContainer onClick={this.pageBack}>
								<Gallery.paginationIcon> ❮ </Gallery.paginationIcon>
							</Gallery.leftButtonContainer>

							{/* Right Button */}
							<Gallery.rightButtonContainer onClick={this.pageForward}>
								<Gallery.paginationIcon> ❯ </Gallery.paginationIcon>
							</Gallery.rightButtonContainer>

							{/* Image Footer */}
							<Gallery.imageFooter>
								{`${currentIndex + 1} of ${photos.length}`}
							</Gallery.imageFooter>

							<Gallery.image src={`https://s3-media4.fl.yelpcdn.com/bphoto/${photos[currentIndex].id}/o.jpg`}/>
						</Gallery.imageContainer>

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

					</Gallery.content>

				</Gallery.container>
			</Gallery.background>
		)
	}
};

export { Gallery };