import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import { MultipleCustomHooks } from '../../../components/03-examples/MultipleCustomHooks'
import { useFetch } from '../../../hooks/useFetch';
import { useCounter } from '../../../hooks/useCounter';


jest.mock('../../../hooks/useFetch')
jest.mock('../../../hooks/useCounter')


describe('Test on <MultipleCustomHooks/>', () => {

	useCounter.mockReturnValue({
		counter: 1,
		increment: () => {}
	});


	test('should show it correctly', () => {
		useFetch.mockReturnValue({
			data: null,
			loading: true,
			error: null
		});

		// useCounter.mockReturnValue({
		// 	counter: 1,
		// 	increment: () => {}
		// });

		const wrapper = shallow(<MultipleCustomHooks/>);
		expect( wrapper ).toMatchSnapshot();
	});

	test('should show the information', () => {
		useFetch.mockReturnValue({
			data: [{
				author: 'Fernando',
				quote: 'Hola Mundo'
			}],
			loading: false,
			error: null
		});

		// useCounter.mockReturnValue({
		// 	counter: 1,
		// 	increment: () => {}
		// });

		const wrapper = shallow(<MultipleCustomHooks/>);
		// console.log(wrapper.html());

		expect(wrapper.find('.alert').exists()).toBe(false);
		expect(wrapper.find('.mb-0').text().trim()).toBe('Hola Mundo');
		expect(wrapper.find('footer').text().trim()).toBe('Fernando');
	})
})
