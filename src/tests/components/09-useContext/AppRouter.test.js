import React from 'react'
import '@testing-library/jest-dom'
import { mount } from 'enzyme'
import { UserContext } from '../../../components/09-useContext/UserContext'
import { AppRouter } from '../../../components/09-useContext/AppRouter'
import { user } from './fixtures/userData'

describe('Test about UseContext with <AppRouter /> ', () => {


	const wrapper = mount(
		<UserContext.Provider value = {{ user }}>
			<AppRouter />
		</UserContext.Provider>
	);

	test('should be shown correctly', () => {
		expect( wrapper ).toMatchSnapshot();
	});
})
