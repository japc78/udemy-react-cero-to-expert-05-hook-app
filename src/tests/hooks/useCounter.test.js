import React from 'react';
import { renderHook, act } from '@testing-library/react-hooks';
import '@testing-library/jest-dom'
import { useCounter } from '../../hooks/useCounter';


describe('Test on useCounter', () => {

	test('should return the default values', () => {
		const { result } = renderHook( ()=> useCounter());
		// console.log(result.current);

		expect(result.current.counter).toBe(10);
		expect(typeof result.current.increment).toBe('function');
		expect(typeof result.current.decrement).toBe('function');
		expect(typeof result.current.reset).toBe('function');
	})


	test('should show the value past as an argument', () => {
		const { result } = renderHook( ()=> useCounter(100));
		console.log(result.current.counter);

		expect(result.current.counter).toBe(100);

	})

	test('should to increment the counter +1', () => {
		const { result } = renderHook( ()=> useCounter(100));
		const { increment } = result.current;

		act(() => {
			increment();
		})

		const { counter } = result.current;
		expect(counter).toBe(101);

	})

	test('should to decrement the counter -1', () => {
		const { result } = renderHook( ()=> useCounter(100));
		const { decrement } = result.current;

		act(() => {
			decrement();
		})

		const { counter } = result.current;
		expect(counter).toBe(99);
	})

	test('should to reset the counter to initial value', () => {
		const { result } = renderHook( ()=> useCounter(100));
		const { increment, reset } = result.current;

		act(() => {
			increment();
			reset();
		})

		const { counter } = result.current;
		expect(counter).toBe(100);
	})
})
