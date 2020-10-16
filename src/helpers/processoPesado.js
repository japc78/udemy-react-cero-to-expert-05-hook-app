export const procesoPesado = (iteracciones) => {
	for(let i = 0; i < iteracciones; i++) {
		console.log(`Here we goooo: ${i}`);
	}

	return `${ iteracciones } iteraciones realizadas.`;
}