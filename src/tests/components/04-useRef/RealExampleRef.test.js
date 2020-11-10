import '@testing-library/jest-dom'
import { shallow } from 'enzyme';
import { MultipleCustomHooks } from '../../../components/03-examples/MultipleCustomHooks';
import { RealExampleRef } from '../../../components/04-useRef/RealExampleRef';

describe('Test interactions with the useState', () => {
	const wrapper = shallow(<RealExampleRef />);

	test('should be shown correctly ', () => {
		expect(wrapper).toMatchSnapshot();
		expect( wrapper.find('MultipleCustomHooks').exists()).toBe(false);
	});


	test('should be shown the component <MultipleCustomHooks />', () => {
		wrapper.find('button').simulate('click');
		expect( wrapper.find('MultipleCustomHooks').exists()).toBe(true);
	});
})
