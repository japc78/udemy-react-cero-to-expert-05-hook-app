import '@testing-library/jest-dom'
const { renderHook } = require("@testing-library/react-hooks")
const { useFetch } = require("../../hooks/useFetch")

describe('Test on useFetch', () => {
	test('should return default information', () => {
		const { result } = renderHook(()=> useFetch('https://www.breakingbadapi.com/api/quotes/1'))

		const { data, loading, error} = result.current;

		expect( data ).toBe(null);
		expect( loading ).toBe(true);
		expect( error ).toBe(null);
	});


	test('should have the required information: loading false, error false', async() => {
		const { result, waitForNextUpdate } = renderHook(()=> useFetch('https://www.breakingbadapi.com/api/quotes/1'))

		await waitForNextUpdate();

		const { data, loading, error} = result.current;

		expect( data.length ).toBe(1);
		expect( loading ).toBe(false);
		expect( error ).toBe(null);

	});


	test('should handle the error', async() => {
		const { result, waitForNextUpdate } = renderHook(()=> useFetch('https://reqres.in/testerror/users?page=2'))

		await waitForNextUpdate();

		const { data, loading, error} = result.current;

		expect( data ).toBe(null);
		expect( loading ).toBe(false);
		expect( error ).toBe('No se pudo cargar la info');

	});
});