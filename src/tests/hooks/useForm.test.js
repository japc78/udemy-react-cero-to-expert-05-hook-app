import React from 'react';
import '@testing-library/jest-dom'
import { act, renderHook } from '@testing-library/react-hooks';
import { useForm } from '../../hooks/useForm';

describe('Test on useForm', () => {
	const initialForm = {
		name: 'Bitcero',
		email: 'dev@bitcero.es'
	}


	test('should to return a default form', () => {

		const { result } = renderHook(()=> useForm(initialForm));
		// console.log(result.current);
		const [formValues, handleInputChange, reset] = result.current;

		expect(formValues).toEqual(initialForm);
		expect(typeof handleInputChange).toBe('function');
		expect(typeof reset).toBe('function');


	});


	test('should to change the value of form (change name)', () => {
		const { result } = renderHook(()=> useForm(initialForm));
		const [ , handleInputChange] = result.current;
		act(()=>{
			handleInputChange({
				target: {
					name: 'name',
					value: 'Totalflojo'
				}
			});
		});

		const [ formValues ] = result.current;
		console.log(formValues);

		//con spread ...InitialForm, nos aseguramos que todas la propiedades no cambiaron y solo se cambio el name
		expect(formValues).toEqual({...initialForm, name:'Totalflojo'})
	});


	test('should to reset the form with RESET', () => {
		const { result } = renderHook(()=> useForm(initialForm));
		const [ , handleInputChange, reset] = result.current;
		act(()=>{
			handleInputChange({
				target: {
					name: 'name',
					value: 'Totalflojo'
				}
			});
			reset();
		});

		const [ formValues ] = result.current;
		expect(formValues).toEqual( initialForm )
	});
});
