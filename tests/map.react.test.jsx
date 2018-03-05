import React from 'react';
import { shallowToJson } from 'enzyme-to-json';

import { Map } from './../client/src/components/Map.jsx';

describe('<Map/>', () => {
	let component = shallow(<Map longitude={0} latitude={0}/>);

	it('should render with empty business object', () => {
		expect(shallowToJson(component)).toMatchSnapshot();
	});
});