import React from 'react'
import '@testing-library/jest-dom'
import { mount } from 'enzyme'
import { HomeScreen } from '../../../components/09-useContext/HomeScreen'
import { UserContext } from '../../../components/09-useContext/UserContext'
import { user } from './fixtures/userData'

describe('Test about UseContext with <HomeScreen />', () => {

	const wrapper = mount(
		<UserContext.Provider value={{
			// user:user
			user
		}}>
			<HomeScreen />
		</UserContext.Provider>
	)

	test('should be shown correctly', () => {
		expect(wrapper).toMatchSnapshot();
	})
})
