import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { HookApp } from '../HookApp';


describe('Pruebas sobre <HookApp/>', () => {

	test('should be displayed correctly', () => {
		const wrapper = shallow(<HookApp />);

		expect(wrapper).toMatchSnapshot();
	})

})
