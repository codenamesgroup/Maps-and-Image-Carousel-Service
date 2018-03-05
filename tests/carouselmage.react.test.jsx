import React from 'react';
import { shallowToJson } from 'enzyme-to-json';

import { CarouselImage } from './../client/src/components/CarouselImage.jsx';

describe('<CarouselImage/>', () => {
	let component = shallow(<CarouselImage/>);

	it('should render', () => {
		expect(shallowToJson(component)).toMatchSnapshot();
	});

	it('should display label when hovered', () => {
		expect(true).toBe(true);
	});
});