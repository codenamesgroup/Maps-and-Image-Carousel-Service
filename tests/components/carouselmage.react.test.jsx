import React from 'react';
import { shallowToJson } from 'enzyme-to-json';

import { CarouselImage } from './../../client/src/components/CarouselImage.jsx';

describe('<CarouselImage/>', () => {
	let component = shallow(<CarouselImage/>);

	it('should render', () => {
		expect(shallowToJson(component)).toMatchSnapshot();
	});

	it('should be hoverable', () => {
		expect(component.state().hover).toEqual(false);
		component.simulate('mouseOver');
		expect(component.state().hover).toEqual(true);
	});
});