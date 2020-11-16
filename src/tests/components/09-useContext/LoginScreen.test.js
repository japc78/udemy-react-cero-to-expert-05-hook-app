import React from 'react'
import '@testing-library/jest-dom'
import { mount } from 'enzyme'
import { UserContext } from '../../../components/09-useContext/UserContext';
import { LoginScreen } from '../../../components/09-useContext/LoginScreen';
import { user } from './fixtures/userData'

describe('Test about UseContext with <LoginScreen />', () => {

	const setUser = jest.fn();

	const wrapper = mount(
		<UserContext.Provider value={{
			setUser
		 }}>
			<LoginScreen />
		</UserContext.Provider>
	);

	test('should be shown correctly', () => {
		expect(wrapper).toMatchSnapshot();
	});

	test('should run the setUser with the expected argument', () => {
		wrapper.find('button').simulate('click');
		// wrapper.find('button').prop('onClick')();

		//Se expera que el serUser haya sido llamado con ciertos argumentos
		expect( setUser ).toHaveBeenCalledWith(user);
	});
});
